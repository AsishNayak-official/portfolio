// data/journeyData.ts
export type JourneyItem = {
    id: string;
    type: "school" | "highschool" | "college" | "internship" | "job";
    title: string;
    institution: string;
    year: string;
    marksOrCGPA?: string;
    achievements?: string[];
    fromYear?: string;
    toYear?: string;
  };
  
  export const journeyData: JourneyItem[] = [
    {
      id: "school",
      type: "school",
      title: "10th Grade",
      institution: "ABC Public School",
      year: "2015",
      marksOrCGPA: "92%",
      achievements: ["Science Olympiad Winner", "School Topper"],
    },
    {
      id: "highschool",
      type: "highschool",
      title: "12th Grade",
      institution: "XYZ Sr. Secondary School",
      year: "2017",
      marksOrCGPA: "89%",
    },
    {
      id: "college",
      type: "college",
      title: "Bachelor of Technology",
      institution: "DEF Institute of Tech",
      year: "2021",
      marksOrCGPA: "8.4 CGPA",
    },
    {
      id: "internship",
      type: "internship",
      title: "Software Intern",
      institution: "Startup Inc.",
      year: "2020",
    },
    {
      id: "job",
      type: "job",
      title: "Full-time Developer",
      institution: "Big Tech Co.",
      fromYear: "2021",
      toYear: "Present",
      year: "2021 - Present",
    },
  ];
  