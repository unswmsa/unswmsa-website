import { useState } from 'react';
import { Icon } from '@iconify/react';
import logo from '../assets/shared/logo.png';

import president from '../assets/about/president.png';
import vicePresident from '../assets/about/vicepresident.png';
import secretary from '../assets/about/secretary.png';
import arcDelegate from '../assets/about/arcdelegate.png';
import treasurer from '../assets/about/treasurer.png';
import mnc1 from '../assets/about/mnc1.png';
import mnc2 from '../assets/about/mnc2.png';
import mnc3 from '../assets/about/mnc3.png';
import events1 from '../assets/about/events1.png';
import events2 from '../assets/about/events2.png';
import dawah1 from '../assets/about/dawah1.png';
import dawah2 from '../assets/about/dawah2.png';
import sponsorships1 from '../assets/about/sponsorships1.png';
import sponsorships2 from '../assets/about/sponsorships2.png';
import advocacy1 from '../assets/about/advocacy1.png';
import advocacy2 from '../assets/about/advocacy2.png';

const TERRACOTTA = '#A74A38';
const MAROON = '#76352E';
const CARD_WIDTH = 260;
const CARD_GAP = 24;

const shuraMembers = [
  { name: 'Zakariya Yoga', role: 'President', icon: 'ph:star-fill', photo: president, favourite: 'Surah Al Fajr' },
  { name: 'Ayishah Ahmad', role: 'Vice President', icon: 'ph:star-half-fill', photo: vicePresident, favourite: 'Say [Oh Prophet, that Allah says], “Oh my servants who have transgressed against themselves [by sinning], do not lose hope in Allah’s mercy. Indeed, Allah forgives all sins. He is indeed the All-Forgiving, the Most Merciful. (Surah Zumar:53)' },
  { name: 'Khansa Pathan', role: 'MNC Lead', icon: 'ph:megaphone-fill', photo: mnc1, favourite: 'Surah Al-A’raf' },
  { name: 'Mahir Bhuiyan', role: 'MNC Lead', icon: 'ph:megaphone-fill', photo: mnc2, favourite: 'Surah Al-Kahf' },
  { name: 'Ryan Khan', role: 'MNC Lead', icon: 'ph:megaphone-fill', photo: mnc3, favourite: '"No thought, moment or step of yours escapes His regard, nor any of your moments of stillness or movement" - Imam Al-Ghazali' },
  { name: 'Maheen Noman', role: 'Events Lead', icon: 'ph:calendar-star-fill', photo: events1, favourite: 'Surah Baqarah Verse 152: “So remember me, and I will remember you” * Surah Baqarah Verse 286: “Allah does not burden a soul beyond that it can bear” * Surah Ash-Sharh Verse 5: “Verily, with hardship comes ease”' },
  { name: 'Saarang Ali', role: 'Events Lead', icon: 'ph:calendar-star-fill', photo: events2, favourite: 'Surah An-Najm' },
  { name: 'Aisha Aiden', role: 'Dawah Lead', icon: 'ph:mosque-fill', photo: dawah2, favourite: 'Surah Yusuf' },
  { name: 'Rayan Zubair', role: 'Dawah Lead', icon: 'ph:mosque-fill', photo: dawah1, favourite: '“And whoever is mindful of Allah, He will make a way out for them, and provide for them from sources they could never imagine. And whoever puts their trust in Allah, then He ˹alone˺ is sufficient for them. Certainly Allah achieves His Will. Allah has already set a destiny for everything.” - Surah At-Talaq Verses 2-3' },
  { name: 'Fariha Dean', role: 'Sponsorships Lead', icon: 'ph:handshake-fill', photo: sponsorships1, favourite: '“And strive for Allah with the striving due to Him. He has chosen you and has not placed upon you in the religion any difficulty…” - Surah Al-Hajj v78' },
  { name: 'Khaled Ahmed', role: 'Sponsorships Lead', icon: 'ph:handshake-fill', photo: sponsorships2, favourite: 'And [O Allah] do not disgrace me on the Day they are [all] resurrected – the Day when neither wealth nor children will be of any benefit, [except] for those who come before Allah with a sound heart. - Ash-Shu`ara 87-89' },
  { name: 'Kawther Inuwa', role: 'Advocacy Lead', icon: 'ph:megaphone-simple-fill', photo: advocacy1, favourite: 'Verily, the one who recites the Quran beautifully, smoothly, and precisely, he will be in the company of the noble and obedient angels. And as for the one who recites with difficulty, stammering or stumbling through its verses, then he will have twice that reward. - Prophet Muhammad ﷺ (Bukhari & Muslim)' },
  { name: 'Moiz Khan', role: 'Advocacy Lead', icon: 'ph:megaphone-simple-fill', photo: advocacy2, favourite: 'Al-Mu’minun' },
  { name: 'Zaynab Alam', role: 'Secretary', icon: 'ph:notebook-fill', photo: secretary, favourite: 'Surah Yusuf' },
  { name: 'Ghassan Adra', role: 'ARC Delegate', icon: 'ph:handshake-fill', photo: arcDelegate, favourite: 'Surah Al Waqiah' },
  { name: 'Rayyan Muneer', role: 'Treasurer', icon: 'ph:coins-fill', photo: treasurer, favourite: 'None of you truly believes until he loves for his brother that which he loves for himself. [Al-Bukhari] [Muslim]' },
];

const extShuraTeams = [
  {
    team: 'MNC',
    icon: 'ph:megaphone-fill',
    members: ['Hajara', 'Mariama', 'Noor', 'Aimen', 'Amina', 'Zobiya', 'Amira', 'Rosanna', 'Brix'],
  },
  {
    team: 'Events',
    icon: 'ph:calendar-star-fill',
    members: ['Tasneem', 'Nousha', 'Shazana', 'Nisa', 'Salih', 'Khalid', 'Tahir'],
  },
  {
    team: 'Dawah',
    icon: 'ph:mosque-fill',
    members: ['Dua', 'Sara', 'Haneya', 'Rustom', 'Suhail'],
  },
  {
    team: 'Sponsorships',
    icon: 'ph:handshake-fill',
    members: ['Zahra', 'Fariza', 'Bara'],
  },
  {
    team: 'Advocacy',
    icon: 'ph:megaphone-simple-fill',
    members: ['Aamina', 'Nadia', 'Mahmoud', 'Anhaar', 'Ahmed', 'Saavan'],
  },
  {
    team: 'Education',
    icon: 'ph:book-open-text-fill',
    members: ['Hiba (lead)'],
  },
  {
    team: 'Website',
    icon: 'ph:code-fill',
    members: ['Noor Babar (Lead)', 'Mahir Bhuiyan (Lead)', 'Ihsan Ahmad', 'Yumna Zaheed', 'Hajara Musthafa'],
  },
  {
    team: 'Musallah',
    icon: 'ph:mosque-fill',
    members: ['Suha Qaisar (Sisters)', 'Sidratul Islam (Brothers)'],
  },
];

const TeamCard = ({ member }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-[260px] h-96 cursor-pointer shrink-0 group"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-end"
          style={{ backfaceVisibility: 'hidden', backgroundColor: '#6b6b6b' }}
        >
          <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2 z-10">
            <Icon icon="ph:arrows-clockwise-bold" className="w-4 h-4 text-white" />
          </div>

          <div className="flex-1 flex items-center justify-center overflow-hidden">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
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

const ExtShuraCard = ({ team }) => (
  <div className="rounded-2xl p-6 w-[260px] shrink-0" style={{ backgroundColor: TERRACOTTA }}>
    <div className="flex items-center gap-3 mb-4">
      <Icon icon={team.icon} className="w-6 h-6 text-white" />
      <h3 className="font-bold text-white text-lg">{team.team}</h3>
    </div>
    <p className="text-white/70 text-xs mb-2">{team.members.length} members</p>
    <ul className="text-white text-sm space-y-1 mb-3">
      {team.members.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>

    {team.subteams?.map((sub) => (
      <div key={sub.team} className="mt-4 pt-4 border-t border-white/30">
        <p className="font-semibold text-white text-sm mb-1">{sub.team}</p>
        <ul className="text-white text-sm space-y-1">
          {sub.members.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const Carousel = ({ items, cardsPerView, renderItem, keyFn }) => {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - cardsPerView);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="relative flex items-center justify-center gap-4 py-8">
      <button onClick={goPrev} disabled={index === 0} className="disabled:opacity-30 shrink-0">
        <Icon icon="ph:caret-left-bold" className="w-8 h-8" style={{ color: TERRACOTTA }} />
      </button>

      <div
        className="overflow-hidden"
        style={{ width: `${cardsPerView * CARD_WIDTH + (cardsPerView - 1) * CARD_GAP}px` }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`,
          }}
        >
          {items.map((item, i) => (
            <div key={keyFn(item, i)}>{renderItem(item)}</div>
          ))}
        </div>
      </div>

      <button onClick={goNext} disabled={index === maxIndex} className="disabled:opacity-30 shrink-0">
        <Icon icon="ph:caret-right-bold" className="w-8 h-8" style={{ color: TERRACOTTA }} />
      </button>

      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: i === index ? MAROON : '#c9a89a' }}
          />
        ))}
      </div>
    </div>
  );
};

function About() {
  return (
    <section className="home-page">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold mb-2">About</h1>
        <hr className="border-t-2" style={{ borderColor: TERRACOTTA }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative flex justify-center py-8">
          <div
            className="absolute top-0 left-8 w-8 h-8 border-t-2 border-l-2"
            style={{ borderColor: TERRACOTTA }}
          />
          <div
            className="absolute bottom-0 right-8 w-8 h-8 border-b-2 border-r-2"
            style={{ borderColor: TERRACOTTA }}
          />
          <img src={logo} alt="UNSWMSA logo" className="w-64" />
        </div>

        <div>
          <h2 className="italic font-bold text-2xl mb-4" style={{ color: TERRACOTTA }}>
            Who are we?
          </h2>
          <p className="mb-4 text-gray-800">
            UNSWMSA is the premiere Muslim student society on campus, where we cater for
            Muslims on campus by offering them amenities, a righteous environment, and many
            social, educational, and spiritual events throughout the year.
          </p>
          <p className="text-gray-800">
            As part of UNSWMSA, enrich your campus life with new like-minded friends, vibrant
            social and sports events, excellent educational initiatives and spiritual circles,
            and even enjoy student offers with our partners!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">Meet the Shura</h2>
        <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />
        <Carousel
          items={shuraMembers}
          cardsPerView={2}
          keyFn={(m, i) => i}
          renderItem={(m) => <TeamCard member={m} />}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">Meet the Ext Shura</h2>
        <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />
        <Carousel
          items={extShuraTeams}
          cardsPerView={3}
          keyFn={(t) => t.team}
          renderItem={(t) => <ExtShuraCard team={t} />}
        />
      </div>
    </section>
  );
}

export default About;