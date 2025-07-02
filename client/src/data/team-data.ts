export interface TeamMember {
  id: number;
  name: string;
  role: string;
  skills: string[];
  description?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Maria Elena Reyes",
    role: "Lead AR Developer & Project Lead",
    skills: ["Unity 3D", "ARCore/ARKit", "C# Programming", "Computer Vision", "3D Modeling"],
    description: "Spearheading the development of the Bohol Lens AR application with over 5 years of experience in augmented reality development. Maria specializes in creating immersive cultural experiences and has worked on several heritage preservation projects across the Philippines. She holds a Master's degree in Computer Science from the University of the Philippines and is passionate about bridging technology with Filipino cultural heritage."
  },
  {
    id: 2,
    name: "Joseph Emmanuel Cruz",
    role: "Mobile Application Developer",
    skills: ["React Native", "Flutter", "iOS Development", "Android Development", "Firebase"],
    description: "Responsible for developing the cross-platform mobile application that delivers the AR experience to museum visitors. Joseph brings 4 years of mobile development expertise and has previously worked on tourism and educational apps. He graduated from Ateneo de Manila University with a degree in Information Technology and is dedicated to creating accessible technology solutions for cultural institutions."
  },
  {
    id: 3,
    name: "Anna Patricia Villanueva",
    role: "UI/UX Designer & Cultural Researcher",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Cultural Studies", "Accessibility Design"],
    description: "Leading the user experience design while ensuring cultural authenticity and sensitivity in the application interface. Anna combines her background in Fine Arts from University of Santo Tomas with extensive research on Boholano culture and traditions. She has collaborated with the National Museum for over 3 years, specializing in making cultural content accessible to diverse audiences through thoughtful design."
  },
  {
    id: 4,
    name: "Dr. Ricardo Santos Dimayuga",
    role: "Cultural Heritage Consultant & Content Curator",
    skills: ["Philippine History", "Museum Studies", "Content Development", "Research", "Cultural Preservation"],
    description: "Providing expert guidance on historical accuracy and cultural representation within the AR experience. Dr. Dimayuga is a respected historian and curator with over 15 years of experience at the National Museum of the Philippines. He holds a PhD in Philippine Studies from the University of the Philippines Diliman and has authored several publications on Boholano history and cultural heritage preservation."
  },
  {
    id: 5,
    name: "James Michael Tan",
    role: "3D Artist & Visual Effects Specialist",
    skills: ["Blender", "Maya", "3D Scanning", "Texture Mapping", "Animation", "Photogrammetry"],
    description: "Creating detailed 3D models and visual effects for the AR experience, focusing on accurate digital representations of museum artifacts. James graduated from De La Salle-College of Saint Benilde with a degree in Digital Filmmaking and has specialized in cultural artifact digitization. His work ensures that every 3D model maintains historical accuracy while being optimized for mobile AR performance."
  },
  {
    id: 6,
    name: "Sarah Mae Gonzales",
    role: "Backend Developer & Database Administrator",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "Cloud Computing", "API Development", "DevOps"],
    description: "Managing the backend infrastructure and content management system that powers the AR application. Sarah has 6 years of experience in full-stack development and cloud architecture. She graduated from Mapúa University with a degree in Computer Engineering and specializes in scalable systems for educational and cultural applications. Her work ensures reliable content delivery and user data management for the museum experience."
  }
];
