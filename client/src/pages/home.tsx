import { useState, useEffect, useRef } from 'react';
import ThreeJSBackground from '@/components/three-background';
import CapstoneModal from '@/components/capstone-modal';
import MemberModal from '@/components/member-modal';
import TeamMemberCard from '@/components/team-member-card';
import { teamMembers, TeamMember } from '@/data/team-data';
import { capstones, Capstone } from '@/data/capstone-data';
import { i } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';
import  ar1  from '../assets/ar_1.jpg';
import  ar2  from '../assets/ar_2.jpg';
import  ar3  from '../assets/ar_3.jpg';

const MultimediaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      { id: 1, title: "AR Artifact Visualization", description: "3D models of museum artifacts", image: ar1 },
      { id: 2, title: "Historical Reenactment", description: "Bringing history to life", image: ar2 },
      { id: 3, title: "Interactive Exhibit", description: "Visitor engagement features", image: ar3 }
    ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-96">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
        
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedCapstone, setSelectedCapstone] = useState<Capstone | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const docsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (docsMenuRef.current && !docsMenuRef.current.contains(event.target as Node)) {
        setIsDocsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-slow');
      const parallaxFastElements = document.querySelectorAll('.parallax-fast');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });

      parallaxFastElements.forEach((element) => {
        const speed = 0.8;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const openCapstoneModal = (capstoneId: number) => {
    const capstone = capstones.find(c => c.id === capstoneId);
    if (capstone) {
      setSelectedCapstone(capstone);
    }
    setIsDocsOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      <ThreeJSBackground />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button onClick={() => scrollToSection('home')} className="flex items-center">
                <img
                  src="/logo.png" 
                  alt="Logo"
                  className="w-10 h-10 mr-3"
                />
                <span className="text-xl font-semibold">Reality Not Found</span>
              </button>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'team', 'process', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors ${activeSection === item ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  {item}
                </button>
              ))}
              <div className="relative" ref={docsMenuRef}>
                <button 
                  onClick={() => setIsDocsOpen(!isDocsOpen)}
                  className="capitalize font-medium text-gray-600 hover:text-blue-500 transition-colors flex items-center"
                >
                  Documentation
                  <i className={`fas fa-chevron-down ml-1 text-xs transition-transform ${isDocsOpen ? 'transform rotate-180' : ''}`}></i>
                </button>
                {isDocsOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button 
                      onClick={() => openCapstoneModal(1)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                      Capstone 1
                    </button>
                    <button 
                      onClick={() => openCapstoneModal(2)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                      Capstone 2
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="md:hidden relative">
              <button 
                className="text-gray-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
              {isMobileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {['home', 'about', 'team', 'process', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        scrollToSection(item);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 capitalize font-medium ${activeSection === item ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
                    >
                      {item}
                    </button>
                  ))}
                  <div className="border-t border-gray-200 mt-1 pt-1">
                    <button 
                      onClick={() => openCapstoneModal(1)}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-500"
                    >
                      Capstone 1
                    </button>
                    <button 
                      onClick={() => openCapstoneModal(2)}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blue-500"
                    >
                      Capstone 2
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="custom-shape-divider-top-1751302426">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-blue-500"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-blue-500"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-blue-500"></path>
          </svg>
        </div>
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Bohol Lens: <span className="text-blue-500">Reminiscing the Past, Seeing the Culture</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              An Immersive Boholano Augmented Reality Experience
            </p>
            <a className="playstore-button mx-auto mb-10 inline-flex items-center justify-center border-2 border-blue-500 rounded-full bg-blue-500 px-6 py-3 text-center text-white outline-0 transition-all duration-200 hover:bg-transparent hover:text-blue-500" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="ml-4 flex flex-col items-start leading-none">
                <span className="mb-1 text-xs">GET IT ON</span>
                <span className="font-semibold">Google Play</span>
              </span>
            </a>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors shadow-lg hover:shadow-xl"
              >
                Learn More
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="mt-20 flex justify-center parallax-slow">
            <div className="ar-icon w-40 h-40 bg-blue-500 bg-opacity-10 rounded-full flex items-center justify-center">
              <i className="fas fa-mobile-alt text-6xl text-blue-500"></i>
            </div>
          </div>
          
          <div className="mt-16 fade-in parallax-fast">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Multimedia Preview</h3>
            <MultimediaCarousel />
          </div>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Project Promotional Video
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Watch our promotional video to learn more about the Bohol Lens
              experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg fade-in">
            <div
              className="relative"
              style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/DnkugF1ke1k?si=8yhqiZn6F2RFFKrl"
                title="Bohol Lens Promotional Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About The Project</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We're developing an innovative Augmented Reality application to enhance visitor experiences at the National Museum of the Philippines - Bohol, making cultural heritage more accessible and engaging.
            </p>
          </div>
          
          <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 fade-in">
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                    <i className="fas fa-bullseye text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To Develop an AR-based mobile application that enhances cultural appreciation by providing interactive, marker-based learning experiences within the National Museum of the Philippines – Bohol.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 px-4 fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gray-50 rounded-xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>Interactive 3D artifact visualizations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>Marker-based AR experiences</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>Cultural storytelling integration</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                    <span>Educational content delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capstone Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Capstone Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Innovative research and development projects advancing AR technology in cultural heritage preservation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {capstones.map((capstone, idx) => (
              <div 
                key={capstone.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200 hover-lift"
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
                    {capstone.status === 'completed' ? 'Completed' : capstone.status === 'to defend' ? 'To Defend': 'In Progress'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{capstone.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{capstone.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{capstone.timeline}</span>
                  <button className="text-blue-500 hover:text-blue-600 font-medium text-sm">
                    View Details <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
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

      {/* Development Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Agile Development Process</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              The development of the Bohol Lens followed the Agile methodology, which involves iterative cycles of planning, designing, developing, testing, deploying, and reviewing.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 fade-in">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-tasks text-blue-500 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-blue-500">Planning Phase</h3>
              </div>
              <p className="text-gray-700">
                The researchers proposed Bohol Lens, an augmented reality-based museum application designed to preserve and promote Boholano culture through immersive interaction with digital exhibits. The system is exclusively developed for Android mobile devices using Unity and Vuforia. High-quality 3D models of cultural artifacts were created using a professional camera through photogrammetry techniques and modeling. During this phase, all technical requirements were defined, including software tools, hardware, and mobile deployment limitations. A multilingual approach was also planned, integrating audio narration in English, Filipino, and Bisaya to cater to a wider audience, especially local users.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-pencil-ruler text-blue-500 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-blue-500">Designing Phase</h3>
              </div>
              <p className="text-gray-700">
                The researchers conducted interviews and collaborative discussions with National Museum of the Philippines - Bohol curators, cultural experts, and IT professionals to gather user requirements and expectations. The mobile interface was designed with simplicity and clarity in mind, ensuring smooth navigation and easy access to AR content. Wireframes and mockups were created for the AR views, audio controls, and language selection interface. Special attention was given to usability on various Android screen sizes and user environments. UI components were optimized for mobile interaction, and interface elements were prepared to support dynamic switching between English, Filipino, and Bisaya narrations.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-code text-blue-500 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-blue-500">Development Phase</h3>
              </div>
              <p className="text-gray-700">
                The development phase focused on building the AR mobile application using Unity integrated with the Vuforia SDK for image and marker-based tracking. Photogrammetry-generated 3D models were imported and optimized for real-time rendering on Android devices. Each AR scene was paired with multilingual audio narrations, and a language toggle feature was implemented to allow users to choose their preferred language before viewing the artifacts. All code and assets were version-controlled using GitHub, ensuring maintainability and collaboration during agile sprints. The development also considered offline functionality to ensure accessibility without internet connectivity.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-bug text-blue-500 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-blue-500">Testing Phase</h3>
              </div>
              <p className="text-gray-700">
                During the testing phase, the mobile application underwent functional, compatibility, and usability testing across a variety of Android smartphones. AR tracking, model placement accuracy, performance under different lighting conditions, and audio playback for all three languages were thoroughly tested. Bugs and inconsistencies identified during testing were documented and resolved in subsequent development cycles.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <i className="fas fa-rocket text-blue-500 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-blue-500">Deployment Phase</h3>
              </div>
              <p className="text-gray-700">
                The final application was packaged and deployed exclusively as an Android APK file. The app was tested on various Android versions to ensure compatibility and performance. All assets, including 3D models and multilingual audio files, were bundled into the APK to support offline use. The deployment process involved direct installation to devices for demonstrations and educational use in schools and public exhibits. The app required no internet connection, making it suitable for remote areas with limited connectivity. The deployment confirmed the system met all functional requirements, including AR stability and multilingual accessibility.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <i className="fas fa-chart-line text-blue-500 text-2xl mr-3"></i>
                <h3 className="text-xl font-semibold text-blue-500">Review Phase</h3>
              </div>
              <p className="text-gray-700">
                In the review phase, the researchers evaluated the overall performance, usability, and impact of the deployed mobile application. Feedback from initial users indicated strong appreciation for the inclusion of Bisaya and Filipino narrations, which made the experience more engaging and culturally authentic. Minor usability issues and enhancement suggestions such as clearer audio icons and additional visual guides were documented for future improvements. The researchers concluded that the mobile-only AR approach was effective for their target audience and would consider future updates to include more artifacts, interactive elements, and possibly additional local dialects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Interested in learning more about our AR Museum Portal? Contact us for collaboration opportunities.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="fade-in">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">404realitynotfound@gmail.com</p>
              </div>
              
              <div className="fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+63 945 519 2009</p>
              </div>
              
              <div className="fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Bohol, Philippines</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-8">
                © 2025 Bohol Lens - National Museum of the Philippines - Bohol. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
