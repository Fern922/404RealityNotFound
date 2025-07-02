import { TeamMember } from '@/data/team-data';

interface MemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const MemberModal = ({ member, onClose }: MemberModalProps) => {
  if (!member) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto modal-content shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold heading-gradient">{member.name}</h3>
              <p className="text-ar-blue-500 font-medium">{member.role}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              {member.image ? (
                <div className="w-32 h-32 rounded-full mx-auto shadow-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-ar-blue-500 to-ar-blue-600 flex items-center justify-center text-white text-4xl mx-auto shadow-lg">
                  {member.name.split(' ').map(n => n.charAt(0)).join('')}
                </div>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">About</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {member.description || "Dedicated team member contributing to the AR Museum Portal project. Passionate about technology and cultural preservation through innovative digital solutions."}
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h5 className="font-medium text-gray-800 mb-3">Contributions</h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(member.skills || ['Frontend Development', 'UI/UX Design', 'Project Management']).map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-ar-blue-100 text-ar-blue-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-ar-blue-500 transition-colors p-2 hover:bg-gray-100 rounded-lg">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-ar-blue-500 transition-colors p-2 hover:bg-gray-100 rounded-lg">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-ar-blue-500 transition-colors p-2 hover:bg-gray-100 rounded-lg">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
