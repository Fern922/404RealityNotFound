export interface ChapterSection {
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  sections: ChapterSection[];
}

export interface Capstone {
  id: number;
  title: string;
  description: string;
  status: "to defend" | "in-progress" | "completed";
  timeline: string;
  chapters: Chapter[];
}

export const capstones: Capstone[] = [
  {
    id: 1,
    title: "Capstone 1",
    description: "Bohol Lens: Reminiscing the Past, Seeing the Culture — An Immersive Boholano Augmented Reality Experience. An innovative augmented reality system designed to enhance visitor experience at the National Museum of the Philippines - Bohol through interactive digital exhibits and immersive storytelling.",
    status: "to defend",
    timeline: "June 2 - July 12, 2025",
    chapters: [
      {
        id: "chapter1",
        title: "CHAPTER I - Introduction",
        sections: [
          {
            title: "Introduction", 
            content: ""
          },
          {
            title: "1.1 Statement of the Problem",
            content: ""
          },
          {
            title: "1.2 General Objective", 
            content: ""
          },
          {
            title: "1.3 Specific Objectives",
            content: ""
          },
          {
            title: "1.4 Significance of the Study",
            content: ""
          },
          {
            title: "1.5 Scope and Limitations",
            content: "",
          },
          {
            title: "1.6 Definition of Terms",
            content: "",
          }
        ]
      },
      {
        id: "chapter2",
        title: "CHAPTER II - Review of Related Literature and Studies",
        sections: [
          {
            title: "2.1 International Studies",
            content: "This chapter reviews pertinent literature and studies that are related to the current research, examining both international and local studies that have explored the use of Augmented Reality in cultural heritage preservation and museum experiences."
          },
          {
            title: "2.2 Local Studies (Philippines)",
            content: "This section examines local Philippine studies that have explored the application of Augmented Reality technology in cultural heritage preservation and educational contexts within the country."
          },
        ]
      },
      {
        id: "chapter3", 
        title: "CHAPTER III - Technical Background",
        sections: [
          {
            title: "3.1 Technicality of the Project",
            content: ""
          },
          {
            title: "3.2 Details of the Technologies to be Used",
            content: ""
          },
          {
            title: "3.4 Cost-Benefit Analysis",
            content: ""
          }
        ]
      },
      {
        id: "chapter4",
        title: "CHAPTER IV - Methodology, Results, and Discussion",
        sections: [
          {
            title: "4.1 Requirements Analysis",
            content: ""
          },
          {
            title: "4.2 Requirements Documentation",
            content: ""
          },
          {
            title: "4.3 Design of Software, Systems, Products, and/or Processes",
            content: ""
          },
          {
            title: "4.4 Project Development Methodology",
            content: ""
          },
          {
            title: "4.5 System Architecture",
            content: ""
          },
          {
            title: "4.6 Prototype Design",
            content: ""
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Capstone 2",
    description: "A comprehensive analytics platform for measuring and optimizing AR experience effectiveness in cultural heritage institutions.",
    status: "in-progress",
    timeline: "July 12, 2025 - December 2025",
    chapters: []
  }
];