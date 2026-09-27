import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '@iconify/react';

export const TERRACOTTA = '#A74A38';
export const MAROON = '#76352E';
export const CREAM = '#EAE6DB';
export const PLACEHOLDER_GREY = '#6B6A65';

const PEACH = '#E8A48F';

// "tomorrow", "in 3 days" etc for the next-up link
const countdown = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const day = new Date(date);
  day.setHours(0, 0, 0, 0);
  const days = Math.round((day - today) / 86400000);
  if (days <= 0) return 'today';
  if (days === 1) return 'tomorrow';
  return `in ${days} days`;
};

// banner with the 2025 recap video. the video is portrait (9:16), so on phones it fills
// the banner behind the title. on desktop it sits uncropped on the right with a warm light behind it.
// kept deliberately calm: the video is the only thing that moves
export const EventsHero = ({ video, background, pattern, nextEvent, onOpenNext }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div
      id="overview"
      className="relative overflow-hidden h-96 md:h-[34rem]"
      style={{ backgroundColor: '#120b09', backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
    >
      {/* faint msa pattern + a warm light behind the video */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{ backgroundImage: `url(${pattern})`, backgroundSize: '320px' }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: 'radial-gradient(ellipse 40% 70% at 68% 52%, rgba(167,74,56,0.38), transparent 70%)' }}
      />

      <div className="relative h-full max-w-[68rem] mx-auto md:px-6 flex items-center justify-center md:gap-20 lg:gap-28">
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-0 max-w-md opacity-0 animate-[fade-up_0.8s_ease-out_0.1s_forwards]">
          <p className="text-xs md:text-sm font-semibold tracking-[0.35em] mb-3" style={{ color: PEACH }}>
            UNSWMSA
          </p>
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-wide leading-none bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(180deg, #F6F1E8 35%, #E3B3A0 100%)' }}
          >
            EVENTS
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/75 leading-relaxed">
            Halaqahs, sports, socials and more, all year round. Come along, bring a friend.
          </p>

          {nextEvent && (
            <div className="mt-6">
              <button
                onClick={onOpenNext}
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs md:text-sm text-white hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold" style={{ color: PEACH }}>Next up</span>
                <span className="text-white/40">|</span>
                <span>
                  {nextEvent.name}
                  <span className="text-white/60"> · {countdown(nextEvent.date)}</span>
                </span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>
          )}
        </div>

        <div className="absolute inset-0 md:relative md:inset-auto">
          <div className="relative w-full h-full bg-black md:w-auto md:h-[26rem] md:aspect-[9/16] md:rounded-2xl md:overflow-hidden md:ring-1 md:ring-white/15 md:shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* darken the video on phones so the title stays readable over it */}
            <div className="absolute inset-0 bg-black/60 md:hidden" />
            <button
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              className="absolute top-3 right-3 md:top-auto md:bottom-3 z-10 bg-black/60 rounded-full p-2 hover:bg-black/80 transition-colors"
            >
              <Icon icon={muted ? 'ph:speaker-slash-fill' : 'ph:speaker-high-fill'} className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionHeading = ({ children, action }) => (
  <div className="mb-6">
    <div className="flex items-end justify-between gap-4 mb-2">
      <h2 className="text-xl md:text-2xl font-semibold" style={{ color: MAROON }}>
        {children}
      </h2>
      {action}
    </div>
    <hr className="border-t-2 m-0" style={{ borderColor: MAROON }} />
  </div>
);

// clicking a card opens the event pop-up. upcoming events get a price tag + sign up button
export const EventCard = ({ event, upcoming = false, onOpen }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onOpen(event)}
      className="group w-full text-left rounded-lg overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.25)] h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ outlineColor: MAROON }}
    >
      {/* posters are made for instagram (4:5 portrait), so match that shape */}
      <div
        className="relative w-full aspect-[4/5] overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: PLACEHOLDER_GREY }}
      >
        {event.image ? (
          <>
            {/* shimmer while the poster loads, then fade it in */}
            {!loaded && <div className="absolute inset-0 animate-pulse bg-white/10" />}
            <img
              src={event.image}
              alt=""
              onLoad={() => setLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-[opacity,transform] duration-500 group-hover:scale-105 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          </>
        ) : (
          <Icon icon="mdi:image-outline" className="w-12 h-12 text-white" />
        )}

        <div
          className="absolute top-2 left-2 w-11 rounded-md py-1 text-center leading-none shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          style={{ backgroundColor: CREAM }}
        >
          <span className="block text-lg font-bold" style={{ color: MAROON }}>{event.day}</span>
          <span className="block text-[10px] font-semibold uppercase tracking-wide" style={{ color: TERRACOTTA }}>
            {event.month}
          </span>
        </div>

        {upcoming && event.price && (
          <span className="absolute bottom-2 left-2 rounded-full bg-black/65 px-2.5 py-0.5 text-[11px] font-semibold text-white">
            {event.price}
          </span>
        )}
      </div>

      <div
        className="w-full flex-1 flex flex-col items-center text-center text-white px-3 pt-2.5 pb-2.5"
        style={{ backgroundColor: MAROON }}
      >
        <h3 className="font-bold text-base md:text-lg leading-snug line-clamp-2">{event.name}</h3>
        <p className="text-xs mt-0.5 mb-2.5 max-w-[16rem] line-clamp-2 text-white/85">{event.description}</p>
        <span
          className={`mt-auto text-xs font-bold rounded-full px-4 py-1 transition-colors ${
            upcoming ? 'group-hover:brightness-110' : 'border border-white/60 group-hover:bg-white/10'
          }`}
          style={upcoming ? { backgroundColor: CREAM, color: MAROON } : undefined}
        >
          {upcoming ? 'Sign up →' : 'View →'}
        </span>
      </div>
    </button>
  );
};

// scroll-snap carousel: 1 card (with the next peeking in) on phones, 3 on tablets, 4 on desktop, swipeable on touch
export const EventCarousel = ({ events, showDots = false, upcoming = false, onOpen }) => {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  // scroll by however many whole cards fit on screen
  const getStep = (el) => {
    const gap = parseFloat(getComputedStyle(el).columnGap || 0);
    const cardWidth = (el.firstElementChild?.offsetWidth ?? el.clientWidth) + gap;
    return Math.max(1, Math.floor((el.clientWidth + gap + 1) / cardWidth)) * cardWidth;
  };

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const step = getStep(el);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const count = maxScroll > 1 ? 1 + Math.ceil(maxScroll / step - 0.01) : 1;
    setPageCount(count);
    setPage(maxScroll - el.scrollLeft <= 2 ? count - 1 : Math.round(el.scrollLeft / step));
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [measure, events]);

  const goTo = (i) => {
    const el = trackRef.current;
    el.scrollTo({ left: Math.min(i * getStep(el), el.scrollWidth - el.clientWidth), behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center w-full gap-2 md:gap-4">
        <button
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
          aria-label="Previous events"
          className="shrink-0 disabled:opacity-30 active:scale-90 transition-transform"
        >
          <Icon icon="ph:caret-left" className="w-7 h-7 md:w-8 md:h-8" style={{ color: MAROON }} />
        </button>

        <div
          ref={trackRef}
          onScroll={measure}
          className="flex-1 flex justify-center-safe gap-6 overflow-x-auto snap-x snap-mandatory py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="snap-start shrink-0 w-[78%] sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <EventCard event={event} upcoming={upcoming} onOpen={onOpen} />
            </div>
          ))}
        </div>

        <button
          onClick={() => goTo(page + 1)}
          disabled={page >= pageCount - 1}
          aria-label="Next events"
          className="shrink-0 disabled:opacity-30 active:scale-90 transition-transform"
        >
          <Icon icon="ph:caret-right" className="w-7 h-7 md:w-8 md:h-8" style={{ color: MAROON }} />
        </button>
      </div>

      {showDots && pageCount > 1 && (
        <div className="flex gap-3">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
              className="w-3 h-3 rounded-full transition-colors"
              style={{ backgroundColor: i === page ? '#9B2B2B' : '#B87160' }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const YearTabs = ({ years, selected, onSelect }) => (
  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
    {years.map((year, i) => (
      <div key={year} className="flex items-center gap-2 sm:gap-3">
        {i > 0 && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TERRACOTTA }} />}
        <button
          onClick={() => onSelect(year)}
          aria-pressed={year === selected}
          className="w-16 sm:w-24 py-1.5 rounded text-xs sm:text-sm text-white shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-colors hover:brightness-110"
          style={{ backgroundColor: year === selected ? MAROON : TERRACOTTA }}
        >
          {year}
        </button>
      </div>
    ))}
  </div>
);

export const TermLabel = ({ term }) => (
  <span
    className="inline-block px-5 py-1.5 rounded text-xs sm:text-sm text-white shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
    style={{ backgroundColor: TERRACOTTA }}
  >
    {term}
  </span>
);

const AUDIENCES = [
  { value: 'everyone', label: 'All events' },
  { value: 'brothers', label: 'Brothers' },
  { value: 'sisters', label: 'Sisters' },
];

// segmented control, picking brothers/sisters still shows events open to everyone.
// the options are equal width, so the maroon highlight can just slide by its own width
export const AudienceFilter = ({ selected, onSelect }) => {
  const index = AUDIENCES.findIndex((a) => a.value === selected);
  return (
    <div
      role="group"
      aria-label="Filter events"
      className="relative grid grid-cols-3 rounded-full p-1 shadow-[0_4px_14px_rgba(0,0,0,0.25)] border"
      style={{ backgroundColor: CREAM, borderColor: `${MAROON}33` }}
    >
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full transition-transform duration-300 ease-out"
        style={{ backgroundColor: MAROON, transform: `translateX(${index * 100}%)` }}
      />
      {AUDIENCES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          aria-pressed={selected === value}
          className="relative w-24 sm:w-28 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300"
          style={{ color: selected === value ? 'white' : MAROON }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

// upcoming (cards) / calendar switch next to the upcoming heading
export const ViewToggle = ({ view, onChange }) => (
  <div role="group" aria-label="Choose view" className="inline-flex rounded-full p-0.5 border" style={{ borderColor: `${MAROON}40` }}>
    {[
      { value: 'cards', label: 'Upcoming', icon: 'ph:squares-four' },
      { value: 'calendar', label: 'Calendar', icon: 'ph:calendar-blank' },
    ].map(({ value, label, icon }) => (
      <button
        key={value}
        onClick={() => onChange(value)}
        aria-pressed={view === value}
        className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors"
        style={view === value ? { backgroundColor: MAROON, color: 'white' } : { color: MAROON }}
      >
        <Icon icon={icon} className="w-4 h-4" />
        <span className="hidden sm:inline">{label}</span>
      </button>
    ))}
  </div>
);
