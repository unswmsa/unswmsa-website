import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white hover:text-[#CD4631] transition-colors"
  >
    <Icon icon={icon} className="w-5 h-5" />
  </a>
);

const FooterButton = ({ buttonText, link }) => {
  return (
  <Link
    key={link}
    to={link}
    className="inline-block w-full bg-[#EAE6DB] text-[16px] text-msa-black text-center  rounded-[8px] px-1 py-1 border-2 border-[#A74A38] hover:bg-[#CD4631] hover:text-white transition-colors"
  >
  {buttonText}
  </Link> 
  );
};

const SocialsColumn = ({ buttonText, link }) => (
  <div className="flex flex-col items-center justify-center gap-4 w-fit">
    {/* Social media icons row */}
    <div className="flex gap-1">
      <SocialLink href="https://www.facebook.com/UNSWMSA" icon="eva:facebook-outline" />
      <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon="eva:linkedin-outline" />
      <SocialLink href="https://www.instagram.com/unswmsa/" icon="ion:logo-instagram" />
      <SocialLink href="https://www.youtube.com/@theunswmsa" icon="basil:youtube-outline"/>
      <SocialLink href="https://unswmsa.substack.com/" icon="fa7-regular:clipboard" />
    </div>
    <FooterButton buttonText={buttonText} url={link} />
  </div>
);

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Resources', path: '/resources' },
];

// Components for each page column
const SectionLink = ({ pageName, section }) => {
  // format section name to a valid section id:
  // 1. lowercase
  // 2. replace ampersand with 'and'
  // 3. replace whitespace with dashes
  const sectionSlug = section
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-');
  return (
    <Link
      key={`${quickLinks[pageName]}#${sectionSlug}`}
      to={`${quickLinks[pageName]}#${sectionSlug}`}
      className="text-sm hover:text-[#CD4631] transition-colors"
    >
      {section}
    </Link>
  );
};

const PageLinks = ({ pageName , sections }) => (
    <div className="flex items-center flex-col items-start gap-2">
      <Link
        key={quickLinks[pageName]}
        to={quickLinks[pageName]}
        className="text-sm font-bold hover:text-[#CD4631] transition-colors"
      >
      {pageName}
      </Link>        
      <div className="flex flex-col gap-2 mt-2">
        {sections.map((section) => (
          <SectionLink pageName={pageName} section={section} />
        ))}
      </div>
    </div>
);

const Footer = () => {

  return (
    <footer className="bg-msa-black text-white font-inter z-50">      
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-16">        
        {/* Column 1: Socials + Contact Us */}
        <SocialsColumn buttonText="Contact Us" link="/sponsors#contact-us" />

        {/* Column 2: Home page links */}
        <PageLinks pageName="Home" sections={["Overview", "Upcoming", "Prayer Times"]} />

        {/* Column 3: About page links */}
        <PageLinks pageName="About" sections={["About us", "Meet the Team", "Services"]} />

        {/* Column 4: Events links */}
        <PageLinks pageName="Events" sections={["Overview", "Upcoming", "Archive"]} />

        {/* Column 5: Sponsors links */}
        <PageLinks pageName="Events" sections={["Tiers", "Benefits", "Contact Us"]} />

        {/* Column 6: Resources links */}
        <PageLinks pageName="Resources" sections={["Guides", "Lecture Notes", "Duas & Reminders"]} />

        {/* Column 7: Socials + Get Involved */}
        <SocialsColumn buttonText="Get Involved" link="/get-involved" />
      </div>
    </footer>
  );
};

export default Footer;