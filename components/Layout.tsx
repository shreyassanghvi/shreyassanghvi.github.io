import Head from "next/head";
import styles from "../styles/Layout.module.css";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import Link from "next/link";

const email = "hello@shreyassanghvi.me";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Hello | Shreyas Sanghvi</title>
                <meta name="description"
                      content="Graduate student in medical imaging, hardware, and machine learning."/>
            </Head>
            <nav className={styles.topNav}>
                <Link href="/" className={styles.logo} aria-label="Home">
                    <span className={styles.dot}/>
                    Shreyas Sanghvi
                </Link>
                <div className={styles.navLinks}>
                    <a href={`/shreyas_sanghvi.pdf`} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                    <span className={styles.divider}>|</span>
                    <Link href="/projects">
                        Projects
                    </Link>
                </div>
            </nav>

            <div className={styles.contentWrapper}>
                {children}
            </div>

            <footer className={styles.footer}>
                <div>
                    <b>Email</b><br/>
                    <a href={`mailto:${email}`} aria-label={`Send email to ${email}`}>
                        {email}
                    </a>
                </div>

                <div>
                    <b>Follow Me</b><br/>
                    <a
                        href="https://www.linkedin.com/in/shreyas-sanghvi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile (opens in new tab)"
                    >
                        <FaLinkedin className={styles.socialIcon} aria-hidden="true"/>
                    </a>

                    <a
                        href="https://github.com/shreyassanghvi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile (opens in new tab)"
                    >
                        <FaGithub className={styles.socialIcon} aria-hidden="true"/>
                    </a>
                </div>
                <div className={styles.copyrightSection}>
                    © 2025 By Shreyas Sanghvi. <br/>Powered by Next.js.
                </div>
            </footer>
        </>
    );
}
