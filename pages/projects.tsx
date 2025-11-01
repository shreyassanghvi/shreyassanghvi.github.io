"use client";

import Head from "next/head";
import Layout from "@/components/Layout";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects - Coming Soon</title>
                <meta name="description" content="Projects page coming soon" />
            </Head>
            <main
                style={{
                    height: "calc(100vh - 180px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#333",
                    fontSize: "2rem",
                }}
            >
                Projects page is coming soon!
            </main>
        </Layout>
    );
}
