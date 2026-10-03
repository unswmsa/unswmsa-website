import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { fetchEventDetails } from '../../lib/rubric';
import { MAROON, CREAM, TERRACOTTA, PLACEHOLDER_GREY } from './EventsComponents';

// wide card with the poster on the left and the details on the right. used instead of the
// carousel when there are only 1-2 upcoming events, so the section doesn't look empty
const FeaturedEventCard = ({ event, onOpen }) => {
  const [description, setDescription] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchEventDetails(event.id)
      .then((d) => !cancelled && setDescription(d.description))
      .catch(() => !cancelled && setDescription(''));
    return () => {
      cancelled = true;
    };
  }, [event.id]);

  const when = new Date(event.date).toLocaleString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    // whole card opens the pop-up, the sign up button goes straight to rubric
    <div
      role="button"
      tabIndex={0}
      aria-label={`More about ${event.name}`}
      onClick={() => onOpen(event)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(event);
        }
      }}
      className="group flex cursor-pointer rounded-2xl overflow-hidden bg-white/70 border shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ borderColor: `${MAROON}22`, outlineColor: MAROON }}
    >
      <div
        className="relative w-32 sm:w-44 shrink-0 aspect-[4/5] self-start overflow-hidden"
        style={{ backgroundColor: PLACEHOLDER_GREY }}
      >
        {event.image ? (
          <img
            src={event.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Icon icon="mdi:image-outline" className="w-10 h-10 text-white mx-auto" />
        )}
        <div
          className="absolute top-2 left-2 w-10 rounded-md py-1 text-center leading-none shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          style={{ backgroundColor: CREAM }}
        >
          <span className="block text-base font-bold" style={{ color: MAROON }}>{event.day}</span>
          <span className="block text-[9px] font-semibold uppercase tracking-wide" style={{ color: TERRACOTTA }}>
            {event.month}
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col p-4 sm:p-5">
        <h3 className="font-bold text-base sm:text-lg leading-snug line-clamp-2" style={{ color: MAROON }}>
          {event.name}
        </h3>
        <ul className="mt-2 space-y-1 text-xs sm:text-sm text-gray-700">
          <li className="flex gap-1.5">
            <Icon icon="ph:calendar-blank" className="w-4 h-4 shrink-0 mt-px" style={{ color: TERRACOTTA }} />
            {when}
          </li>
          {event.location && (
            <li className="flex gap-1.5">
              <Icon icon="ph:map-pin" className="w-4 h-4 shrink-0 mt-px" style={{ color: TERRACOTTA }} />
              <span className="truncate">{event.location}</span>
            </li>
          )}
          {event.price && (
            <li className="flex gap-1.5">
              <Icon icon="ph:ticket" className="w-4 h-4 shrink-0 mt-px" style={{ color: TERRACOTTA }} />
              {event.price}
            </li>
          )}
        </ul>

        {/* first few lines of the rubric description (hidden on small phones, there's no room) */}
        <div className="hidden sm:block mt-3 text-sm text-gray-600 leading-relaxed">
          {description === null ? (
            <span className="block space-y-1.5" aria-label="Loading description">
              <span className="block h-2.5 w-full rounded bg-black/10 animate-pulse" />
              <span className="block h-2.5 w-4/5 rounded bg-black/10 animate-pulse" />
            </span>
          ) : (
            // join the description's lines up so the 3 line preview isn't mostly blank lines
            <p className="line-clamp-3">{description.replace(/\s*\n+\s*/g, ' ')}</p>
          )}
        </div>

        <div className="mt-auto pt-4">
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-block rounded-full px-4 py-1 text-xs font-bold text-white hover:brightness-110 transition"
            style={{ backgroundColor: MAROON }}
          >
            Sign up →
          </a>
        </div>
      </div>
    </div>
  );
};

function FeaturedEvents({ events, onOpen }) {
  return (
    <div className={`grid gap-5 ${events.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'}`}>
      {events.map((event) => (
        <FeaturedEventCard key={event.id} event={event} onOpen={onOpen} />
      ))}
    </div>
  );
}

export default FeaturedEvents;
