import { useState } from 'react';
import { Icon } from '@iconify/react';

const TERRACOTTA = '#A74A38';

const items = [
  {
    question: 'I want to join your chats',
    answer: 'Join our WhatsApp to stay updated and connected with fellow members.',
    linkText: 'Join WhatsApp',
    href: null, //i dont have access to link yet so will add once ready
  },
  {
    question: 'I want to volunteer',
    answer:
      "First, join our UNSWMSA community chat. From there, you'll be able to join our dedicated volunteers chat where all volunteering opportunities are posted.",
    linkText: 'Join community chat',
  },
  {
    question: 'I want to join subcommittees',
    answer:
      'Get involved in specialised teams focusing on events, media, dawah, sponsorships or activism. Keep an eye on our insta for upcoming opportunities, and apply when they open!',
    linkText: 'Follow us on Instagram',
    href: 'https://www.instagram.com/unswmsa/',
  },
  {
    question: 'I want to become a sponsor',
    answer: 'Check out our sponsors page for more information or reach out to us directly in the meantime.',
    linkText: 'Contact us',
    href: 'mailto:unswmsa@gmail.com',
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="border-b border-gray-300">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left"
      aria-expanded={isOpen}
    >
      <span className="font-bold text-lg" style={{ color: TERRACOTTA }}>
        {item.question}
      </span>
      <Icon
        icon="ph:caret-down-bold"
        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        style={{ color: TERRACOTTA }}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}
    >
      <p className="text-gray-800 mb-3">{item.answer}</p>
      {item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white text-sm font-bold px-4 py-2 rounded-full"
          style={{ backgroundColor: TERRACOTTA }}
        >
          {item.linkText} →
        </a>
      )}
    </div>
  </div>
);

function GetInvolved() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-page">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <h1 className="text-3xl font-bold mb-2">Keen to get involved?</h1>
        <p className="text-gray-700 mb-10">
          We at UNSWMSA are beyond elated to meet you!
        </p>

        {items.map((item, i) => (
          <AccordionItem
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

export default GetInvolved;