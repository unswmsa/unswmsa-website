// sorting, filtering + grouping for the events page

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

// events stay "upcoming" for the whole day they're on
const isUpcoming = (event) => new Date(event.date) >= startOfToday();

// UNSW terms roughly: T1 Feb-May, T2 Jun-Aug, T3 Sep-Dec. holiday events go with the closest term
const getTerm = (date) => {
  const month = date.getMonth();
  if (month <= 4) return 1;
  if (month <= 7) return 2;
  return 3;
};

// weekly events (halaqahs etc) repeat every week, only show the latest one per term
const normaliseTitle = (name) => name.toLowerCase().replace(/[’']/g, '').replace(/\s+/g, ' ').trim();

// rubric doesn't tag this, but our event names always say "Brothers'" / "Sisters'"
export const getAudience = (event) => {
  const name = event.name.toLowerCase();
  if (name.includes('brother')) return 'brothers';
  if (name.includes('sister')) return 'sisters';
  return 'everyone';
};

// 'brothers' shows brothers' events + ones open to everyone, same for 'sisters'
export const filterByAudience = (events, audience) =>
  audience === 'everyone' ? events : events.filter((e) => [audience, 'everyone'].includes(getAudience(e)));

const withCardDetails = (event) => {
  const date = new Date(event.date);
  return {
    ...event,
    // only show a price when there is one, most events are free
    price: /^free$/i.test(event.price ?? '') ? '' : event.price,
    day: date.getDate(),
    month: date.toLocaleDateString('en-AU', { month: 'short' }).slice(0, 3),
    time: date.toLocaleTimeString('en-AU', { weekday: 'short', hour: 'numeric', minute: '2-digit' }),
  };
};

export function getUpcomingEvents(events) {
  return events
    .filter(isUpcoming)
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((e) => {
      const event = withCardDetails(e);
      return { ...event, description: [event.time, event.location].filter(Boolean).join(' · ') };
    });
}

// every event (weekly ones included, so they land on the right days), oldest first, for the calendar view
export function getCalendarEvents(events) {
  return events
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((e) => {
      const event = withCardDetails(e);
      return {
        ...event,
        upcoming: isUpcoming(e),
        shortTime: new Date(e.date).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' }),
        description: [event.time, event.location].filter(Boolean).join(' · '),
      };
    });
}

// -> [{ year: 2026, terms: [{ term: 'Term 1', events: [...] }, ...] }, ...] newest year first
export function groupPastEvents(events) {
  const years = new Map();
  const past = events.filter((e) => !isUpcoming(e)).sort((a, b) => b.date.localeCompare(a.date));

  for (const event of past) {
    const date = new Date(event.date);
    const year = date.getFullYear();
    const term = getTerm(date);
    if (!years.has(year)) years.set(year, new Map());
    const terms = years.get(year);
    if (!terms.has(term)) terms.set(term, new Map());
    const termEvents = terms.get(term);

    const key = normaliseTitle(event.name);
    if (!termEvents.has(key)) {
      termEvents.set(key, { ...withCardDetails(event), description: event.location });
    }
  }

  return [...years.entries()]
    .sort(([a], [b]) => b - a)
    .map(([year, terms]) => ({
      year,
      terms: [...terms.entries()]
        .sort(([a], [b]) => a - b)
        .map(([term, termEvents]) => ({ term: `Term ${term}`, events: [...termEvents.values()] })),
    }));
}
