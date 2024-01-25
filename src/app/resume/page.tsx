import React from "react";
import Navbar from "../Components/Navbar";
import ExperienceSection from "../Components/Resume/ExperienceSection";
import EducationSection from "../Components/Resume/EducationSection";
import SkillsSection from "../Components/Resume/SkillsSection";
import { ResumeData } from "../Types/ResumeTypes";
import AnimatedSection from "../Components/AnimatedSection";

const resumeData: ResumeData = {
  fullName: "Matt Brevetti",
  title: "Digital Marketing Expert",
  summary: "Best described as a digital marketer and programmer.",
  experiences: [
    {
      company: "Altio Digital, LLC",
      position: "President",
      startDate: "2023-07-01",
      endDate: null,
      details: [
        "Providing digital ads management services to businesses.",
        "PPC, CPC, Programmatic, Display, Video, Social Advertising",
        "Providing full partnership-oriented services and retainer services",
        "Additional services including web design / development, branding, tool setup, and more as needed for campaign management.",
        "AI-assisted tool generation with GPT-4",
      ],
    },
    {
      company: "Springtide Child Development",
      position: "Senior Marketing Manager",
      startDate: "2022-02-01",
      endDate: "2023-06-21",
      details: [
        "Hired as Digital Marketing Manager, promoted to Senior Manager in charge of all marketing functions within a year",
        "Planned and executed a full transition of all marketing functions from external agency to in-house operation, leading to a 92% decrease in cost per lead, 85% decrease in CAC, and census expansion across all centers",
        "Oversaw the launch of 2 additional centers across Massachusetts, aided census growth in all 6 clinics across Connecticut and Massachusetts through creative, cost-effective digital and in-person campaigns.",
        "Strategized, built, and executed the Community Engagement function, increasing patient referrals by over 400% and adding over 60 new referring clinicians in the first 6 weeks.",
        "Built custom tools to solve business challenges in various programming languages, including JavaScript and PHP"
      ],
    },
    {
      company: "Gersh Autism",
      position: "Digital Marketing Manager",
      startDate: "2016-08-07",
      endDate: "2023-02-01",
      details: [
        "Planned, executed, and analyzed digital marketing campaigns across as many as 8 brands at once under the corporate umbrella, including website development, digital advertising, SEO, CRM deployment and tooling, creative design, social media management, data analysis, and email marketing.",
        "Strategized and executed the creation of the corporate brand, unifying multiple companies under a single brand direction.",
        "Designed, ran, and co-created Autism Day at Six Flags Great Adventure, a first-of-its-kind event that held over 4000 families the first year and over 7000 the following year.",
        "Oversaw the opening of multiple service lines, brands, and ventures – developing go-to-market strategies and taking them from planning to execution and analysis."
      ],
    },
    {
      company: "Farmingdale Physical Therapy West",
      position: "Marketing Director (Contract)",
      startDate: "2016-05-01",
      endDate: "2016-07-01",
      details: [
        "Contracted as director of marketing for Farmingdale Physical Therapy West and newly opened Lake Shore Physical Therapy in order to assist them in the development and execution of a long-term marketing plan.",
        "Analyzed and overhauled existing marketing efforts and created a long-term plan for future expansion.",
        "Responsible for all aspects of marketing, including digital and print advertising, direct mail, B2B referral outreach, content marketing, Google Ads, Yelp Ads, Bing Ads, email campaigns, web design and development, SEO, SMM, media buying, branding, and promotions.",
        "Digital efforts increased daily clicks by 500%, tripled the click through rate of ads, and dropped the average cost-per-click by 63%.",
        "Created a grand opening campaign and strategy from the ground up including the design and development of a new website, digital and print advertisements, YouTube and blog content strategy, and an events marketing strategy for Lake Shore Physical Therapy."
      ],
    },
    {
      company: "Marketing Contracting",
      position: "Consultant, Marketing",
      startDate: "2015-01-01",
      endDate: "2016-08-01",
      details: [
        "Independent digital marketing consultant for small businesses around Long Island including restaurants, dietitians, contractors, and physical therapists.",
        "Created holistic marketing strategies, offering execution and/or project management.",
        "Services included web design/development, digital advertising, social media marketing, search engine optimization, branding, and sales funnel strategies."
      ],
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
    { name: "Problem Solving", level: "Advanced" },
    { name: "Data Analysis", level: "Advanced" },
    { name: "Creativity", level: "Advanced" },
    { name: "Leadership", level: "Advanced" },
    { name: "Public Speaking", level: "Advanced" },
    { name: "Team Management", level: "Advanced" },
    { name: "Javascript", level: "Advanced"},
    { name: "React", level: "Intermediate"},
    { name: "Next.JS", level: "Intermediate"},
    { name: "Typescript", level: "Intermediate"},
    { name: "Java", level: "Intermediate"},
    { name: "Web Development", level: "Advanced"},
    { name: "Wordpress Development", level: "Advanced"},
    { name: "Full Stack", level: "Intermediate"},
    { name: "PHP", level: "Intermediate"},
    { name: "Git", level: "Intermediate"},
    { name: "Android App Development", level: "Beginner"},
    { name: "SQL", level: "Intermediate"},
    { name: "GPT-4", level: "Beginner"},
    { name: "Adobe Creative Cloud Suite", level: "Advanced" },
    { name: "Microsoft Office 365", level: "Advanced" },
    { name: "CRMs, including Salesforce and Hubspot", level: "Advanced" },
    { name: "Project Management Tools, including Monday and Asana", level: "Advanced"},
    { name: "WooCommerce and Shopify", level: "Intermediate"},
  ],
};

const ResumePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full bg-blue-100 py-24 text-blue-900">
          <div className="container mx-auto grid gap-5">
            <AnimatedSection>
              <header className="grid gap-3">
                <h1>Resume</h1>
                <div className="grid gap-1">
                  <h2 className="text-3xl">{resumeData.fullName}</h2>
                  <p>{resumeData.title}</p>
                  <p>{resumeData.summary}</p>
                </div>
              </header>
            </AnimatedSection>
            <AnimatedSection>
              <ExperienceSection experiences={resumeData.experiences} />
            </AnimatedSection>
            <AnimatedSection>
              <EducationSection schools={resumeData.education} />
            </AnimatedSection>
            <AnimatedSection>
              <SkillsSection skills={resumeData.skills} />
            </AnimatedSection>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResumePage;
