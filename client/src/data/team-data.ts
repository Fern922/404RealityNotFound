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
    name: "Alexandra Santos",
    role: "Lead AR Developer",
    skills: ["AR Development", "Three.js", "React"],
    description: "Dedicated team member contributing to the AR Museum Portal project. Passionate about technology and cultural preservation through innovative digital solutions."
  },
  {
    id: 2,
    name: "Miguel Rodriguez",
    role: "UI/UX Designer",
    skills: ["UI Design", "User Research", "Prototyping"],
    description: "Dedicated team member contributing to the AR Museum Portal project. Passionate about technology and cultural preservation through innovative digital solutions."
  },
  {
    id: 3,
    name: "Isabella Chen",
    role: "Backend Engineer",
    skills: ["Node.js", "Database Design", "API Development"],
    description: "Dedicated team member contributing to the AR Museum Portal project. Passionate about technology and cultural preservation through innovative digital solutions."
  },
  {
    id: 4,
    name: "Carlos Mendoza",
    role: "Project Manager",
    skills: ["Project Management", "Team Leadership", "Strategy"],
    description: "Dedicated team member contributing to the AR Museum Portal project. Passionate about technology and cultural preservation through innovative digital solutions."
  }
];
