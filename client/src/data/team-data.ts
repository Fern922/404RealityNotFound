export interface TeamMember {
  id: number;
  name: string;
  role: string;
  skills: string[];
  description?: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Joshua G. Tabura",
    role: "Senior Developer",
    skills: ["AR Development", "Unity 3D", "C# Programming", "Mobile Development", "Team Leadership"],
    description: "Leading the technical development of the Bohol Lens AR application with expertise in augmented reality and mobile development. Joshua brings extensive experience in creating immersive digital experiences and is responsible for the overall technical architecture of the project.",
    image: "https://via.placeholder.com/300x300?text=JGT"
  },
  {
    id: 2,
    name: "Fernando O. Dela Riva",
    role: "Junior Developer",
    skills: ["React Native", "JavaScript", "Mobile UI", "Testing", "Version Control"],
    description: "Supporting the development team with mobile application development and testing. Fernando is passionate about learning new technologies and contributes to the frontend development and quality assurance of the AR Museum Portal application.",
    image: "https://via.placeholder.com/300x300?text=FODR"
  },
  {
    id: 3,
    name: "Jander M. Segundo",
    role: "Documentation Chairman",
    skills: ["Technical Writing", "Project Documentation", "Research", "Content Management", "Quality Assurance"],
    description: "Responsible for creating and maintaining comprehensive project documentation, including user manuals, technical specifications, and research documentation. Jander ensures that all project deliverables are properly documented and accessible to stakeholders.",
    image: "https://via.placeholder.com/300x300?text=JMS"
  },
  {
    id: 4,
    name: "Kent Paul A. Vergara",
    role: "Multimedia Expert",
    skills: ["3D Modeling", "Video Production", "Graphic Design", "Animation", "Visual Effects"],
    description: "Creating multimedia content for the AR experience, including 3D models, promotional videos, and visual assets. Kent specializes in producing high-quality visual content that enhances the user experience and effectively communicates the project's cultural heritage focus.",
    image: "https://via.placeholder.com/300x300?text=KPAV"
  }
];
