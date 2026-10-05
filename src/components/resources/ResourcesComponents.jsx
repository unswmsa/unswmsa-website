import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { TERRACOTTA, MAROON } from '../about/AboutComponents';
import bookmark from '../../assets/resources/bookmark.png';

const BUTTON_RED = '#A43522';
const TRANSLATION_RED = '#AC3724';
const DOT_INACTIVE = '#c9a89a';
const ELEVATION = '0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.3)';

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

/* ---------- resource cards (bookmarks)---------- */
export const ResourceCard = ({ resource }) => {
	const buttonBase =
		'text-white text-[9px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-5 sm:py-2 rounded-[8px] sm:rounded-[13px] shadow-md';
  const comingSoonBase =
  'text-[9px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-5 sm:py-2 rounded-full border-2 bg-white/40 cursor-default select-none';
  return (
    <div
      className="relative w-full min-h-[96px] sm:min-h-[150px] flex items-start hover:scale-[1.02] transition-transform duration-300"
      style={{
        backgroundImage: `url(${bookmark})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* empty space so content starts after the rug */}
      <div className="w-[22%] sm:w-[24%] shrink-0" />

      <div className="flex-1 pl-[3%] sm:pl-[4%] pr-3 sm:pr-6 py-3 sm:pt-8 sm:pb-4">
        <div className="max-w-[20rem]">
          <h3 className="font-bold text-sm sm:text-lg leading-tight">{resource.title}</h3>
          <p className="text-[11px] leading-snug sm:text-xs text-gray-900 whitespace-pre-line mt-0.5 sm:mt-1">
            {resource.description}
          </p>
        </div>

        <div className="flex justify-end mt-2 sm:hidden">
          {resource.comingSoon ? (
          <span
            className={comingSoonBase}
            style={{ borderColor: BUTTON_RED, color: BUTTON_RED }}
          >
            coming soon
          </span>
          ) : (
						<a
							href={resource.href}
							target="_blank"
							rel="noopener noreferrer"
							className={buttonBase}
							style={{ backgroundColor: BUTTON_RED }}
						>
							view →
						</a>
          )}
        </div>
      </div>

      {resource.comingSoon ? (
      <span
        className={`hidden sm:block absolute bottom-4 right-5 ${comingSoonBase}`}
        style={{ borderColor: BUTTON_RED, color: BUTTON_RED }}
      >
        coming soon
      </span>
      ) : (
        <a
          href={resource.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group hidden sm:block absolute bottom-4 right-5 ${buttonBase} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-90`}
          style={{ backgroundColor: BUTTON_RED }}
        >
          view resource{' '}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      )}
    </div>
  );
};

/* ---------- duas & dhikr ---------- */
const SIZES = {
	small: {
		wrapper: 'max-w-[640px]',
		arrowL: 'lg:-left-24',
		arrowR: 'lg:-right-24',
		card: 'rounded-[20px] px-[6%] pt-4 pb-3 flex flex-col sm:min-h-[440px]',
		title: 'text-[clamp(1.25rem,2.4vw,1.625rem)] leading-[1.2] mb-3',
		titleColor: undefined,
		pill: 'rounded-[40px] w-[88%] px-4 py-4 mb-4',
		pillColor: BUTTON_RED,
		arabic: 'text-[clamp(1rem,1.7vw,1.25rem)] leading-[1.7]',
		translit: 'text-[clamp(0.8125rem,1.3vw,1rem)] leading-[1.5] mb-2',
		translation: 'text-[clamp(0.8125rem,1.3vw,1rem)] leading-[1.6] font-medium',
	},
	large: {
		wrapper: 'max-w-[776px]',
		arrowL: 'lg:-left-16',
		arrowR: 'lg:-right-16',
		card: 'rounded-[30px] px-4 sm:px-5 pt-3 pb-3 flex flex-col sm:min-h-[450px]',
		title: 'text-[clamp(1rem,1.6vw,1.125rem)] mb-2',
		titleColor: TRANSLATION_RED,
		pill: 'rounded-[40px] px-6 py-4 mb-4',
		pillColor: TERRACOTTA,
		arabic: 'text-[clamp(1rem,1.8vw,1.375rem)] leading-[1.6]',
		translit: 'text-[clamp(0.75rem,1.2vw,0.875rem)] leading-[1.65] mb-3',
		translation: 'text-[clamp(0.75rem,1.2vw,0.875rem)] leading-[1.65] font-semibold',
	},
};

//  bold the text
const renderBold = (text) =>
  text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
  );

const DuaCard = ({ dua, size }) => {
  const [open, setOpen] = useState(false);
  const s = SIZES[size];

  return (
    <div
      className={`relative bg-white text-center w-full ${s.card}`}
      style={{ boxShadow: ELEVATION }}
    >
      {dua.tag && (
        <span
          className="inline-block mb-1 sm:mb-0 sm:absolute sm:left-4 sm:top-3 text-[10px] px-2 py-0.5 rounded-full border"
          style={{ borderColor: MAROON, color: MAROON, backgroundColor: '#EAE6DB' }}
        >
          {dua.tag}
        </span>
      )}

      {/* content: takes the free space and stays centred */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className={`font-semibold ${s.title}`} style={{ color: s.titleColor }}>
          {dua.title}
        </h3>

        <div
          className={`text-white mx-auto flex items-center justify-center ${s.pill}`}
          style={{ backgroundColor: s.pillColor }}
        >
          <p dir="rtl" lang="ar" className={s.arabic}>
            {dua.arabic}
          </p>
					
        </div>

        <p className={`font-semibold ${s.translit}`} style={{ color: MAROON }}>
          {dua.transliteration}
        </p>

        <p className={s.translation} style={{ color: TRANSLATION_RED }}>
          {renderBold(dua.translation)}
        </p>
      </div>

      {dua.more && (
        <div className="flex items-center justify-between gap-3 mt-2 min-h-[32px]">
          <p
            className={`text-xs italic text-gray-700 text-left transition-opacity duration-200 ${
              open ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {dua.more}
          </p>

          <button
            onClick={() => setOpen((o) => !o)}
            className="shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-lg text-sm font-semibold text-[#1a1a1a] hover:opacity-70 transition-opacity"
          >
            {open ? 'hide' : 'reference'}
            <Icon
              icon="ph:arrow-circle-right-fill"
              className={`w-5 h-5 transition-transform ${open ? 'rotate-90' : ''}`}
              style={{ color: TERRACOTTA }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

const Arrow = ({ direction, onClick, position }) => (
  <button
    onClick={onClick}
    aria-label={direction === 'left' ? 'Previous' : 'Next'}
    className={`absolute top-1/2 -translate-y-1/2 active:scale-90 transition-transform ${position}`}
  >
    <Icon icon={`ph:caret-${direction}-bold`} className="w-8 h-8" style={{ color: TERRACOTTA }} />
  </button>
);

export const DuaCarousel = ({ items, size = 'small' }) => {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const s = SIZES[size];

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  const dots = (
    <div className="flex justify-center gap-2">
      {items.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: i === index ? MAROON : DOT_INACTIVE }}
        />
      ))}
    </div>
  );

  if (isMobile) {
    const handleTouchEnd = (e) => {
      if (touchStartX.current === null) return;
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (diff > 50) goPrev();
      if (diff < -50) goNext();
      touchStartX.current = null;
    };

    return (
      <div className="mb-10">
        <div
          className="grid px-1 pb-2"
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, i) => (
            <div
              key={i}
              aria-hidden={i !== index}
              className={`col-start-1 row-start-1 flex ${i === index ? 'visible' : 'invisible'}`}
            >
              <DuaCard dua={item} size={size} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button onClick={goPrev} aria-label="Previous" className="active:scale-90 transition-transform">
            <Icon icon="ph:caret-left-bold" className="w-8 h-8" style={{ color: TERRACOTTA }} />
          </button>
          {dots}
          <button onClick={goNext} aria-label="Next" className="active:scale-90 transition-transform">
            <Icon icon="ph:caret-right-bold" className="w-8 h-8" style={{ color: TERRACOTTA }} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <div className={`relative mx-auto px-10 lg:px-0 ${s.wrapper}`}>
        <Arrow direction="left" onClick={goPrev} position={`left-0 ${s.arrowL}`} />

        <div className="overflow-hidden px-3 -mx-3 pb-6 -mb-6 pt-1">
          <div
            className="flex items-stretch transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                aria-hidden={i !== index}
                className={`w-full shrink-0 px-3 flex transition-opacity duration-500 ${
                  i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <DuaCard dua={item} size={size} />
              </div>
            ))}
          </div>
        </div>

        <Arrow direction="right" onClick={goNext} position={`right-0 ${s.arrowR}`} />
      </div>

      <div className="mt-8">{dots}</div>
    </div>
  );
};
