export type Experience = {
    company: string;
    position: string;
    startDate: string; // format: YYYY-MM
    endDate: string | null; // null if it's the current position
    details: string[];
  };
  
  export type Education = {
    school: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string; // format: YYYY-MM
    endDate: string; // format: YYYY-MM
  };
  
  export type Skill = {
    name: string;
    level: string; // Beginner, Intermediate, Expert
  };

  export type SkillGroup = {
    groupName: string;
    skills: Skill[];
  }
  
  export type ResumeData = {
    fullName: string;
    title: string;
    summary: string;
    experiences: Experience[];
    education: Education[];
    skillGroups: SkillGroup[];
  };
  