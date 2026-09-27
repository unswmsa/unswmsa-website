import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { fetchEventDetails } from '../../lib/rubric';
import { googleCalendarUrl, downloadIcs } from '../../lib/calendar';
import { MAROON, CREAM, TERRACOTTA, PLACEHOLDER_GREY } from './EventsComponents';

// pop-up with the full poster + details, so people don't have to leave the site to read about an event
function EventModal({ event, upcoming, onClose }) {
  const [details, setDetails] = useState(null);
  const [failed, setFailed] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    fetchEventDetails(event.id)
      .then((d) => !cancelled && setDetails(d))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [event.id]);

  // esc to close, lock page scroll while open, focus the close button for keyboard users
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const full = { ...event, ...details };
  const date = new Date(event.date);
  const when = date.toLocaleString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
  const endTime = details?.endDate
    ? new Date(details.endDate).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' })
    : null;
  const mapUrl = details?.lat
    ? `https://www.google.com/maps/search/?api=1&query=${details.lat},${details.lng}`
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm sm:p-6 animate-[fade-in_0.2s_ease-out]"
      onClick={onClose}
    >
      <style>{'@keyframes fade-in { from { opacity: 0 } to { opacity: 1 } }'}</style>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto sm:overflow-hidden rounded-t-2xl sm:rounded-2xl shadow-2xl grid sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] animate-[fade-up_0.3s_ease-out]"
        style={{ backgroundColor: CREAM }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 transition-colors"
        >
          <Icon icon="ph:x-bold" className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center" style={{ backgroundColor: PLACEHOLDER_GREY }}>
          {event.image ? (
            // rubric's filler patterns are wide banners, stretch those to fill; real posters are shown whole
            <img
              src={event.image}
              alt={`${event.name} poster`}
              className={`w-full h-full max-h-[60vh] sm:max-h-[80vh] ${
                event.image.includes('/patterns/') ? 'object-cover min-h-40 sm:min-h-full' : 'object-contain'
              }`}
            />
          ) : (
            <Icon icon="mdi:image-outline" className="w-16 h-16 text-white my-16" />
          )}
        </div>

        <div className="flex flex-col p-6 sm:max-h-[80vh] sm:overflow-y-auto">
          <h2 id="event-modal-title" className="text-2xl font-bold leading-tight pr-8" style={{ color: MAROON }}>
            {event.name}
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-800">
            <li className="flex gap-2.5">
              <Icon icon="ph:calendar-blank" className="w-5 h-5 shrink-0" style={{ color: TERRACOTTA }} />
              {when}
              {endTime && ` – ${endTime}`}
            </li>
            <li className="flex gap-2.5">
              <Icon icon="ph:map-pin" className="w-5 h-5 shrink-0" style={{ color: TERRACOTTA }} />
              {mapUrl ? (
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2">
                  {details.address || event.location}
                </a>
              ) : (
                event.location
              )}
            </li>
            {event.price && (
              <li className="flex gap-2.5">
                <Icon icon="ph:ticket" className="w-5 h-5 shrink-0" style={{ color: TERRACOTTA }} />
                {event.price}
              </li>
            )}
          </ul>

          <div className="mt-5 text-sm leading-relaxed text-gray-700 whitespace-pre-line">
            {details?.description ||
              (failed ? 'Couldn’t load the full description, see Rubric for details.' : (
                <span className="block space-y-2" aria-label="Loading description">
                  <span className="block h-3 w-full rounded bg-black/10 animate-pulse" />
                  <span className="block h-3 w-5/6 rounded bg-black/10 animate-pulse" />
                  <span className="block h-3 w-2/3 rounded bg-black/10 animate-pulse" />
                </span>
              ))}
          </div>

          <div className="mt-6 pt-5 border-t flex flex-col gap-3" style={{ borderColor: `${MAROON}26` }}>
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110 transition"
              style={{ backgroundColor: MAROON }}
            >
              {upcoming ? 'Sign up on Rubric →' : 'View on Rubric →'}
            </a>
            {upcoming && (
              <div className="flex gap-2">
                <a
                  href={googleCalendarUrl(full)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold hover:bg-black/5 transition-colors"
                  style={{ borderColor: MAROON, color: MAROON }}
                >
                  <Icon icon="logos:google-calendar" className="w-4 h-4" /> Google Calendar
                </a>
                <button
                  onClick={() => downloadIcs(full)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold hover:bg-black/5 transition-colors"
                  style={{ borderColor: MAROON, color: MAROON }}
                >
                  <Icon icon="ph:calendar-plus" className="w-4 h-4" /> Apple / Outlook
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
