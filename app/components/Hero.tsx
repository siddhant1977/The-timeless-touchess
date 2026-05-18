"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const images = [
    '/luxury_hero_bg_wide.png',
    '/luxury_hero_bg_2.png',
    '/hero_luxury_interior_1767776090813.png',
    '/luxury_dining_wide.png'
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`${styles.imageWrapper} ${index === currentIndex ? styles.active : ''}`}
                        style={{ opacity: index === currentIndex ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}
                    >
                        <Image
                            src={src}
                            alt={`Luxury Interior ${index + 1}`}
                            fill
                            className={styles.image}
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}

                <div className={styles.content}>
                    <h1 className={`${styles.title} animate-fade-up`}>
                        THE ART OF <span className={styles.goldText}>TIMELESS LIVING</span>
                    </h1>

                    <div className={`${styles.textBox} animate-fade-up animate-delay-200`}>
                        <p className={styles.desc}>
                            Experience the pinnacle of bespoke design. We curate living environments that transcend the ordinary, blending timeless elegance with modern sophistication.
                        </p>
                        <span className={styles.scrollHint}>Your sanctuary awaits.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
