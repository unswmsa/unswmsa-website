import { resources } from '../data/resourcesData';
import { ResourceCard } from '../components/resources/ResourcesComponents';

const TERRACOTTA = '#A74A38';

function Resources() {
  return (
    <section className="home-page">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-12">
        <h1 className="text-3xl font-bold mb-2">Resources</h1>
        <hr className="border-t-2 mb-10" style={{ borderColor: TERRACOTTA }} />

        <div className="space-y-6">
          {resources.map((r) => (
            <ResourceCard key={r.title} resource={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;