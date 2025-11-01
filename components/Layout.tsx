import Head from "next/head";
import styles from "../styles/Home.module.css";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import Link from "next/link";

const emailChars = [104, 101, 108, 108, 111, 64, 115, 104, 114, 101, 121, 97, 115, 115, 97, 110, 103, 104, 118, 105, 46, 109, 101];
const email = emailChars.map(c => String.fromCharCode(c)).join("");

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
                    <a href="/shreyas_sanghvi.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    <span className={styles.divider}>|</span>
                    <a href="/projects">Projects</a>
                </div>
            </nav>
      {children}
            <footer className={styles.footer}>
                <div>
                    <b>Phone</b><br/>
                    <span>(412)-444-5230</span>
                </div>
                <div>
                    <b>Email</b><br/>
                    <a href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>

                <div>
                    <b>Follow Me</b><br/>
                    <a href="https://www.linkedin.com/in/shreyas-sanghvi/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={styles.socialIcon}/>
                    </a>

                    <a href="https://github.com/shreyassanghvi/" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.socialIcon}/>
                    </a>
                </div>
                <div className={styles.copyrightSection}>
                    © 2025 By Shreyas Sanghvi. <br/>Powered by Next.js.
                </div>
            </footer>
        </>
    );
}
