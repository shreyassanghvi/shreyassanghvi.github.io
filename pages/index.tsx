import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <main
        style={{
          minHeight: "calc(100vh - 180px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "64px",
            width: "100%",
            maxWidth: "1100px",
            padding: "0 30px"
          }}
        >
          {/* LEFT: LARGE Photo */}
          <img
            src="/profile.jpg"
            alt="Shreyas Sanghvi Profile"
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 32px rgba(60,60,60,0.12)",
              background: "#e9e9e9"
            }}
          />
          {/* RIGHT: Hero Text and Buttons */}
          <div style={{ textAlign: "left", maxWidth: "510px", width: "100%" }}>
            <h1 style={{ fontSize: "60px", fontWeight: 700, margin: "0 0 14px 0" }}>
              Hello
            </h1>
            <p style={{ fontSize: "22px", fontWeight: 600, margin: 0 }}>A Bit About Me</p>
            <p
              style={{
                color: "#474747",
                fontSize: "17px",
                margin: "14px 0 26px 0"
              }}
            >
              I’m a graduate student in biomedical engineering focused on medical imaging, machine learning applications, and hardware development, particularly with force sensors and DAQ systems.
              I enjoy research in ophthalmology imaging and developing innovative hardware-software integrations.
              <br />Here you can explore my work, projects, and get in touch.
            </p>
            <div style={{ display: "flex", gap: "32px", marginTop: 20 }}>
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
        </div>
      </main>
    </Layout>
  );
}
