import { useMemo } from "react";
import { getHadithOfTheWeek } from "../../utils/hadith.js";

function HadithOfTheWeek() {
    const hadith = useMemo(() => getHadithOfTheWeek(), []);

    return (
        <figure className="text-left rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 shadow-lg opacity-0 animate-[fade-up_0.8s_ease-out_1.2s_forwards]">
            <figcaption className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'#E8997F'}}>
                Hadith of the Week
            </figcaption>
            <blockquote className="text-white italic leading-relaxed text-sm sm:text-base">
                &ldquo;{hadith.text}&rdquo;
            </blockquote>

            <p className="text-white/70 text-xs mt-3">{hadith.source}</p>
            <a href={hadith.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors">
                Read more here &rarr;
            </a>
        </figure>
    );
}

export default HadithOfTheWeek;