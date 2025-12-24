import Layout from "@/components/Layout";
import styles from "@/styles/Index.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    return (
        <Layout>
            <main className={styles.main}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.hero}
                >
                    {/* Photo on top in mobile, left on desktop */}
                    <Image
                        src="/profile.jpg"
                        alt="Shreyas Sanghvi Profile"
                        width={450}
                        height={450}
                        className={styles.profileImg}
                        priority
                    />
                    {/* Text and buttons */}
                    <div className={styles.heroText}>
                        <h1 className={styles.hello}>Hello</h1>
                        <p className={styles.aboutTitle}>A Bit About Me</p>
                        <p className={styles.aboutText}>
                            I'm a Biomedical Engineer bridging robotics, machine learning, and medical innovation. From building cable-driven robots for cardiac interventions to developing AI algorithms for ophthalmology diagnostics, I thrive at the intersection of hardware and intelligent systems. Currently exploring sim-to-real robotics and medical device development.
                            <br/>
                            <br/>
                            Here you can explore my work, projects, and get in touch.
                        </p>
                        <div className={styles.buttonGroup}>
                            <a
                                href={`${basePath}/shreyas_sanghvi.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.circleButton} ${styles.resumeBtn}`}
                                aria-label="View my resume (opens in new tab)"
                            >
                                Resume
                            </a>
                            <a
                                href="/projects"
                                className={`${styles.circleButton} ${styles.projectsBtn}`}
                                aria-label="View my projects"
                            >
                                Projects
                            </a>
                        </div>
                    </div>
                </motion.div>
            </main>
        </Layout>
    );
}
