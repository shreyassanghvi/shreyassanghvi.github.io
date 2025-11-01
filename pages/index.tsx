import Layout from "@/components/Layout";
import styles from "../styles/Index.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {
    const router = useRouter();

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
                    <img
                        src="/profile.jpg"
                        alt="Shreyas Sanghvi Profile"
                        className={styles.profileImg}
                    />
                    {/* Text and buttons */}
                    <div className={styles.heroText}>
                        <h1 className={styles.hello}>Hello</h1>
                        <p className={styles.aboutTitle}>A Bit About Me</p>
                        <p className={styles.aboutText}>
                            I’m a graduate student in biomedical engineering focused on medical imaging, machine learning applications, and hardware development, particularly with
                            force sensors and DAQ systems. I enjoy research in ophthalmology imaging and developing innovative hardware-software integrations.
                            <br />
                            Here you can explore my work, projects, and get in touch.
                        </p>
                        <div className={styles.buttonGroup}>
                            <button
                                className={`${styles.circleButton} ${styles.resumeBtn}`}
                                onClick={() => window.open("/Shreyas_Sanghvi.pdf", "_blank")}
                            >
                                Resume
                            </button>
                            <button
                                className={`${styles.circleButton} ${styles.projectsBtn}`}
                                onClick={() => router.push("/projects")}
                            >
                                Projects
                            </button>
                        </div>
                    </div>
                </motion.div>
            </main>
        </Layout>
    );
}
