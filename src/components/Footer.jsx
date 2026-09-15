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

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Resources', path: '/resources' },
    { name: 'Get Involved', path: '/get-involved' },
];

const PageLink = ({ pageName }) => (
    <Link
      key={quickLinks[pageName]}
      to={quickLinks[pageName]}
      className="text-sm font-bold hover:text-[#CD4631] transition-colors"
    >
    {pageName}
    </Link>
);

const SectionLink = ({ pageName, section }) => {
  const sectionSlug = section.replace(/\s+/g, '-');

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

const FooterButton = ({ buttonText, url }) => {
  return (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block w-full bg-[#EAE6DB] text-[16px] text-msa-black text-center  rounded-[8px] px-1 py-1 border-2 border-[#A74A38] hover:bg-gray-50 transition-colors"
  >
    {buttonText}
  </a>
  );
};

const Footer = () => {

  return (
    <footer className="bg-msa-black text-white font-inter z-50">      
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-16">        
        {/* Column 1: Socials + Contact Us */}
        <div className="flex flex-col items-center justify-center gap-4 w-fit">
          {/* Social media icons row */}
          <div className="flex gap-1">
            <SocialLink href="https://www.facebook.com/UNSWMSA" icon="eva:facebook-outline" />
            <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon="eva:linkedin-outline" />
            <SocialLink href="https://www.instagram.com/unswmsa/" icon="ion:logo-instagram" />
            <SocialLink href="https://www.youtube.com/@theunswmsa" icon="basil:youtube-outline"/>
            <SocialLink href="https://unswmsa.substack.com/" icon="fa7-regular:clipboard" />
          </div>
          <FooterButton buttonText="Contact Us" url="example.com" />
        </div>

        {/* Column 2: Home page links */}
        <div className="flex items-center flex-col items-start gap-2">
            <PageLink pageName="Home" />
            <div className="flex flex-col gap-2 mt-2">
              <SectionLink pageName="Home" section="Overview" />
              <SectionLink pageName="Home" section="Upcoming" />
              <SectionLink pageName="Home" section="Prayer Times" />
            </div>
        </div>

        {/* Column 3: About page links */}
        <div className="flex items-center flex-col items-start gap-2">
            <PageLink pageName="About" />
            <div className="flex flex-col gap-2 mt-2">
              <SectionLink pageName="About" section="About Us" />
              <SectionLink pageName="About" section="Meet the Team" />
              <SectionLink pageName="About" section="Services" />
            </div>
        </div>

        {/* Column 4: Events links */}
        <div className="flex items-center flex-col items-start gap-2">
            <PageLink pageName="Events" />
            <div className="flex flex-col gap-2 mt-2">
              <SectionLink pageName="Events" section="Overview" />
              <SectionLink pageName="Events" section="Upcoming" />
              <SectionLink pageName="Events" section="Archive" />
            </div>
        </div>

        {/* Column 5: Sponsors links */}
        <div className="flex items-center flex-col items-start gap-2">
            <PageLink pageName="Sponsors" />
            <div className="flex flex-col gap-2 mt-2">
              <SectionLink pageName="Sponsors" section="Tiers" />
              <SectionLink pageName="Sponsors" section="Benefits" />
              <SectionLink pageName="Sponsors" section="Contact Us" />
            </div>
        </div>

        {/* Column 6: Resources links */}
        <div className="flex items-center flex-col items-start gap-2">
            <PageLink pageName="Resources" />
            <div className="flex flex-col gap-2 mt-2">
              <SectionLink pageName="Resources" section="Guides" />
              <SectionLink pageName="Resources" section="Lecture Notes" />
              <SectionLink pageName="Resources" section="Duas & Reminders" />
            </div>
        </div>

        {/* Column 7: Socials + Get Involved */}
        <div className="flex flex-col items-center justify-center gap-4 w-fit">
          {/* Social media icons row */}
          <div className="flex gap-1">
            <SocialLink href="https://www.facebook.com/UNSWMSA" icon="eva:facebook-outline" />
            <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon="eva:linkedin-outline" />
            <SocialLink href="https://www.instagram.com/unswmsa/" icon="ion:logo-instagram" />
            <SocialLink href="https://www.youtube.com/@theunswmsa" icon="basil:youtube-outline"/>
            <SocialLink href="https://unswmsa.substack.com/" icon="fa7-regular:clipboard" />
          </div>
          <FooterButton buttonText="Get Involved" url="example.com" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;