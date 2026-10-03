// refreshes the fallback copy of our Rubric events: `npm run update-events`
import { writeFileSync } from 'node:fs';
import { fetchMsaEvents } from '../src/lib/rubric.js';

const events = await fetchMsaEvents();
const outFile = new URL('../src/data/eventsSnapshot.json', import.meta.url);

writeFileSync(outFile, JSON.stringify({ updatedAt: new Date().toISOString(), events }, null, 2) + '\n');
console.log(`Saved ${events.length} events to src/data/eventsSnapshot.json`);
