import bookmark from '../../assets/resources/bookmark.png';
import { TERRACOTTA } from '../about/AboutComponents';

const BUTTON_COLOR = '#A43522';

export const ResourceCard = ({ resource }) => (
  <div
  className="relative w-full min-h-[150px] flex items-start hover:scale-[1.02] transition-transform duration-300"    style={{
      backgroundImage: `url(${bookmark})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* empty space so content starts after the rug */}
    <div className="w-[24%] shrink-0" />

    {/* text block, in the cream area */}
    <div className="flex-1 pl-[4%] pr-6 pt-8 pb-14 sm:pb-4">
      <div className="max-w-[20rem]">
        <h3 className="font-bold text-lg leading-tight">{resource.title}</h3>
        <p className="text-xs text-gray-900 whitespace-pre-line mt-1">
          {resource.description}
        </p>
      </div>
    </div>

    {/* button pinned to the bottom right corner */}
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group absolute bottom-4 right-5 text-white text-xs font-bold px-5 py-2 rounded-[13px] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-90"
      style={{ backgroundColor: BUTTON_COLOR }}
    >
      view resource{' '}
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </a>
  </div>
);