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
import { Icon } from '@iconify/react';

const TERRACOTTA = '#A74A38';
const CREAM = '#EAE6DB';
const SUBSTACK_URL = 'https://unswmsa.substack.com/';
const SUBSTACK_SUBSRIBE_URL = 'https://unswmsa.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Funswmsa.substack.com%2F';

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
        className="relative flex flex-col items-center justify-start text-center px-4 pt-24 pb-24"
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-10">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} card={card} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">
        <div>
          <h3
            className="text-[#A74A38] font-bold text-xl border-b-2 mb-4 pb-2 inline-block"
            style={{ borderColor: TERRACOTTA }}
          > Latest Publication
          </h3>
          <div className="flex gap-6 h-64">
            <img
              src={substackCover}
              alt="Within the Well of Wanting"
              className="w-64 h-full object-cover rounded-xl shrink-0"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-bold text-lg">Within the Well of Wanting</p>
                <p className="text-sm text-gray-500">Aug 11, 2026</p>
              </div>
              <div className="flex gap-3 self-end">
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white text-sm px-4 py-1.5 rounded-full"
                  style={{ backgroundColor: TERRACOTTA }}
                > read more →
                </a>
                <a
                  href={SUBSTACK_SUBSRIBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-4 py-1.5 rounded-full border"
                  style={{ borderColor: TERRACOTTA, color: TERRACOTTA }}
                > Subscribe
                </a>
              </div>
            </div>
          </div>
          </div>

        <div>
          <h3
            className="text-[#A74A38] font-bold text-xl border-b-2 mb-4 pb-2 inline-block"
            style={{ borderColor: TERRACOTTA }}
          > Term 3 Initiative: MRW
          </h3>
          <video className="w-full h-64 object-cover rounded-lg" autoPlay muted loop playsInline>
            <source src={introVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-start text-center px-4 pt-24 pb-24"
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
    
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <hr className="border-gray-400 mb-8" />
        <h2 className="font-bold tracking-wide text-lg mb-10" style={{ color: '#76352E' }}>
          MEET OUR SPONSORS
        </h2>        
        <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
          <img
            src={icfal}
            alt="Islamic Co-operative Finance Australia"
            className="h-28 object-contain hover:scale-105 transition-transform duration-300"
          />
          <img
            src={headstartLegal}
            alt="Headstart Legal"
            className="h-28 object-contain hover:scale-105 transition-transform duration-300"
          />
          <img
            src={taxFactor}
            alt="The Tax Factor"
            className="h-28 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        <a
          href="/sponsors"
          className="inline-block text-white text-sm font-bold px-5 py-2 rounded-full"
          style={{ backgroundColor: TERRACOTTA }}
        >LEARN MORE
        </a>
        <hr className="border-gray-400 mt-8" />
      </div>

      <div
        className="mx-10 mb-10 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 text-white max-w-6xl md:mx-auto"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h3 className="text-3xl font-bold">Contact Information</h3>
        <div className="space-y-4 text-base pr-8">
          <p className="flex items-center gap-3">
            <Icon icon="ph:phone" className="w-5 h-5" /> 0470 100 936
          </p>
          <p className="flex items-center gap-3">
            <Icon icon="ph:envelope-simple" className="w-5 h-5" />
            <a href="mailto:unswmsa@gmail.com" className="underline">unswmsa@gmail.com</a>
          </p>
          <p className="flex items-center gap-3">
            <Icon icon="ph:map-pin" className="w-5 h-5" /> AGSM Room 105
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;