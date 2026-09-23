import logo from '../assets/shared/logo.png';
import { shuraMembers, extShuraTeams, services } from '../data/aboutData';
import {
  TERRACOTTA,
  TeamCard,
  ExtShuraCard,
  Carousel,
  PrayerLocationCard,
  ServiceCard,
  RevealSection,
} from '../components/about/AboutComponents';

function About() {
  return (
    <section className="home-page">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold mb-2">About</h1>
        <hr className="border-t-2" style={{ borderColor: TERRACOTTA }} />
      </div>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative flex justify-center py-8">
            <div
              className="absolute top-0 left-8 w-8 h-8 border-t-2 border-l-2"
              style={{ borderColor: TERRACOTTA }}
            />
            <div
              className="absolute bottom-0 right-8 w-8 h-8 border-b-2 border-r-2"
              style={{ borderColor: TERRACOTTA }}
            />
            <img src={logo} alt="UNSWMSA logo" className="w-64" />
          </div>

          <div>
            <h2 className="italic font-bold text-2xl mb-4" style={{ color: TERRACOTTA }}>
              Who are we?
            </h2>
            <p className="mb-4 text-gray-800">
              UNSWMSA is the premiere Muslim student society on campus, where we cater for
              Muslims on campus by offering them amenities, a righteous environment, and many
              social, educational, and spiritual events throughout the year.
            </p>
            <p className="text-gray-800">
              As part of UNSWMSA, enrich your campus life with new like-minded friends, vibrant
              social and sports events, excellent educational initiatives and spiritual circles,
              and even enjoy student offers with our partners!
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Jumm'uah Timings</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />

          <PrayerLocationCard
            title="Upper Campus"
            times="12:15 pm, 2:00pm"
            location="AGSM 105"
            details={['Brothers only', 'Wudu areas available']}
            mapEmbedUrl="https://use.mazemap.com/embed.html#v=1&zlevel=8&center=151.235670,-33.918234&zoom=18&campusid=111&sharepoitype=identifier&sharepoi=KENC~G27~L1~105&utm_medium=iframe"
          />

          <PrayerLocationCard
            title="Lower Campus"
            times="1:15pm"
            location="Fitness & Aquatic Centre Gym"
            details={['1:15pm - 1:50pm', 'Wudu facilities at level 3, Squarehouse UNSW.']}
            mapEmbedUrl="https://use.mazemap.com/embed.html#v=1&zlevel=8&center=151.226653,-33.915282&zoom=18&campusid=111&sharepoitype=poi&sharepoi=1001204817&utm_medium=iframe"
          />
        </div>
      </RevealSection>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Services</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-center max-w-2xl mx-auto">
            <a
              href="/events"
              className="flex-1 rounded-xl p-4 border-2 bg-white/60 text-[#A74A38] border-[#A74A38] hover:bg-[#A74A38] hover:text-white transition-colors"
            >
              <p className="font-bold">See Upcoming Events →</p>
              <p className="text-sm">Check the Events page for what's on</p>
            </a>
            <a
              href="/resources"
              className="flex-1 rounded-xl p-4 border-2 bg-white/60 text-[#A74A38] border-[#A74A38] hover:bg-[#A74A38] hover:text-white transition-colors"
            >
              <p className="font-bold">Browse Resources →</p>
              <p className="text-sm">Event recaps and guides for first years</p>
            </a>
          </div>
        </div>
      </RevealSection>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Meet the Shura</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />
          <Carousel
            items={shuraMembers}
            cardsPerView={2}
            keyFn={(m, i) => i}
            renderItem={(m) => <TeamCard member={m} />}
          />
        </div>
      </RevealSection>

      <RevealSection>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-2">Meet the Ext Shura</h2>
          <hr className="border-t-2 mb-8" style={{ borderColor: TERRACOTTA }} />
          <Carousel
            items={extShuraTeams}
            cardsPerView={3}
            keyFn={(t) => t.team}
            renderItem={(t) => <ExtShuraCard team={t} />}
          />
        </div>
      </RevealSection>
    </section>
  );
}

export default About;