'use client';
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/ProjectData";

const PorfolioPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => 
    project.skills.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Projects</h1>
        <input 
          type="text" 
          placeholder="Search by skills..." 
          className="mb-4 p-2 border rounded" 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PorfolioPage;