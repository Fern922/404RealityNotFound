import { Chapter } from '@/data/capstone-data';

interface ChapterDropdownProps {
  chapter: Chapter;
  isOpen: boolean;
  onToggle: () => void;
}

const ChapterDropdown = ({ chapter, isOpen, onToggle }: ChapterDropdownProps) => {
  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
      >
        <span className="font-semibold text-gray-800">{chapter.title}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-ar-blue-500 transform transition-transform duration-200`}></i>
      </button>
      <div className={`chapter-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="px-6 py-4 bg-white">
          {chapter.sections.map((section, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <h4 className="font-medium text-gray-800 mb-2">{section.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterDropdown;
