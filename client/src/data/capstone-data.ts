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
  status: "completed" | "in-progress";
  timeline: string;
  chapters: Chapter[];
}

export const capstones: Capstone[] = [
  {
    id: 1,
    title: "Capstone 1: AR Cultural Heritage System",
    description: "An innovative augmented reality system designed to enhance visitor experience at the National Museum of the Philippines - Bohol through interactive digital exhibits and immersive storytelling.",
    status: "completed",
    timeline: "September 2023 - February 2024",
    chapters: [
      {
        id: "chapter1",
        title: "Chapter I: Introduction and Problem Statement",
        sections: [
          {
            title: "1.1 Background of the Study",
            content: "The National Museum of the Philippines - Bohol faces challenges in engaging modern visitors, particularly younger demographics, with traditional static exhibits. This study explores how augmented reality technology can bridge the gap between historical artifacts and contemporary digital experiences, making cultural heritage more accessible and engaging for diverse audiences."
          },
          {
            title: "1.2 Problem Statement",
            content: "Traditional museum exhibits often fail to capture and maintain visitor attention in an increasingly digital world. Visitors spend limited time engaging with artifacts, and educational impact is often minimal. There is a critical need for innovative solutions that can transform passive observation into active, immersive learning experiences."
          },
          {
            title: "1.3 Objectives of the Study",
            content: "This research aims to develop and implement an AR-enhanced museum experience system that increases visitor engagement, improves educational outcomes, and preserves cultural heritage through innovative digital storytelling techniques. The system will provide multilingual support and accessibility features for inclusive cultural education."
          }
        ]
      },
      {
        id: "chapter2",
        title: "Chapter II: Literature Review and Theoretical Framework",
        sections: [
          {
            title: "2.1 Augmented Reality in Cultural Heritage",
            content: "Extensive research demonstrates AR's potential in cultural preservation and education. Studies from institutions like the Smithsonian and Louvre show significant increases in visitor engagement and learning retention when AR technologies are integrated into museum experiences. This technology enables the overlay of digital information onto physical artifacts, creating rich, contextual experiences."
          },
          {
            title: "2.2 Digital Storytelling in Museums",
            content: "Digital storytelling transforms static exhibits into dynamic narratives that connect emotionally with visitors. Research indicates that narrative-driven experiences increase memory retention by up to 65% compared to traditional information presentation methods. This approach is particularly effective for cultural heritage sites seeking to preserve and transmit intangible cultural elements."
          },
          {
            title: "2.3 User Experience Design in AR Applications",
            content: "Successful AR applications require intuitive user interfaces and seamless integration with physical environments. Studies emphasize the importance of user-centered design principles, accessibility considerations, and performance optimization to ensure positive user experiences across diverse technological proficiency levels."
          }
        ]
      },
      {
        id: "chapter3",
        title: "Chapter III: Methodology and System Design",
        sections: [
          {
            title: "3.1 Research Methodology",
            content: "This study employs a mixed-methods approach combining quantitative user engagement metrics with qualitative user experience feedback. The research design includes pre and post-implementation surveys, observational studies, and in-depth interviews with museum visitors and staff to comprehensively evaluate the AR system's effectiveness."
          },
          {
            title: "3.2 System Architecture",
            content: "The AR system is built using a modular architecture consisting of mobile applications, cloud-based content management, and real-time tracking systems. The technology stack includes React Native for cross-platform compatibility, ARCore/ARKit for AR functionality, and Node.js backend services for content delivery and user analytics."
          },
          {
            title: "3.3 Content Development Framework",
            content: "A comprehensive framework was developed for creating and managing AR content, including 3D model optimization, multilingual text overlays, and interactive elements. The framework ensures consistency across all exhibits while allowing for easy content updates and expansion as new artifacts are acquired by the museum."
          }
        ]
      },
      {
        id: "chapter4",
        title: "Chapter IV: Implementation and Results",
        sections: [
          {
            title: "4.1 System Implementation",
            content: "The AR system was successfully deployed across five major exhibits at the National Museum of the Philippines - Bohol. Implementation included hardware setup, staff training, and visitor orientation programs. The system supports both Android and iOS devices, ensuring broad accessibility for museum visitors."
          },
          {
            title: "4.2 Performance Metrics and Analysis",
            content: "Initial results show a 78% increase in average visit duration and 92% positive feedback from users. Engagement metrics indicate that visitors interact with AR-enhanced exhibits 3.5 times longer than traditional displays. Educational assessment scores improved by 45% when comparing pre and post-visit knowledge retention tests."
          },
          {
            title: "4.3 User Feedback and Iterative Improvements",
            content: "Continuous user feedback led to several system refinements, including improved gesture recognition, faster loading times, and enhanced accessibility features. The iterative development approach resulted in a 95% user satisfaction rate and positive reviews from both visitors and museum curators."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Capstone 2: Advanced AR Analytics Platform",
    description: "A comprehensive analytics platform for measuring and optimizing AR experience effectiveness in cultural heritage institutions.",
    status: "in-progress",
    timeline: "March 2024 - August 2024",
    chapters: []
  }
];
