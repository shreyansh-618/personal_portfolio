import React from "react";
import ProjectCard from "../components/ui/ProjectCard";

const projects = [
  {
    title: "AcadHub",
    subtitle: "AI Academic Resource Platform (ongoing)",
    purpose:
      "AI-powered academic collaboration and resource management system.",
    highlights: [
      "Semantic search using embeddings",
      "Resource sharing and discussions",
      "Authentication system",
      "Scalable service-based backend",
      "Real-world academic use case",
    ],
    tech: ["React", "Hono", "FastAPI", "MongoDB", "Vector Search"],
    github: "https://github.com/shreyansh-618",
  },
  {
    title: "Pokelite",
    subtitle: "Modern Pokemon Interface",
    purpose: "Frontend-heavy interactive application.",
    highlights: [
      "API integration",
      "Dynamic UI rendering",
      "Smooth animations",
      "Responsive design",
      "Component-driven architecture",
    ],
    tech: ["React", "Three.js", "PokeAPI"],
    github: "https://github.com/shreyansh-618",
  },
  {
    title: "Blogify",
    subtitle: "Full Stack Blogging Platform",
    purpose: "Production-style blogging system.",
    highlights: [
      "Authentication and authorization",
      "CRUD blog management",
      "Rich UI experience",
      "Real-world deployment structure",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shreyansh-618",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-32 isolation-isolate"
    >
      <div className="section-container relative z-20">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-8xl font-bold uppercase">
            Academic <br />
            <span className="neon-text">Projects</span>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
