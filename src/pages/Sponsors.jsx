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

      <RevealSection sectionName="tiers">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Types of Sponsorship Tiers</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />
        </div>

        <div
          className="mx-10 mb-10 rounded-4xl p-6 flex flex-col md:flex-row items-center justify-center gap-10 text-white max-w-6xl md:mx-auto bg-[#A74A38]"
        >
            <p className="text-xl font-semibold">VIEW OUR PROSPECTUS TO LEARN MORE ABOUT THE DETAILS</p>
            <a 
              href={prospectus}
              target="_blank" 
              className="group bg-[#9D2320] text-sm text-white text-center
                        rounded-4xl px-4 py-1.5 shadow-[0_4px_3px_0px_rgba(0,0,0,0.25)]
                        border-1-terracotta
                        hover:text-msa-black hover:scale-[1.03] hover:bg-[#EAE6DB] transition-colors 
                        w-fit"
            >
              view pdf &rarr;
            </a>         
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

      <RevealSection>
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <p className="italic font-bold text-2xl mb-4" style={{ color: TERRACOTTA }}>This partnership also represents an opportunity to increase barakah in your business.</p>
          <p className="italic text-gray-800">“Those who spend their wealth in charity day and night, secretly and openly—their reward is with their Lord, and there will be no fear for them, nor will they grieve. ” (Qur'an 2:274)</p>
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