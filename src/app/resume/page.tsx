import React from "react";
import Navbar from "../Components/Navbar";
import ExperienceSection from "../Components/Resume/ExperienceSection";
import EducationSection from "../Components/Resume/EducationSection";
import SkillsSection from "../Components/Resume/SkillsSection";
import { ResumeData } from "../Types/ResumeTypes";

const resumeData: ResumeData = {
  fullName: "Matt Brevetti",
  title: "Digital Marketing Expert",
  summary: "Best described as a digital marketer and programmer.",
  experiences: [
    {
      company: "Company A",
      position: "The Position",
      startDate: "2000-03-23",
      endDate: "2005-03-23",
      details: ["thing 1", "thins 2", "thing 3"],
    },
    {
      company: "Company B",
      position: "A New Position",
      startDate: "2005-03-23",
      endDate: "2007-03-23",
      details: ["thing 1", "thins 2", "thing 3"],
    },
  ],
  education: [
    {
      school: "School 1",
      degree: "Associate's",
      fieldOfStudy: "Marketing",
      startDate: "2007-09-08",
      endDate: "2009-06-14",
    },
    {
      school: "School 2",
      degree: "Bachelor's",
      fieldOfStudy: "Marketing",
      startDate: "2009-09-08",
      endDate: "2011-06-14",
    },
  ],
  skills: [
    { name: "Skill 1", level: "Intermediate" },
    { name: "Skill 2", level: "Advanced" },
    { name: "Skill 3", level: "Advanced" },
    { name: "Skill 4", level: "Intermediate" },
  ],
};

const ResumePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full bg-blue-100 py-24 text-blue-900">
          <div className="container mx-auto">
            <header>
              <h1>{resumeData.fullName}</h1>
              <h2>Resume</h2>
              <p>{resumeData.title}</p>
              <p>{resumeData.summary}</p>
            </header>
            <ExperienceSection experiences={resumeData.experiences} />
            <EducationSection schools={resumeData.education} />
            <SkillsSection skills={resumeData.skills} />
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumePage;
