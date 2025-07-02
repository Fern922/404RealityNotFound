import { useState } from 'react';
import { Capstone } from '@/data/capstone-data';
import ModalNavbar from './modal-navbar';
import ChapterDropdown from './chapter-dropdown';

interface CapstoneModalProps {
  capstone: Capstone | null;
  onClose: () => void;
}

const CapstoneModal = ({ capstone, onClose }: CapstoneModalProps) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  if (!capstone) return null;

  const toggleChapter = (chapterId: string) => {
    setLoading(true);
    setTimeout(() => {
      setOpenChapters(prev => ({
        ...prev,
        [chapterId]: !prev[chapterId]
      }));
      setLoading(false);
    }, 150);
  };

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'chapters', title: 'Chapters' },
    { id: 'resources', title: 'Resources' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold heading-gradient mb-4">{capstone.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{capstone.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-ar-blue-50 to-blue-100 p-6 rounded-xl">
                <h3 className="font-semibold text-ar-blue-800 mb-3 flex items-center">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Project Timeline
                </h3>
                <p className="text-ar-blue-700">{capstone.timeline}</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 rounded-xl">
                <h3 className="font-semibold text-emerald-800 mb-3 flex items-center">
                  <i className="fas fa-check-circle mr-2"></i>
                  Status
                </h3>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  capstone.status === 'completed' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {capstone.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </div>
          </div>
        );
      
      case 'chapters':
        return (
          <div className="p-6">
            {capstone.status === 'completed' ? (
              <div>
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Chapter Structure</h3>
                {loading && (
                  <div className="flex items-center justify-center py-4">
                    <div className="loading-spinner"></div>
                    <span className="ml-2 text-gray-600">Loading...</span>
                  </div>
                )}
                {capstone.chapters.map((chapter) => (
                  <ChapterDropdown
                    key={chapter.id}
                    chapter={chapter}
                    isOpen={openChapters[chapter.id]}
                    onToggle={() => toggleChapter(chapter.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-32">
                <div className="ar-icon mb-6">
                  <img src="/public/work.svg" alt="working" width="32" height="32" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">Capstone 2 is still a work in progress</h3>
              </div>
            )}
          </div>
        );
      
      case 'resources':
        return (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Project Resources</h3>
            <div className="grid gap-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <i className="fas fa-file-pdf text-red-500 mr-3"></i>
                  <span className="font-medium">Project Documentation</span>
                </div>
                <p className="text-gray-600 text-sm">Complete project documentation and technical specifications</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <i className="fab fa-github text-gray-800 mr-3"></i>
                  <span className="font-medium">Source Code Repository</span>
                </div>
                <p className="text-gray-600 text-sm">Access the complete source code and development history</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-2">
                  <i className="fas fa-presentation text-ar-blue-500 mr-3"></i>
                  <span className="font-medium">Presentation Materials</span>
                </div>
                <p className="text-gray-600 text-sm">Slides and materials used for project presentations</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl modal-content">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">{capstone.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <ModalNavbar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          sections={sections}
        />
        
        <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(90vh - 140px)' }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CapstoneModal;
