import { Icon } from '@iconify/react';

import prospectus from '../assets/sponsors/sponsors_prospectus.pdf';

import { 
  sponsors,
  benefits
 } from '../data/sponsorsData';
import gradient from '../assets/shared/gradient.png';

import {
  TERRACOTTA,
  RevealSection,
} from '../components/about/AboutComponents';

import {
  SponsorsCard, 
  BenefitCard,
  SponsorsStats
} from '../components/sponsors/SponsorsComponents';

import quranBg from '../assets/home/quranbg.png';

function Sponsors() {
  return (
    <section className="sponsors-page">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold mb-2">Sponsors</h1>
        <hr className="border-t-2" style={{ borderColor: TERRACOTTA }} />
      </div>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-gray-800 text-center max-w-2xl mx-auto mb-8"> We're grateful to our generous sponsors who support our mission and help us serve the UNSW Muslim community.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor) => (
              <SponsorsCard key={sponsor.title} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection sectionName="benefits">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Why partner with UNSWMSA?</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <BenefitCard key={b.title} benefit={b} />
            ))}
          </div>
       </div>
      </RevealSection>

      <RevealSection>
        <div className="bg-msa-black text-white font-inter z-50">      
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 md:gap-y-10">
            <SponsorsStats stat="500" statInfo="membership sign-ups in month one" />
            <SponsorsStats stat="5k+" statInfo="followers on Instagram" />
            <SponsorsStats stat="10,000" statInfo="accounts reached via social media" />
            <SponsorsStats stat="700" statInfo="WhatsApp members" />
          </div>
        </div>
      </RevealSection>

<RevealSection sectionName="tiers">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Sponsorship Tiers</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />

          <div
            className="rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
            style={{ backgroundColor: TERRACOTTA }}
            >
            <p className="text-lg font-semibold text-center md:text-left">
              View our prospectus for the full details of each tier.
            </p>
            <a
              href={prospectus}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#A74A38] text-sm font-bold px-5 py-2 rounded-full whitespace-nowrap hover:opacity-85 transition-opacity"
            >
              View PDF →
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <div
          className="relative flex flex-col items-center text-center px-6 py-16 mb-16"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${quranBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-[#EAE6DB] max-w-3xl mb-6">
            This partnership also represents an opportunity to increase barakah in your business.
          </p>

          <p
            dir="rtl"
            lang="ar"
            className="text-white text-2xl md:text-3xl leading-[2.2] max-w-5xl mb-6"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُم بِٱلَّيْلِ وَٱلنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ
          </p>

          <p className="text-white/90 italic max-w-3xl mb-4">
            "Those who spend their wealth in charity day and night, secretly and openly—their reward is with their Lord, and there will be no fear for them, nor will they grieve."
          </p>

          <p className="text-white/60 text-sm">Surah Al-Baqarah, 2:274</p>
        </div>
      </RevealSection>

      <RevealSection>
        <div
          className="mx-10 mb-10 rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-8 text-white max-w-6xl md:mx-auto"
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4">Interested in partnering with us?</h3>
            <p>We'd love to hear from you!</p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-100 shrink-0 rounded-xl overflow-hidden shadow-md">
              <div className="inline-flex gap-5">
                <Icon icon={"carbon:phone-voice-filled"} className="w-5 h-5 text-white" />
                <a href="tel:+61422972324" className="hover:brightness-80">0422 972 324</a>
              </div>
              <div className="inline-flex gap-5">
                <Icon icon={"dashicons:email"} className="w-5 h-5 text-white" />
                <a
                  href="mailto:unswmsa@gmail.com"
                  className="underline hover:brightness-80"
                >
                  unswmsa@gmail.com
                </a>              
              </div>
              <p>UNSWMSA Sponsorships Lead: Fariha Dean</p>         
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

export default Sponsors;