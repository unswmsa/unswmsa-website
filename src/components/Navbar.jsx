import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../assets/shared/logo.png';

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#A74A38] transition-colors"
  >
    <Icon icon={icon} className="w-4 h-4" />
  </a>
);

const quickLinks = {
  Home: '/',
  About: '/about',
  Events: '/events',
  Sponsors: '/sponsors',
  Resources: '/resources',
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-msa-black text-white font-inter relative">
      <div className="relative flex items-center justify-between px-6 py-3">
        <Link to="/">
          <img src={logo} alt="UNSW MSA" className="h-14" />
        </Link>

        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {Object.entries(quickLinks).map(([label, to]) => (
            <Link key={to} to={to} className="font-bold hover:text-[#A74A38] transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/get-involved"
            className="bg-[#EAE6DB] text-sm text-msa-black text-center rounded-[8px] px-4 py-1.5 border-2 border-[#A74A38] hover:bg-[#A74A38] hover:text-white hover:border-[#EAE6DB] transition-colors"
          > Get Involved
          </Link>
          <div className="flex gap-3">
            <SocialLink href="https://www.facebook.com/UNSWMSA" icon="eva:facebook-outline" />
            <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon="eva:linkedin-outline" />
            <SocialLink href="https://www.instagram.com/unswmsa/" icon="ion:logo-instagram" />
            <SocialLink href="https://www.youtube.com/@theunswmsa" icon="basil:youtube-outline" />
            <SocialLink href="https://unswmsa.substack.com/" icon="fa7-regular:clipboard" />
          </div>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Icon icon={open ? 'mdi:close' : 'mdi:menu'} className="w-7 h-7" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {Object.entries(quickLinks).map(([label, to]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)} className="font-bold">
              {label}
            </Link>
          ))}
          <Link
            to="/get-involved"
            onClick={() => setOpen(false)}
            className="bg-[#EAE6DB] text-sm text-msa-black text-center rounded-[8px] px-4 py-1.5 border-2 border-[#A74A38] hover:bg-[#A74A38] hover:text-white hover:border-[#EAE6DB] transition-colors self-start"
          > Get Involved
          </Link>
          <div className="flex gap-3 pt-2">
            <SocialLink href="https://www.facebook.com/UNSWMSA" icon="eva:facebook-outline" />
            <SocialLink href="https://www.linkedin.com/company/unsw-muslim-students-association-unswmsa/?viewAsMember=true" icon="eva:linkedin-outline" />
            <SocialLink href="https://www.instagram.com/unswmsa/" icon="ion:logo-instagram" />
            <SocialLink href="https://www.youtube.com/@theunswmsa" icon="basil:youtube-outline" />
            <SocialLink href="https://unswmsa.substack.com/" icon="fa7-regular:clipboard" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;