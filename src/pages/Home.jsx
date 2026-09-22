import { useState, useEffect } from 'react';
import box1 from '../assets/home/box1.png';
import box2 from '../assets/home/box2.png';
import box3 from '../assets/home/box3.png';
import gradient from '../assets/shared/gradient.png';
import logo from '../assets/shared/logo.png';
import substackCover from '../assets/home/substack.png';
import introVideo from '../assets/home/intro-video.mp4';
import quranBg from '../assets/home/quranbg.png';
import ayah from '../assets/home/ayah.png';
import headstartLegal from '../assets/sponsors/headstartlegal.png';
import icfal from '../assets/sponsors/ifcal.png';
import taxFactor from '../assets/sponsors/taxfactor.png';

const TERRACOTTA = '#A74A38';
const CREAM = '#EAE6DB';
const SUBSTACK_URL = 'https://unswmsa.substack.com/';

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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-10">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">
        <div>
          <h3
            className="text-[#A74A38] font-bold text-xl border-b-2 mb-4 pb-2 inline-block"
            style={{ borderColor: TERRACOTTA }}
          > Latest Publication
          </h3>
          <div className="flex flex-col items-center text-center">
            <img
              src={substackCover}
              alt="Within the Well of Wanting"
              className="w-32 h-32 object-cover rounded-xl mb-4"
            />
            <p className="font-bold">Within the Well of Wanting</p>
            <p className="text-sm text-gray-500 mb-4">Aug 11, 2026</p>
            <div className="flex gap-3">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-sm px-4 py-1.5 rounded-full"
                style={{ backgroundColor: TERRACOTTA }}
              > read more →
              </a>
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-1.5 rounded-full border"
                style={{ borderColor: TERRACOTTA, color: TERRACOTTA }}
              > Subscribe
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3
            className="text-[#A74A38] font-bold text-xl border-b-2 mb-4 pb-2 inline-block"
            style={{ borderColor: TERRACOTTA }}
          > Term 3 Initiative: MRW
          </h3>
          <video className="w-full h-52 object-cover rounded-lg" autoPlay muted loop playsInline>
            <source src={introVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="relative w-full py-16 px-6 flex flex-col items-center justify-center gap-4 mt-10"
        style={{
          backgroundImage: `url(${quranBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={ayah} alt="Quran ayah in Arabic" className="max-w-2xl w-full" />
        <p className="text-white italic text-center max-w-xl">
          "Indeed, they were youths who believed in their Lord, and We increased them in guidance"
        </p>
        <p className="text-white/70 text-sm text-center"> 
          Surah Al-Kahf, 18:13
        </p>
      </div>
    </section>
  );
}

export default Home;