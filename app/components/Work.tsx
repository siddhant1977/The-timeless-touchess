"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Work.module.css";
import { X } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Residential",
        image: "/work_penthouse.png",
        description: "Sky-high sanctuaries offering panoramic views and bespoke modern luxury.",
        gallery: [

            "/residential.png"
        ]
    },
    {
        id: 2,
        title: "Commercial",
        image: "/commercial/comm2.jpg",
        description: "Bespoke corporate office spaces, reception lounges, and collaborative work environments crafted for performance and elegance.",
        gallery: [
            "/commercial/comm1.jpg",
            "/commercial/comm2.jpg",
            "/commercial/comm3.jpg",
            "/commercial/comm4.jpg",
            "/commercial/comm5.jpg",
            "/office_commercial.png"
        ]
    },
    {
        id: 3,
        title: "Bespoke Furniture",
        image: "/work_commercial.png",
        description: "Statement spaces for hospitality and retail that define brand prestige.",
        gallery: [
            "/fur1.png",
            "/fur2.png",
            "/fur3.png",
            "/fur4.png",
            "/fur5.png",
            "/fur6.png"
        ]
    }
];

export default function Work() {
    const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

    return (
        <section className={styles.section} id="work">
            <div className={styles.header}>
                <span className={`${styles.label} animate-fade-up`}>Portfolio</span>
                <h2 className={`${styles.heading} animate-fade-up animate-delay-100`}>
                    Selected <span className={styles.goldText}>Works</span>
                </h2>
            </div>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`${styles.card} animate-fade-up`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => setActiveProject(project)}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className={styles.overlay}>
                                <span className={styles.viewText}>View Project</span>
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{project.title}</h3>
                            <p className={styles.cardDesc}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Subpart Modal / Detailed View */}
            {activeProject && (
                <div className={styles.modalOverlay} onClick={() => setActiveProject(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setActiveProject(null)}>
                            <X size={32} />
                        </button>

                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>{activeProject.title}</h2>
                            <p className={styles.modalDesc}>{activeProject.description}</p>
                        </div>

                        <div className={styles.galleryGrid}>
                            {activeProject.gallery.map((img, i) => (
                                <div key={i} className={styles.galleryItem}>
                                    <Image
                                        src={img}
                                        alt={`${activeProject.title} ${i + 1}`}
                                        fill
                                        className={styles.galleryImage}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
