import { TeamMember } from '@/data/team-data';

interface TeamMemberCardProps {
  member: TeamMember;
  delay: number;
  onClick: () => void;
}

const TeamMemberCard = ({ member, delay, onClick }: TeamMemberCardProps) => {
  return (
    <div 
      className={`w-full md:w-1/2 lg:w-1/4 p-4 opacity-0`}
      style={{ 
        animation: `fadeIn 0.6s ease ${delay * 0.1}s forwards`
      }}
    >
      <div className="flip-card" onClick={onClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="mb-4">
              {member.image ? (
                <div className="w-16 h-16 rounded-full mx-auto shadow-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ar-blue-400 to-ar-blue-600 flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                  {member.name.split(' ').map(n => n.charAt(0)).join('')}
                </div>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
            <p className="text-sm font-medium text-ar-blue-600">{member.role}</p>
            <div className="mt-4">
              <i className="fas fa-mouse-pointer text-ar-blue-400 text-sm"></i>
              <p className="text-xs text-ar-blue-500 mt-1">Click to view details</p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="ar-icon mb-4">
              <i className="fas fa-cube text-3xl"></i>
            </div>
            <h3 className="text-lg font-semibold mb-3">{member.name}</h3>
            <p className="text-sm mb-4">{member.role}</p>

            <div className="mt-4">
              <button className="px-4 py-2 bg-white bg-opacity-20 rounded-lg text-xs font-medium hover:bg-opacity-30 transition-all">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
