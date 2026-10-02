import { Icon } from '@iconify/react';

export const SponsorsCard = ({ sponsor }) => (
  <div
    className="rounded-2xl p-6 flex flex-col bg-terracotta hover:scale-[1.03] transition-transform duration-300
              shadow-[0_2px_80px_10px_rgba(144,46,39,0.3)]"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="bg-white/15 rounded-full p-2">
        <Icon icon={sponsor.icon} className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-white font-bold text-xl min-w-0 break-words leading-snug">{sponsor.title}</h3>
    </div>
    <p className="text-white text-sm mb-2 whitespace-pre-line pt-2 border-t border-white/20">
      {sponsor.description}
    </p>
    <div className="flex items-end mt-auto pt-4">
      <a 
        href={sponsor.link} 
        target="_blank" 
        className="group bg-[#EAE6DB] text-sm text-msa-black text-center 
                  rounded-[8px] px-4 py-1.5 shadow-lg
                  border-1-terracotta
                  hover:bg-terracotta hover:text-white hover:border-white hover:border-1 transition-colors 
                  w-fit inline-flex items-center gap-1"
      >
        LEARN MORE 
        <Icon icon="ph:caret-right-bold" className="w-4 h-4"/>
      </a>
    </div>
  </div>
);