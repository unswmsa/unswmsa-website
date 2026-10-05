import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

export const TERRACOTTA = '#A74A38';
export const MAROON = '#76352E';
export const CARD_WIDTH = 260;
export const CARD_GAP = 24;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export const TeamCard = ({ member }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((f) => !f);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${member.name}, ${member.role}. Press Enter to flip and see their favourite verse.`}
      className="relative w-[260px] h-96 cursor-pointer shrink-0 group"
      style={{ perspective: '1000px' }}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* the front of the card before its flipped */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-end"
          style={{ backfaceVisibility: 'hidden', backgroundColor: '#6b6b6b' }}
        >
          <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2 z-10">
            <Icon icon="ph:arrows-clockwise-bold" className="w-4 h-4 text-white" />
          </div>

          <div className="flex-1 flex items-center justify-center overflow-hidden">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <Icon icon="ph:image" className="w-16 h-16 text-white/60" />
            )}
          </div>
          <div className="bg-[#EAE6DB] m-3 rounded-xl p-4 flex items-center gap-3">
            <Icon icon={member.icon} className="w-6 h-6 shrink-0" style={{ color: TERRACOTTA }} />
            <div>
              <p className="font-bold" style={{ color: TERRACOTTA }}>{member.role}</p>
              <p className="text-sm text-gray-800">{member.name}</p>
            </div>
          </div>
        </div>

        {/* the back of the card when its flipped */}
        <div
          className="absolute inset-0 rounded-2xl p-5 text-white overflow-y-auto flex flex-col justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: TERRACOTTA,
          }}
        >
          <div className="absolute top-3 right-3 bg-black/20 rounded-full p-2">
            <Icon icon="ph:arrows-clockwise-bold" className="w-4 h-4 text-white" />
          </div>
          <p className="font-bold mb-2 text-lg">Favourite surah, ayah, or hadith</p>
          <p className="text-sm">{member.favourite}</p>
          <div
            className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none rounded-b-2xl"
            style={{ background: `linear-gradient(to top, ${TERRACOTTA}, transparent)` }}
          />
        </div>
      </div>
    </div>
  );
};

export const ExtShuraCard = ({ team }) => (
  <div
    className="rounded-2xl p-6 w-[260px] min-h-[280px] h-full shrink-0 hover:scale-[1.03] transition-transform duration-300 flex flex-col"
    style={{ backgroundColor: TERRACOTTA }}
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon icon={team.icon} className="w-6 h-6 text-white" />
      <h3 className="font-bold text-white text-lg">{team.team}</h3>
    </div>
    <p className="text-white/70 text-sm mb-2">
      {team.members.length} {team.members.length === 1 ? 'member' : 'members'}
    </p>
    <ul className="text-white text-sm space-y-1">
      {team.members.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  </div>
);

export const Carousel = ({ items, cardsPerView, renderItem, keyFn }) => {
  const isMobile = useIsMobile();
  const effectiveCardsPerView = isMobile ? 1 : cardsPerView;

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - effectiveCardsPerView);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="relative flex items-center justify-center gap-4 py-8">
      <button onClick={goPrev} disabled={index === 0} aria-label="Previous" className="disabled:opacity-30 shrink-0 active:scale-90 transition-transform">
        <Icon icon="ph:caret-left-bold" className="w-8 h-8" style={{ color: TERRACOTTA }} />
      </button>

      <div
        className="overflow-hidden"
        style={{ width: `${effectiveCardsPerView * CARD_WIDTH + (effectiveCardsPerView - 1) * CARD_GAP}px` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`,
          }}
        >
          {items.map((item, i) => (
            <div key={keyFn(item, i)} className="flex">{renderItem(item)}</div>
          ))}
        </div>
      </div>

      <button onClick={goNext} disabled={index === maxIndex} aria-label="Next" className="disabled:opacity-30 shrink-0 active:scale-90 transition-transform">
        <Icon icon="ph:caret-right-bold" className="w-8 h-8" style={{ color: TERRACOTTA }} />
      </button>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: i === index ? MAROON : '#c9a89a' }}
          />
        ))}
      </div>
    </div>
  );
};

export const PrayerLocationCard = ({ title, times, location, details, mapEmbedUrl }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-10">
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div
        className="rounded-full text-white font-bold flex justify-between items-center px-6 py-3 mb-4"
        style={{ backgroundColor: TERRACOTTA }}
      >
        <span>{title}</span>
        <span>{times}</span>
      </div>
      <p className="font-bold" style={{ color: TERRACOTTA }}>Location: {location}</p>
      <p className="font-bold mt-2" style={{ color: TERRACOTTA }}>Details:</p>
      <ul className="list-disc list-inside" style={{ color: TERRACOTTA }}>
        {details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>

    <div className="relative">
      <div
        className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 z-10"
        style={{ borderColor: TERRACOTTA }}
      />
      <div
        className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 z-10"
        style={{ borderColor: TERRACOTTA }}
      />
      <div className="rounded-2xl overflow-hidden shadow-md h-64">
        <iframe
          src={mapEmbedUrl}
          title={`${title} map`}
          className="w-full h-full border-0"
          loading="lazy"
          allow="geolocation"
        />
      </div>
      <p className="text-xs text-gray-500 mt-1 text-center">
        Map by{' '}
        <a href="https://www.mazemap.com/" target="_blank" rel="noopener noreferrer" className="underline">
          MazeMap
        </a>
      </p>
    </div>
  </div>
);

export const ServiceCard = ({ service }) => (
  <div
    className="rounded-2xl p-6 flex flex-col hover:scale-[1.03] transition-transform duration-300"
    style={{ backgroundColor: TERRACOTTA }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-white/15 rounded-full p-2">
        <Icon icon={service.icon} className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-white font-bold text-xl">{service.title}</h3>
    </div>
    <p className="text-white text-sm mb-2">{service.description}</p>
    {service.schedule && (
      <p className="text-white/80 text-sm whitespace-pre-line mt-auto pt-2 border-t border-white/20">
        {service.schedule}
      </p>
    )}
  </div>
);

export const RevealSection = ({ children, sectionName }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={sectionName}
      ref={ref}
      className={visible ? 'opacity-100 animate-[fade-up_0.7s_ease-out_forwards]' : 'opacity-0'}
    >
      {children}
    </div>
  );
};