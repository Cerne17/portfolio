import React from "react";
import type { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]">
      {project.imageUrl && (
        <img
          className="w-full h-48 object-cover" // object-cover ensures image covers the area without distortion
          src={project.imageUrl}
          alt={project.title}
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              View Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
