import React from "react";
import { Project } from "../Types/ProjectTypes";
import Link from "next/link";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="flex flex-col gap-2 p-4 text-slate-600 bg-white dark:bg-slate-800 dark:text-blue-200 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-slate-900"
    >
      <h3 className="text-xl font-bold">{project.title}</h3>
      <div className="flex flex-wrap gap-1">
        Skills: 
        {project.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-800 dark:text-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        Industry: 
        {project.industries.map((industry, index) => (
          <span
            key={index}
            className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-800 dark:text-green-200"
          >
            {industry}
          </span>
        ))}
      </div>
      <p className="text-gray-700 dark:text-blue-100">{project.description}</p>
    </Link>
  );
};

export default ProjectCard;
