// "add to calendar" links. dates are sydney wall-clock strings like "2026-09-29T12:00"

const TIMEZONE = 'Australia/Sydney';

// "2026-09-29T12:00" -> "20260929T120000"
const compact = (date) => `${date.replace(/[-:]/g, '')}00`;

// rubric doesn't always give an end time, assume an hour
const endOf = (event) => {
  if (event.endDate) return event.endDate;
  const [day, time] = event.date.split('T');
  const hour = String(Math.min(Number(time.slice(0, 2)) + 1, 23)).padStart(2, '0');
  return `${day}T${hour}${time.slice(2)}`;
};

export function googleCalendarUrl(event) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.name,
    dates: `${compact(event.date)}/${compact(endOf(event))}`,
    ctz: TIMEZONE,
    location: event.address || event.location,
    details: `Sign up: ${event.link}`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

// .ics file works for apple calendar + outlook
export function downloadIcs(event) {
  const escape = (text) => text.replace(/[\\,;]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//UNSWMSA//Events//EN',
    'BEGIN:VEVENT',
    `UID:rubric-${event.id}@unswmsa`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`,
    `DTSTART;TZID=${TIMEZONE}:${compact(event.date)}`,
    `DTEND;TZID=${TIMEZONE}:${compact(endOf(event))}`,
    `SUMMARY:${escape(event.name)}`,
    `LOCATION:${escape(event.address || event.location)}`,
    `DESCRIPTION:${escape(`Sign up: ${event.link}`)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: `${event.name}.ics` });
  a.click();
  URL.revokeObjectURL(url);
}
