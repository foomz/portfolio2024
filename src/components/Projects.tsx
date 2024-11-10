import React from 'react';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "OCR Document Tracking System",
      description: "Centralized document management system with OCR technology for automated data extraction. Features include audit trails, progress monitoring, and trend analysis capabilities.",
      technologies: ["ReactJS", "Django", "Sqlite3", "Git", "AWS"]
    },
    {
      title: "Network Web Mapper",
      description: "Web-based tool for Domain and IP Address Reconnaissance, providing comprehensive network mapping capabilities.",
      technologies: ["ReactJS", "Django", "Nmap"]
    },
    {
      title: "CLI Monitor Tool",
      description: "Server and cloud status monitoring script with real-time updates and downtime alerts using continuous ping system.",
      technologies: ["Bash"]
    },
    {
      title: "Facial Recognition System",
      description: "Advanced facial recognition system for database matching and personal information identification, enhancing security measures.",
      technologies: ["Python", "Face-Recognition", "OpenCV", "Microsoft SQL Server"]
    },
    {
      title: "People Search Engine",
      description: "Comprehensive people search engine that aggregates and cross-references public data for detailed information profiles.",
      technologies: ["Python", "Microsoft SQL Server"]
    }
  ];

  return (
    <section id="projects" className="pt-20 -mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <FolderGit2 className="text-blue-500" />
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}