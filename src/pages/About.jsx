import logo from '../assets/shared/logo.png';

const TERRACOTTA = '#A74A38';

function About() {
  return (
    <section className="home-page">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold mb-2">About</h1>
        <hr className="border-t-2" style={{ borderColor: TERRACOTTA }} />
      </div>

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
    </section>
  );
}

export default About;