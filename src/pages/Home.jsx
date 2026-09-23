import { Icon } from '@iconify/react';
import { useState } from 'react';
import gradient from '../assets/shared/gradient.png';
import logo from '../assets/shared/logo.png';
import substackCover from '../assets/home/substack.png';
import introVideo from '../assets/home/intro-video.mp4';
import quranBg from '../assets/home/quranbg.png';
import ayah from '../assets/home/ayah.png';
import headstartLegal from '../assets/sponsors/headstartlegal.png';
import icfal from '../assets/sponsors/ifcal.png';
import taxFactor from '../assets/sponsors/taxfactor.png';
import { featureCards } from '../data/homeData';
import { TERRACOTTA, TypingTagline, OutlineButton, FeatureCard } from '../components/home/HomeComponents';
import Loading from '../components/Loading';

const SUBSTACK_URL = 'https://unswmsa.substack.com/';
const SUBSTACK_SUBSCRIBE_URL =
  'https://unswmsa.substack.com/subscribe?utm_source=menu&simple=true&next=https%3A%2F%2Funswmsa.substack.com%2F';

function Home() {
  const [showLoading, setShowLoading] = useState(true);

  return (
   <>
    {showLoading && <Loading onFinish={() => setShowLoading(false)} />}
    <section className="home-page">
      <div
        className="relative flex flex-col items-center justify-start text-center px-4 pt-24 pb-24"
        style={{
          backgroundColor: '#1a1a1a',
          backgroundImage: `url(${gradient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={logo}
          alt="UNSWMSA logo"
          className="w-72 mb-10 opacity-0 animate-[fade-up_0.8s_ease-out_0.1s_forwards]"
        />
        <h1 className="text-white text-3xl font-bold opacity-0 animate-[fade-up_0.8s_ease-out_0.4s_forwards]">
          UNSWMSA
        </h1>
        <div className="opacity-0 animate-[fade-up_0.8s_ease-out_0.6s_forwards]">
          {!showLoading && <TypingTagline />}
        </div>
       <div className="flex gap-3 mt-6 opacity-0 animate-[fade-up_0.8s_ease-out_0.9s_forwards]">
          <OutlineButton href="https://campus.hellorubric.com/?s=6361" external>
            Join Us Now
          </OutlineButton>
          <OutlineButton href="/about">About Us</OutlineButton>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 py-10">
        {featureCards.map((card) => (
          <FeatureCard key={card.title} card={card} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">
        <div>
          <h3
            className="text-[#A74A38] font-bold text-xl border-b-2 mb-4 pb-2 inline-block"
            style={{ borderColor: TERRACOTTA }}
          > Latest Publication
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 sm:h-64">
            <img
              src={substackCover}
              alt="Within the Well of Wanting"
              className="w-full sm:w-64 h-64 sm:h-full object-cover rounded-xl shrink-0"
            />
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-bold text-lg">Within the Well of Wanting</p>
                <p className="text-sm text-gray-500">Aug 11, 2026</p>
              </div>
              <div className="flex gap-3 mt-4 sm:mt-0 sm:self-end">
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white text-sm px-4 py-1.5 rounded-full whitespace-nowrap hover:opacity-85 transition-opacity"
                  style={{ backgroundColor: TERRACOTTA }}
                > read more →
                </a>
                <a
                  href={SUBSTACK_SUBSCRIBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm px-4 py-1.5 rounded-full border whitespace-nowrap border-[#A74A38] text-[#A74A38] hover:bg-[#D9D2C0] transition-colors"                > Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3
            className="text-[#A74A38] font-bold text-xl border-b-2 mb-4 pb-2 inline-block"
            style={{ borderColor: TERRACOTTA }}
          > Term 3 Initiative: MRW
          </h3>
          <video className="w-full h-64 object-cover rounded-lg" autoPlay muted loop playsInline>
            <source src={introVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-start text-center px-4 pt-24 pb-24"
        style={{
          backgroundImage: `url(${quranBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img src={ayah} alt="Quran ayah in Arabic" className="max-w-2xl w-full" />
        <p className="text-white italic text-center max-w-xl">
          "Indeed, they were youths who believed in their Lord, and We increased them in guidance"
        </p>
        <p className="text-white/70 text-sm text-center">Surah Al-Kahf, 18:13</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <hr className="border-gray-400 mb-8" />
        <h2 className="font-bold tracking-wide text-lg mb-10" style={{ color: '#76352E' }}>
          MEET OUR SPONSORS
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 mb-10">
          <img
            src={icfal}
            alt="Islamic Co-operative Finance Australia"
            className="h-28 object-contain hover:scale-105 transition-transform duration-300"
          />
          <img
            src={headstartLegal}
            alt="Headstart Legal"
            className="h-28 object-contain hover:scale-105 transition-transform duration-300"
          />
          <img
            src={taxFactor}
            alt="The Tax Factor"
            className="h-28 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        <a
          href="/sponsors"
          className="inline-block text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-85 transition-opacity"
          style={{ backgroundColor: TERRACOTTA }}
        > LEARN MORE
        </a>
        <hr className="border-gray-400 mt-8" />
      </div>

      <div
        className="mx-10 mb-10 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 text-white max-w-6xl md:mx-auto"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">Musallah Location</h3>
          <div className="space-y-4 text-base pr-8">
            <p className="flex items-center gap-3">
              <Icon icon="ph:map-pin" className="w-5 h-5" /> AGSM Room 105
            </p>
            <a href="/about#jummuah-timings" className="underline text-sm text-white/80">
              See Jumm'uah prayer times →
            </a>
          </div>
        </div>

        <div className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://use.mazemap.com/embed.html#v=1&zlevel=8&center=151.235670,-33.918234&zoom=18&campusid=111&sharepoitype=identifier&sharepoi=KENC~G27~L1~105&utm_medium=iframe"
            title="Musallah location map"
            className="w-full h-48 border-0"
            loading="lazy"
            allow="geolocation"
          />
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;