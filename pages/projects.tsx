"use client";

import Head from "next/head";
import Layout from "@/components/Layout";
import styles from "@/styles/Projects.module.css";
import projectsData from "@/data/projects.json";
import Image from "next/image";

/**
 * Project Interface
 *
 * Available status options (optional field):
 * - "active"        - Blue badge - Live/deployed and actively maintained
 * - "in-progress"   - Yellow badge - Currently working on it
 * - "archived"      - Gray badge - No longer maintained
 * - "experimental"  - Purple badge - Prototype/testing phase
 *
 * If status is omitted, no badge will be displayed.
 */
interface Project {
    title: string;
    description: string;
    technologies: string[];
    status?: "active" | "in-progress" | "archived" | "experimental";
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

const projects: Project[] = projectsData as Project[];

function ProjectCard({ project }: { project: Project }) {
    const getStatusLabel = (status?: string) => {
        switch (status) {
            case "active": return "Active";
            case "in-progress": return "In Progress";
            case "archived": return "Archived";
            case "experimental": return "Experimental";
            default: return null;
        }
    };

    return (
        <div className={styles.projectCard}>
            <Image
                src={project.imageUrl || "/project/default-project-banner.svg"}
                alt={project.title}
                width={400}
                height={200}
                className={styles.projectImage}
            />
            <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.status && (
                    <span className={`${styles.statusBadge} ${styles[`status-${project.status}`]}`}>
                        {getStatusLabel(project.status)}
                    </span>
                )}
            </div>
            <p className={styles.projectDescription}>
                {project.description}
            </p>
            <div className={styles.technologiesContainer}>
                {project.technologies.map((tech) => (
                    <span key={tech} className={styles.technologyTag}>
                        {tech}
                    </span>
                ))}
            </div>
            <div className={styles.linksContainer}>
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                    >
                        GitHub →
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
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
            <main className={styles.main}>
                <h1 className={styles.title}>
                    My Projects
                </h1>
                {projects.length === 0 ? (
                    <p className={styles.emptyState}>
                        No projects yet. Add some to the projects array!
                    </p>
                ) : (
                    <div className={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                )}
            </main>
        </Layout>
    );
}
