import box1 from '../assets/home/box1.png';
import box2 from '../assets/home/box2.png';
import box3 from '../assets/home/box3.png';

export const featureCards = [
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