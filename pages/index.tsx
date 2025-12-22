import Layout from "@/components/Layout";
import styles from "../styles/Index.module.css";
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
                            I’m a graduate student in biomedical engineering focused on medical imaging, machine
                            learning applications, and hardware development, particularly with
                            force sensors and DAQ systems. I enjoy research in ophthalmology imaging and developing
                            innovative hardware-software integrations.
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
