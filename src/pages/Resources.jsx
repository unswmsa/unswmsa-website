import { resources, duas, dhikr } from '../data/resourcesData';
import { TERRACOTTA, RevealSection } from '../components/about/AboutComponents';
import { ResourceCard, DuaCarousel } from '../components/resources/ResourcesComponents';

function Resources() {
  return (
    <section className="home-page">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold mb-2">Resources</h1>
        <hr className="border-t-2" style={{ borderColor: TERRACOTTA }} />
      </div>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-[776px] mx-auto space-y-4 sm:space-y-6">
            {resources.map((r) => (
              <ResourceCard key={r.title} resource={r} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Duas &amp; Dhikr</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />

          <DuaCarousel items={duas} size="small" />
          {/* Not deploying yet: the big dhikr card
          <DuaCarousel items={dhikr} size="large" />
          */}
        </div>
      </RevealSection>
    </section>
  );
}

export default Resources;