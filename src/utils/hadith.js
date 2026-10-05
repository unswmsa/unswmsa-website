import { HADITHS } from "../data/hadithData.js";

const START_DATE = "2026-10-05";
const TIMEZONE = "Australia/Sydney";
const MS_PER_DAY = 86_400_000;

function sydneyDayNumber(date) {
    const ymd = new Intl.DateTimeFormat("en-CA", {
        timeZone: TIMEZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(date);

    const [y,m,d] = ymd.split("-").map(Number);
    return Math.floor(Date.UTC(y, m-1, d) / MS_PER_DAY);
}

const START_DAY = (() => {
    const [y,m,d] = START_DATE.split("-").map(Number);
    return Math.floor(Date.UTC(y,m-1,d) / MS_PER_DAY);
})();

export function getHadithOfTheWeek(date = new Date()) {
  const weeksElapsed = Math.floor((sydneyDayNumber(date) - START_DAY) / 7);
  const index = ((weeksElapsed % HADITHS.length) + HADITHS.length) % HADITHS.length;
  return { ...HADITHS[index], weekNumber: index + 1 };
}