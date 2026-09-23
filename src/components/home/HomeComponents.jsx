import { useState, useEffect } from 'react';

export const TERRACOTTA = '#A74A38';
export const CREAM = '#EAE6DB';

export const TypingTagline = () => {
  const fullText = 'for students, by students';
  const splitIndex = fullText.indexOf('by ') + 3;
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const beforeOrange = displayed.slice(0, Math.min(displayed.length, splitIndex));
  const orangePart = displayed.slice(splitIndex);

  return (
    <p className="text-white italic min-h-[1.5em]">
      {beforeOrange}
      <span style={{ color: TERRACOTTA }}>{orangePart}</span>
      <span className="animate-pulse">|</span>
    </p>
  );
};

export const OutlineButton = ({ children, href, external }) => (
  <a  
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="px-4 py-1 rounded border bg-[#EAE6DB] text-msa-black border-[#A74A38] hover:bg-[#A74A38] hover:text-white transition-colors"
  >
    {children}
  </a>
);

export const FeatureCard = ({ card }) => (
  <div className="rounded-2xl overflow-hidden shadow-lg bg-msa-black">
    <div
      className="h-40"
      style={{ backgroundImage: `url(${card.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
    <div className="p-5 text-white">
      <h3 className="font-bold text-xl mb-1">{card.title}</h3>
      <div className="w-10 border-b-2 mb-3" style={{ borderColor: TERRACOTTA }} />
      <ul className="text-sm mb-6 space-y-0.5">
        {card.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={card.to} className="text-sm underline hover:text-white/80 transition-colors">
        {card.linkText} →
      </a>
    </div>
  </div>
);