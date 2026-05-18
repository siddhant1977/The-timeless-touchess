import Link from "next/link";
import styles from "./Features.module.css";

export default function Features() {
    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                {/* Left Side: Images */}
                <div className={styles.imageSide}>
                    <div className={styles.imageWrapper}>
                        {/* You can replace with actual image later */}
                        <div className={styles.placeholderImage} />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className={styles.contentSide}>
                    <div className={`${styles.floatingCard} animate-fade-up animate-delay-200`}>
                        <span className={styles.subLabel}>Uncompromising Excellence</span>
                        <h2 className={styles.title}>Why Choose Us</h2>
                        <p className={styles.subtext}>Crafting legacies, one space at a time.</p>

                        <p className={styles.desc}>
                            From the initial concept to the final flourish, our approach is rooted in an obsessive attention to detail and a deep understanding of luxury.
                        </p>
                        <p className={styles.desc}>
                            We source rare materials and collaborate with master artisans to deliver inteirors that are not just seen, but deeply felt.
                        </p>

                        <Link href="#contact" className="pillBtn">
                            <span>Let's talk</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
