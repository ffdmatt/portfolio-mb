import Navbar from "../Components/Navbar";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/ProjectData";

const PorfolioPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PorfolioPage;