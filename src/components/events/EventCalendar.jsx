import { useState, useMemo } from 'react';
import { Icon } from '@iconify/react';
import { MAROON, CREAM, TERRACOTTA, PLACEHOLDER_GREY } from './EventsComponents';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// local "2026-09-29", same format as the start of event.date
const dayKey = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// monday-first weeks covering the whole month
const buildWeeks = (month) => {
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const start = new Date(first);
  start.setDate(first.getDate() - ((first.getDay() + 6) % 7));
  const weeks = [];
  const day = new Date(start);
  while (weeks.length === 0 || day.getMonth() === month.getMonth()) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
};

// month view on desktop, a day-by-day list on phones (a 7 column grid is too cramped there)
function EventCalendar({ events, onOpen }) {
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const byDay = useMemo(() => {
    const map = new Map();
    for (const event of events) {
      const key = event.date.slice(0, 10);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(event);
    }
    return map;
  }, [events]);

  // don't let people page past the first/last month that has events
  const firstMonth = events.length ? events[0].date.slice(0, 7) : null;
  const lastMonth = events.length ? events[events.length - 1].date.slice(0, 7) : null;
  const monthKey = dayKey(month).slice(0, 7);
  const lastAllowed = lastMonth && lastMonth > dayKey(new Date()).slice(0, 7) ? lastMonth : dayKey(new Date()).slice(0, 7);

  const shift = (n) => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + n, 1));
  const todayKey = dayKey(new Date());
  const weeks = buildWeeks(month);
  const monthEvents = events.filter((e) => e.date.startsWith(monthKey));

  return (
    <div className="rounded-2xl bg-white/70 shadow-[0_4px_14px_rgba(0,0,0,0.12)] border overflow-hidden" style={{ borderColor: `${MAROON}22` }}>
      <div className="flex items-center justify-between px-4 sm:px-6 py-2" style={{ backgroundColor: MAROON }}>
        <button
          onClick={() => shift(-1)}
          disabled={!firstMonth || monthKey <= firstMonth}
          aria-label="Previous month"
          className="p-1 rounded-full text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
        >
          <Icon icon="ph:caret-left-bold" className="w-5 h-5" />
        </button>
        <h3 className="font-semibold text-base" style={{ color: CREAM }} aria-live="polite">
          {month.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          onClick={() => shift(1)}
          disabled={monthKey >= lastAllowed}
          aria-label="Next month"
          className="p-1 rounded-full text-white disabled:opacity-30 hover:bg-white/10 transition-colors"
        >
          <Icon icon="ph:caret-right-bold" className="w-5 h-5" />
        </button>
      </div>

      {/* desktop: month grid */}
      <div className="hidden md:block">
        <div className="grid grid-cols-7 text-xs font-semibold uppercase tracking-wide border-b" style={{ color: TERRACOTTA, borderColor: `${MAROON}1a` }}>
          {WEEKDAYS.map((d) => (
            <div key={d} className="px-2.5 py-1.5">{d}</div>
          ))}
        </div>
        {weeks.map((week) => (
          <div key={dayKey(week[0])} className="grid grid-cols-7">
            {week.map((day) => {
              const key = dayKey(day);
              const inMonth = day.getMonth() === month.getMonth();
              const dayEvents = byDay.get(key) ?? [];
              return (
                <div
                  key={key}
                  className={`min-h-[5.25rem] p-1 border-b border-r last:border-r-0 ${inMonth ? '' : 'bg-black/[0.03]'}`}
                  style={{ borderColor: `${MAROON}14` }}
                >
                  <span
                    className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-xs ${
                      inMonth ? 'text-gray-800' : 'text-gray-400'
                    } ${key === todayKey ? 'font-bold text-white' : ''}`}
                    style={key === todayKey ? { backgroundColor: TERRACOTTA } : undefined}
                  >
                    {day.getDate()}
                  </span>
                  <div className="mt-0.5 flex flex-col gap-0.5">
                    {dayEvents.map((event) => (
                      <button
                        key={event.id}
                        onClick={() => onOpen(event)}
                        title={event.name}
                        className={`w-full text-left rounded-md px-1.5 py-0.5 text-[11px] leading-tight transition hover:brightness-110 ${
                          event.upcoming ? 'text-white' : 'opacity-70 hover:opacity-100'
                        }`}
                        style={event.upcoming ? { backgroundColor: MAROON } : { backgroundColor: `${TERRACOTTA}26`, color: MAROON }}
                      >
                        <span className="block font-semibold truncate">{event.name}</span>
                        <span className="block opacity-80">{event.shortTime}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* phones: list of this month's events by day */}
      <div className="md:hidden divide-y divide-[#76352E1f]">
        {monthEvents.length === 0 && (
          <p className="text-center text-sm py-10" style={{ color: MAROON }}>No events this month.</p>
        )}
        {monthEvents.map((event) => (
          <button
            key={event.id}
            onClick={() => onOpen(event)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-black/[0.03] transition-colors ${
              event.upcoming ? '' : 'opacity-70'
            }`}
          >
            <div
              className="w-11 shrink-0 rounded-md py-1 text-center leading-none"
              style={{ backgroundColor: event.date.startsWith(todayKey) ? TERRACOTTA : CREAM }}
            >
              <span className="block text-lg font-bold" style={{ color: event.date.startsWith(todayKey) ? 'white' : MAROON }}>
                {event.day}
              </span>
              <span className="block text-[10px] font-semibold uppercase" style={{ color: event.date.startsWith(todayKey) ? 'white' : TERRACOTTA }}>
                {new Date(event.date).toLocaleDateString('en-AU', { weekday: 'short' })}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-sm truncate" style={{ color: MAROON }}>{event.name}</p>
              <p className="text-xs text-gray-600 truncate">{[event.shortTime, event.location].filter(Boolean).join(' · ')}</p>
            </div>
            <div className="w-10 aspect-[4/5] shrink-0 rounded overflow-hidden" style={{ backgroundColor: PLACEHOLDER_GREY }}>
              {event.image && <img src={event.image} alt="" loading="lazy" className="w-full h-full object-cover object-top" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar;
