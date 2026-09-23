import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white hover:text-[#A74A38] transition-colors"
  >
    <Icon icon={icon} className="w-5 h-5" />
  </a>
);

const FooterButton = ({ buttonText, link }) => {
  return (
    <Link
      key={link}
      to={link}
      className="inline-block bg-[#EAE6DB] text-sm text-msa-black text-center rounded-[8px] px-4 py-1.5 border-2 border-[#A74A38] hover:bg-[#A74A38] hover:text-white hover:border-[#EAE6DB] transition-colors"
    >
      {buttonText}
    </Link>
  );
};

const SocialsColumn = ({ buttonText, link }) => (
  <div className="flex items-start">
    <FooterButton buttonText={buttonText} link={link} />
  </div>
);

const quickLinks = {
  Home: '/',
  About: '/about',
  Events: '/events',
  Sponsors: '/sponsors',
  Resources: '/resources',
};

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
      to={`${quickLinks[pageName]}#${sectionSlug}`}
      className="text-sm hover:text-[#A74A38] transition-colors"
    >
      {section}
    </Link>
  );
};

const PageLinks = ({ pageName, sections }) => (
  <div className="flex items-center flex-col items-start gap-2">
    <Link
      to={quickLinks[pageName]}
      className="text-sm font-bold hover:text-[#A74A38] transition-colors"
    >
      {pageName}
    </Link>
    <div className="flex flex-col gap-2 mt-2">
      {sections.map((section) => (
        <SectionLink
          key={`${quickLinks[pageName]}#${section}`}
          pageName={pageName}
          section={section}
        />
      ))}
    </div>
  </div>
);

const Footer = () => {

  return (
    <footer className="bg-msa-black text-white font-inter z-50">      
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 md:gap-y-10">
        {/* Column 2: Home page links */}
        <PageLinks pageName="Home" sections={["Overview", "Upcoming", "Prayer Times"]} />
        {/* Column 3: About page links */}
        <PageLinks pageName="About" sections={["About us", "Meet the Team", "Services"]} />

        {/* Column 4: Events links */}
        <PageLinks pageName="Events" sections={["Overview", "Upcoming", "Archive"]} />

        {/* Column 5: Sponsors links */}
        <PageLinks pageName="Sponsors" sections={["Tiers", "Benefits", "Contact Us"]} />

        {/* Column 6: Resources links */}
        <PageLinks pageName="Resources" sections={["Guides", "Lecture Notes", "Duas & Reminders"]} />

        {/* Column 7: Socials + Get Involved */}
        <SocialsColumn buttonText="Get Involved" link="/get-involved" />
      </div>
      
      <div className="border-t border-white/10 py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} UNSW MSA</p>
        <div className="flex gap-3">
          <SocialLink href="https://www.facebook.com/UNSWMSA" icon="eva:facebook-outline" />
          <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon="eva:linkedin-outline" />
          <SocialLink href="https://www.instagram.com/unswmsa/" icon="ion:logo-instagram" />
          <SocialLink href="https://www.youtube.com/@theunswmsa" icon="basil:youtube-outline" />
          <SocialLink href="https://unswmsa.substack.com/" icon="fa7-regular:clipboard" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;