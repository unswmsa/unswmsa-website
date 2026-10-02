import { Icon } from '@iconify/react';

import { sponsors } from '../data/sponsorsData';
import gradient from '../assets/shared/gradient.png';

import {
  RevealSection,
} from '../components/about/AboutComponents';

import {
  SponsorsCard
} from '../components/sponsors/SponsorsComponents';

function Sponsors() {
  return (
    <section className="sponsors-page">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold mb-2">Sponsors</h1>
        <hr className="border-t-2 border-terracotta"/>
      </div>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-bold text-center text-2xl">We're grateful to our generous sponsors who support our mission and help us serve the UNSW Muslim community.</p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
            {sponsors.map((sponsor) => (
              <SponsorsCard key={sponsor.title} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Why partner with UNSWMSA?</h2>
          <hr className="border-t-2 border-terracotta mb-8"/>
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
            <h4 className="text-1xl">We'd love to hear from you!</h4>
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