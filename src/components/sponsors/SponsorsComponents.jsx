const TERRACOTTA = '#A74A38';
export const SponsorsCard = ({ sponsor }) => (
  <div
    className="rounded-2xl p-6 flex flex-col hover:scale-[1.03] transition-transform duration-300"
    style={{ backgroundColor: TERRACOTTA }}
  >
    <div className="flex items-center gap-3 mb-3">
      <h3 className="text-white font-bold text-xl">{sponsor.title}</h3>
    </div>
    <p className="text-white text-sm mb-2 whitespace-pre-line pt-2 border-t border-white/20">
    {sponsor.description}
    </p>
  </div>
);