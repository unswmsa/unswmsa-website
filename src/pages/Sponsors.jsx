const TERRACOTTA = '#A74A38';
import { sponsors } from '../data/sponsorsData';
import {
  RevealSection,
} from '../components/about/AboutComponents';

import {
  SponsorsCard
} from '../components/sponsors/SponsorsComponents';

function Sponsors() {
  return (
    <section className="home-page">
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
    </section>
  );
}

export default Sponsors;