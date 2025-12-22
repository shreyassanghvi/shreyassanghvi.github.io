"use client";

import Head from "next/head";
import Layout from "@/components/Layout";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

const projects: Project[] = [
    // Add your projects here using this template:
    {
        title: "HeartPrinter",
        description: "A Cable Driven Parallel Wire robot for epicardial interventions.  ",
        technologies: ["C/C++", "Python"],
        githubUrl: "https://github.com/shreyassanghvi/heartprinter",
        // liveUrl: "https://project-demo.com",
        imageUrl: "/images/project-screenshot.png"
    },

];

function ProjectCard({ project }: { project: Project }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1.5rem",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
            }}
        >
            {project.imageUrl && (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        marginBottom: "1rem",
                    }}
                />
            )}
            <h3 style={{ marginBottom: "0.5rem", color: "#333" }}>{project.title}</h3>
            <p style={{ color: "#666", marginBottom: "1rem", lineHeight: "1.6" }}>
                {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        style={{
                            backgroundColor: "#f0f0f0",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "12px",
                            fontSize: "0.875rem",
                            color: "#555",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#0070f3",
                            textDecoration: "none",
                            fontWeight: "500",
                        }}
                    >
                        GitHub →
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#0070f3",
                            textDecoration: "none",
                            fontWeight: "500",
                        }}
                    >
                        Live Demo →
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects - Shreyas Sanghvi</title>
                <meta name="description" content="Projects by Shreyas Sanghvi" />
            </Head>
            <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#333" }}>
                    My Projects
                </h1>
                {projects.length === 0 ? (
                    <p style={{ color: "#666", fontSize: "1.125rem" }}>
                        No projects yet. Add some to the projects array!
                    </p>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                )}
            </main>
        </Layout>
    );
}
