// fetches MSA's events from Rubric (the ticketing site we use).
// this is the same unofficial API campus.hellorubric.com uses for our society page,
// so it could change without warning. if it fails, the events page falls back to
// src/data/eventsSnapshot.json (refresh it with `npm run update-events`).

const RUBRIC_API_URL = 'https://api.hellorubric.com/';
const MSA_SOCIETY_ID = 6361;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

async function callRubricApi(endpoint, details) {
  const params = new URLSearchParams({ endpoint, details: JSON.stringify(details) });
  const res = await fetch(RUBRIC_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  if (!res.ok) throw new Error(`Rubric API responded ${res.status}`);
  return res.json();
}

// "Tue, 29 Sep 2026, 12.00 PM" or "Tue, 29 Sep 2026 12:00 PM" -> "2026-09-29T12:00" (sydney wall-clock time)
function parseRubricDate(formatted) {
  const match = formatted?.match(/(\d{1,2}) (\w{3}) (\d{4}),? (\d{1,2})[.:](\d{2}) (AM|PM)/);
  if (!match) return null;
  const [, day, month, year, hour, minute, ampm] = match;
  const hour24 = (Number(hour) % 12) + (ampm === 'PM' ? 12 : 0);
  const pad = (n) => String(n).padStart(2, '0');
  return `${year}-${pad(MONTHS.indexOf(month) + 1)}-${pad(day)}T${pad(hour24)}:${minute}`;
}

function normaliseEvent(raw) {
  return {
    id: raw.eventid,
    name: raw.title.trim(),
    date: parseRubricDate(raw.formatteddate),
    dateLabel: raw.formatteddate,
    // "AGSM, UNSW Sydney Campus, Botany Street, ..." -> "AGSM"
    location: raw.subtitle?.split(',')[0].trim() ?? '',
    // events without an uploaded poster get one of rubric's generic patterns
    image: raw.image?.replace('portal.getqpay.com', 'portal.hellorubric.com') || null,
    link: `https://campus.hellorubric.com/?eid=${raw.eventid}`,
    price: raw.info ?? '',
  };
}

export async function fetchMsaEvents() {
  const data = await callRubricApi('getSocietyLandingPage', {
    societyid: MSA_SOCIETY_ID,
    domain: 'campus.hellorubric.com',
  });
  const section = data.sections?.find((s) => s.sectionname === 'Events');
  if (!data.success || !section) throw new Error('Rubric response had no events');
  return section.array.map(normaliseEvent).filter((e) => e.date);
}

// rubric descriptions are html. we only want the text (never render their html directly)
function htmlToText(html) {
  const withBreaks = (html ?? '').replace(/<br\s*\/?>|<\/(div|p|li)>/gi, '\n');
  const text = new DOMParser().parseFromString(withBreaks, 'text/html').body.textContent ?? '';
  return text.replace(/\n{3,}/g, '\n\n').trim();
}

// extra details for the event pop-up (description, end time, full address)
const detailsCache = new Map();

export function fetchEventDetails(eventId) {
  if (!detailsCache.has(eventId)) {
    const request = callRubricApi('https://appserver.getqpay.com:9090/AppServerSwapnil/event/details', {
      eventId,
      currentUrl: `https://campus.hellorubric.com/?eid=${eventId}`,
    }).then(({ eventDetails: d }) => {
      if (!d) throw new Error('Rubric response had no event details');
      return {
        description: htmlToText(d.eventDescription),
        endDate: parseRubricDate(d.eventEndTime),
        address: d.eventAddress ?? '',
        lat: d.eventLatitude,
        lng: d.eventLongitude,
      };
    });
    // don't cache failures, so reopening the pop-up retries
    request.catch(() => detailsCache.delete(eventId));
    detailsCache.set(eventId, request);
  }
  return detailsCache.get(eventId);
}
