"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Services.module.css';
import { ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Bespoke Residential",
        description: "Crafting intimate sanctuaries that reflect your personal narrative. From penthouse suites to sprawling estates, we curate every detail to ensure your home is an extension of your legacy.",
        image: "/service-residential.png",
        link: "#residential"
    },
    {
        id: 2,
        title: "Commercial Luxe",
        description: "Redefining professional spaces with an atmosphere of success and sophistication. We design corporate headquarters and boutique offices that inspire innovation and command respect.",
        image: "/service-commercial.png",
        link: "#commercial"
    },
    {
        id: 3,
        title: "Hospitality & Leisure",
        description: "Creating unforgettable guest experiences through immersive design. Our hospitality projects blend theatricality with comfort, creating destinations that captivate the senses.",
        image: "/service-hospitality.png",
        link: "#hospitality"
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Expertise</h2>
                    <p className={styles.subtitle}>
                        We offer a comprehensive suite of design services, tailored to the unique demands of each project.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={styles.card}
                            onClick={() => window.location.hash = service.link}
                        >
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={styles.cardImage}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                                />
                            </div>
                            <div className={styles.cardOverlay}>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDesc}>{service.description}</p>
                                    <span className={styles.cardLink}>
                                        Explore Service <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
