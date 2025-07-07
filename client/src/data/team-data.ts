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
    description: "Joshua G. Tabura, a 21-year-old resident of Putlongcam, Alicia, Bohol, is pursuing Bachelor of Science in Information Technology at Cristal e-College in Tawala Panglao, Bohol. Born on the 10th of September, 2003, in Caloocan City. Joshua is a Roman Catholic and currently single. He attended Alicia Technical Vocational High School for his High School and Sapang Palay Proper Elementary School for his primary education. Joshua can be reached via email at j.tabura11@gmail.com.",
    image: "/joshua.jpg"
  },
  {
    id: 2,
    name: "Fernando O. Dela Riva",
    role: "Junior Developer",
    skills: ["React Native", "JavaScript", "Mobile UI", "Testing", "Version Control"],
    description: "Fernando O. Dela Riva, a 23-years old resident of Panglao, Bohol, is pursuing Bachelor of Science in Information Technology at Cristal e-College in Tawala, Panglao, Bohol. Born on the 10th of June, 2002 in Pasig City, Rizal. Fernando is a Roman Catholic and currently single. He attended Cristal e-College for his senior high school and Sto. Niño International School for his junior high school and Lilo-an Elementary School for his primary education. Fernando can be reached via his email at fernandodelariva911@gmail.com.",
    image: "/fernando.jpg"
  },
  {
    id: 3,
    name: "Jander M. Segundo",
    role: "Documentation Chairman",
    skills: ["Technical Writing", "Project Documentation", "Research", "Content Management", "Quality Assurance"],
    description: "Jander M. Segundo, a 22-year-old resident of Lagtangon, Maribojoc, Bohol, is pursuing Bachelor of Science in Information Technology at Cristal e-College in Tawala Panglao, Bohol. Born on the 17th of March, 2003, in NCR. Jander is a Roman Catholic and currently single. He attended San Isidro Agro Industrial School for his High School and San Roque Elementary School for his primary education. Jander can be reached via email at janderse18@gmail.com.",
    image: "/jander.jpg"
  },
  {
    id: 4,
    name: "Kent Paul A. Vergara",
    role: "Multimedia Expert",
    skills: ["3D Modeling", "Video Production", "Graphic Design", "Animation", "Visual Effects"],
    description: "Kent Paul A. Vergara, a 23-year-old resident of Bil-isan Panglao, Bohol, is pursuing Bachelor of Science in Information Technology at Cristal e-College in Tawala Panglao, Bohl. Born on the 7th of August, 2001, in San Carlos City Negros Occidental. Kent is a Bible Baptist and currently single. He attended Holy Name University for his High School and Landmark Baptist Christian Academy for his primary education. Kent can be reached via email at kp.vergz@gmail.com.",
    image: "/kent.jpg"
  }
];
