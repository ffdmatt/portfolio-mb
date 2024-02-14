import React from "react";
import { Project } from "../Types/ProjectTypes";
import Link from 'next/link';

type Props = {
    project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    return (
        <Link href={`/projects/${project.id}`}  className="block p-4 text-slate-600 bg-white rounded-lg shadow-lg hover:bg-gray-100">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="=text-gray-600">{project.skill}</p>
            <p className="=text-gray-500">{project.client}</p>
            <p className="=text-gray-700">{project.description}</p>
        </Link>
    )
};

export default ProjectCard;