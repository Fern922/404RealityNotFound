import { useState } from 'react';
import ThreeJSBackground from '@/components/three-background';
import CapstoneModal from '@/components/capstone-modal';
import MemberModal from '@/components/member-modal';
import TeamMemberCard from '@/components/team-member-card';
import { teamMembers, TeamMember } from '@/data/team-data';
import { capstones, Capstone } from '@/data/capstone-data';

const Home = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedCapstone, setSelectedCapstone] = useState<Capstone | null>(null);

  return (
    <div className="min-h-screen ar-grid">
      <ThreeJSBackground />
      
      {/* Enhanced Header */}
      <header className="relative z-10 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="ar-icon">
                <i className="fas fa-cube text-3xl text-ar-blue-500"></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold heading-gradient">AR Museum Portal</h1>
                <p className="text-sm text-gray-600">National Museum of the Philippines - Bohol</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-ar-blue-500 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-ar-blue-500 font-medium transition-colors">About</a>
              <a href="#team" className="text-gray-700 hover:text-ar-blue-500 font-medium transition-colors">Team</a>
              <a href="#projects" className="text-gray-700 hover:text-ar-blue-500 font-medium transition-colors">Projects</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="ar-icon mb-8">
            <i className="fas fa-vr-cardboard text-6xl text-ar-blue-500"></i>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold heading-gradient mb-6">
            Reality Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between digital innovation and cultural heritage through 
            cutting-edge augmented reality experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-ar-blue-500 text-white rounded-xl font-semibold hover:bg-ar-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl glow">
              Explore AR Experience
            </button>
            <button className="px-8 py-4 border-2 border-ar-blue-500 text-ar-blue-500 rounded-xl font-semibold hover:bg-ar-blue-500 hover:text-white transition-all duration-200">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Capstone Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6 bg-white bg-opacity-90">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-gradient mb-4">Capstone Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative research and development projects advancing AR technology in cultural heritage preservation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {capstones.map((capstone, idx) => (
              <div 
                key={capstone.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-ar-blue-200"
                onClick={() => setSelectedCapstone(capstone)}
                style={{ 
                  animation: `fadeIn 0.6s ease ${idx * 0.2}s forwards`,
                  opacity: 0
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="ar-icon mr-4">
                    <i className={`fas ${capstone.status === 'completed' ? 'fa-check-circle text-emerald-500' : 'fa-clock text-yellow-500'} text-2xl`}></i>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    capstone.status === 'completed' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {capstone.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{capstone.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{capstone.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{capstone.timeline}</span>
                  <button className="text-ar-blue-500 hover:text-ar-blue-600 font-medium text-sm">
                    View Details <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-gradient mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate developers and designers working together to revolutionize museum experiences through AR technology
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                delay={idx}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-cube text-2xl text-ar-blue-400 mr-3"></i>
                <h3 className="text-xl font-bold">AR Museum Portal</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Innovating cultural heritage preservation through cutting-edge augmented reality technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-ar-blue-400 transition-colors">Home</a></li>
                <li><a href="#projects" className="hover:text-ar-blue-400 transition-colors">Projects</a></li>
                <li><a href="#team" className="hover:text-ar-blue-400 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-ar-blue-400 transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-ar-blue-400 transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-ar-blue-400 transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-ar-blue-400 transition-colors">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AR Museum Portal - National Museum of the Philippines, Bohol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedMember && (
        <MemberModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
      
      {selectedCapstone && (
        <CapstoneModal 
          capstone={selectedCapstone} 
          onClose={() => setSelectedCapstone(null)} 
        />
      )}
    </div>
  );
};

export default Home;
