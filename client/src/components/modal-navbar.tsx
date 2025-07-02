interface ModalNavbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  sections: Array<{ id: string; title: string }>;
}

const ModalNavbar = ({ activeSection, onSectionChange, sections }: ModalNavbarProps) => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-ar-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ModalNavbar;
