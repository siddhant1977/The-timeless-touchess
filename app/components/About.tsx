import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.section} id="vision">
            <div className={styles.container}>

                {/* Eyebrow */}
                <div className={`${styles.eyebrow} animate-fade-up`}>
                    <div className={styles.eyebrowLine} />
                    <span className={styles.eyebrowText}>Our Story</span>
                    <div className={styles.eyebrowLineRight} />
                </div>

                {/* Main Heading */}
                <h2 className={`${styles.heading} animate-fade-up`}>
                    Crafting Spaces That <em className={styles.headingItalic}>Endure</em>
                </h2>

                {/* Gold Divider */}
                <div className={`${styles.divider} animate-fade-up`} />

                {/* Text Content */}
                <div className={`${styles.textBlock} animate-fade-up`}>
                    <p className={styles.body}>
                        At The Timeless Touches, we believe that a truly magnificent space is not born from trends — it is born from truth. Truth in material, truth in proportion, and truth in the story each space tells.
                    </p>
                    <p className={styles.body}>
                        Founded with an unwavering commitment to craft and an obsession with detail, we transform environments into enduring expressions of luxury, comfort, and singular individuality.
                    </p>
                </div>

                {/* Stats Row */}
                <div className={`${styles.statsRow} animate-fade-up`}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>50<em>+</em></span>
                        <span className={styles.statLabel}>Projects Delivered</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>5<em>+</em></span>
                        <span className={styles.statLabel}>Years of Excellence</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>100<em>%</em></span>
                        <span className={styles.statLabel}>Client Satisfaction</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
