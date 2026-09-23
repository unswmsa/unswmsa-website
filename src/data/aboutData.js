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

export const shuraMembers = [
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

export const extShuraTeams = [
  { team: 'MNC', icon: 'ph:megaphone-fill', members: ['Hajara', 'Mariama', 'Noor', 'Aimen', 'Amina', 'Zobiya', 'Amira', 'Rosanna', 'Brix'] },
  { team: 'Events', icon: 'ph:calendar-star-fill', members: ['Tasneem', 'Nousha', 'Shazana', 'Nisa', 'Salih', 'Khalid', 'Tahir'] },
  { team: 'Dawah', icon: 'ph:mosque-fill', members: ['Dua', 'Sara', 'Haneya', 'Rustom', 'Suhail'] },
  { team: 'Sponsorships', icon: 'ph:handshake-fill', members: ['Zahra', 'Fariza', 'Bara'] },
  { team: 'Advocacy', icon: 'ph:megaphone-simple-fill', members: ['Aamina', 'Nadia', 'Mahmoud', 'Anhaar', 'Ahmed', 'Saavan'] },
  { team: 'Website', icon: 'ph:code-fill', members: ['Noor Babar (Lead)', 'Mahir Bhuiyan (Lead)', 'Ihsan Ahmad', 'Yumna Zaheed', 'Hajara Musthafa'] },
  { team: 'Education', icon: 'ph:book-open-text-fill', members: ['Hiba (lead)'] },
  { team: 'Musallah', icon: 'ph:mosque-fill', members: ['Suha Qaisar (Sisters)', 'Sidratul Islam (Brothers)'] },
];

export const services = [
  {
    title: 'Halaqa',
    icon: 'ph:mosque-fill',
    description: 'Weekly religious discussions and circles for both brothers and sisters.',
    schedule: 'Brothers: Wednesday 3pm - 4pm @ Room\nSisters: Tuesday 12pm - 2pm @ Room',
  },
  {
    title: 'Education',
    icon: 'ph:book-open-text-fill',
    description: 'Mentoring program, Fiqh classes, and Roots classes to grow your knowledge.',
    schedule: '',
  },
  {
    title: 'Socials',
    icon: 'ph:users-three-fill',
    description: 'Engaging events to connect with friends and have fun!',
    schedule: 'Brothers: Weekly sports\nSisters: Biweekly sports',
  },
  {
    title: 'Dawah',
    icon: 'ph:megaphone-fill',
    description: 'Spreading the message at Library Lawn every Wednesday.',
    schedule: '',
  },
];