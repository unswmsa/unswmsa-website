import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import recapVideo from '../assets/shared/intro-video.mp4';
import gradient from '../assets/shared/gradient.png';
import snapshot from '../data/eventsSnapshot.json';
import { fetchMsaEvents } from '../lib/rubric';
import { getUpcomingEvents, groupPastEvents, getCalendarEvents, filterByAudience } from '../lib/events';
import { RevealSection } from '../components/about/AboutComponents';
import EventModal from '../components/events/EventModal';
import EventCalendar from '../components/events/EventCalendar';
import FeaturedEvents from '../components/events/FeaturedEvents';
import {
  MAROON,
  EventsHero,
  AudienceFilter,
  SectionHeading,
  ViewToggle,
  EventCarousel,
  YearTabs,
  TermLabel,
} from '../components/events/EventsComponents';

function Events() {
  // show the saved copy straight away, then swap in live events from Rubric
  const [events, setEvents] = useState(snapshot.events);
  const [audience, setAudience] = useState('everyone');
  const [selectedYear, setSelectedYear] = useState(null);
  const [openEvent, setOpenEvent] = useState(null); // { event, upcoming }
  const [view, setView] = useState('cards'); // upcoming section: 'cards' or 'calendar'
  const { hash } = useLocation();

  useEffect(() => {
    let cancelled = false;
    fetchMsaEvents()
      .then((live) => {
        if (!cancelled && live.length) setEvents(live);
      })
      .catch((err) => console.warn('Using saved events, Rubric fetch failed:', err));
    return () => {
      cancelled = true;
    };
  }, []);

  // footer links point to /events#upcoming etc, so scroll to the section on load
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  const filteredEvents = useMemo(() => filterByAudience(events, audience), [events, audience]);
  const upcomingEvents = useMemo(() => getUpcomingEvents(filteredEvents), [filteredEvents]);
  const pastEvents = useMemo(() => groupPastEvents(filteredEvents), [filteredEvents]);
  const calendarEvents = useMemo(() => getCalendarEvents(filteredEvents), [filteredEvents]);
  const yearData = pastEvents.find((y) => y.year === selectedYear) ?? pastEvents[0];

  // banner shows the next event regardless of the filter
  const nextEvent = useMemo(() => getUpcomingEvents(events)[0], [events]);

  const openUpcoming = useCallback((event) => setOpenEvent({ event, upcoming: true }), []);
  const openPast = useCallback((event) => setOpenEvent({ event, upcoming: false }), []);
  const closeEvent = useCallback(() => setOpenEvent(null), []);
  const openFromCalendar = useCallback((event) => setOpenEvent({ event, upcoming: event.upcoming }), []);

  return (
    <section className="home-page">
      <EventsHero
        video={recapVideo}
        background={gradient}
        nextEvent={nextEvent}
        onOpenNext={() => openUpcoming(nextEvent)}
      />
      {/* floats over the bottom edge of the banner */}
      <div className="relative z-10 -mt-5 flex justify-center px-4">
        <AudienceFilter selected={audience} onSelect={setAudience} />
      </div>

      <RevealSection>
        <div id="upcoming" className="max-w-[68rem] mx-auto px-4 sm:px-6 pt-12 md:pt-16 scroll-mt-4">
          <SectionHeading action={<ViewToggle view={view} onChange={setView} />}>
            {view === 'calendar' ? 'Events Calendar' : 'Upcoming Events'}
          </SectionHeading>
          {view === 'calendar' ? (
            <EventCalendar events={calendarEvents} onOpen={openFromCalendar} />
          ) : upcomingEvents.length > 2 ? (
            <EventCarousel key={audience} events={upcomingEvents} showDots upcoming onOpen={openUpcoming} />
          ) : upcomingEvents.length > 0 ? (
            // only 1-2 coming up: show them as wide featured cards so the section isn't mostly empty
            <FeaturedEvents events={upcomingEvents} onOpen={openUpcoming} />
          ) : (
            <p className="text-center py-10" style={{ color: MAROON }}>
              No upcoming {audience === 'everyone' ? '' : `${audience}' `}events right now. Follow{' '}
              <a href="https://www.instagram.com/unswmsa/" target="_blank" rel="noopener noreferrer" className="font-bold underline">
                @unswmsa
              </a>{' '}
              to hear about the next one!
            </p>
          )}
        </div>
      </RevealSection>

      {yearData && (
        <RevealSection>
          <div id="archive" className="max-w-[68rem] mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-16 scroll-mt-4">
            <SectionHeading>Past Events</SectionHeading>
            <YearTabs
              years={pastEvents.map((y) => y.year)}
              selected={yearData.year}
              onSelect={setSelectedYear}
            />

            <div className="mt-10 flex flex-col gap-12">
              {yearData.terms.map(({ term, events: termEvents }) => (
                <div key={`${audience}-${yearData.year}-${term}`} className="flex flex-col gap-4">
                  <div className="md:pl-10">
                    <TermLabel term={term} />
                  </div>
                  <EventCarousel events={termEvents} onOpen={openPast} />
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      )}

      {openEvent && <EventModal event={openEvent.event} upcoming={openEvent.upcoming} onClose={closeEvent} />}
    </section>
  );
}

export default Events;
