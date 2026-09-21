import { useState, useEffect } from 'react';
import box1 from '../assets/home/box1.png';
import box2 from '../assets/home/box2.png';
import box3 from '../assets/home/box3.png';
import gradient from '../assets/shared/gradient.png';
import logo from '../assets/shared/logo.png';

const TERRACOTTA = '#A74A38';
const CREAM = '#EAE6DB';

const featureCards = [
  {
    title: 'About',
    bg: box2,
    items: ['Our services', 'Meet our team', "Jummu'ah Timings", 'Voices of the Ummah'],
    linkText: 'Find out more',
    to: '/about',
  },
  {
    title: 'Events',
    bg: box3,
    items: ['Upcoming Events', 'Past Events', 'Event Archive'],
    linkText: 'View all events',
    to: '/events',
  },
  {
    title: 'Resources',
    bg: box1,
    items: ['Dawah guide', 'Halal food map', 'Uni Survival guide', 'Event Lecture Notes', 'Exam duas'],
    linkText: 'View all guides',
    to: '/resources',
  },
];

const TypingTagline = () => {
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

const OutlineButton = ({ children }) => (
  <button
    className="px-4 py-1 rounded border"
    style={{ backgroundColor: CREAM, borderColor: TERRACOTTA }}
  >
    {children}
  </button>
);

const FeatureCard = ({ card }) => (
  <div
    className="relative h-64 rounded-lg overflow-hidden flex flex-col justify-end p-4 text-white"
    style={{ backgroundImage: `url(${card.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div
      className="absolute inset-0"
      style={{ backgroundImage: `url(${gradient})`, backgroundSize: 'cover', opacity: 0.85 }}
    />
    <div className="relative z-10">
      <h3 className="font-bold text-lg mb-2">{card.title}</h3>
      <ul className="text-sm mb-3 space-y-0.5">
        {card.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={card.to} className="text-sm underline">
        {card.linkText} →
      </a>
    </div>
  </div>
);

function Home() {
  return (
    <section className="home-page">
      <div
        className="relative flex flex-col items-center justify-start text-center px-4 pt-24 min-h-screen"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={logo}
          alt="UNSWMSA logo"
          className="w-72 mb-10 opacity-0 animate-[fade-up_0.8s_ease-out_0.1s_forwards]"
        />
        <h1 className="text-white text-3xl font-bold opacity-0 animate-[fade-up_0.8s_ease-out_0.4s_forwards]">
          UNSWMSA
        </h1>
        <div className="opacity-0 animate-[fade-up_0.8s_ease-out_0.6s_forwards]">
          <TypingTagline />
        </div>
        <div className="flex gap-3 mt-6 opacity-0 animate-[fade-up_0.8s_ease-out_0.9s_forwards]">
          <OutlineButton>Join Us Now</OutlineButton>
          <OutlineButton>About Us</OutlineButton>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 py-10">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Home;