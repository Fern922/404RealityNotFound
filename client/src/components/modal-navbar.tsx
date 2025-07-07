import { useEffect, useState } from "react";

interface ModalNavbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  sections: Array<{ id: string; title: string }>;
}

const ModalNavbar = ({ activeSection, onSectionChange, sections }: ModalNavbarProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const enableDark = !isDark;
    document.documentElement.classList.toggle("dark", enableDark);
    localStorage.setItem("theme", enableDark ? "dark" : "light");
    setIsDark(enableDark);
  };

  return (
    <nav className="bg-white dark:bg-[#09090b] border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-10">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-2 flex-wrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-ar-blue-500 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle Theme"
        >
          <i className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`} />
        </button>
      </div>
    </nav>
  );
};

export default ModalNavbar;
