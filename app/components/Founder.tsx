import Image from "next/image";
import styles from "./Founder.module.css";

export default function Founder() {
    return (
        <section className={styles.section} id="founder">
            {/* Corner decorations */}
            <div className={`${styles.cornerDecor} ${styles.cornerDecorTL}`} />
            <div className={`${styles.cornerDecor} ${styles.cornerDecorTR}`} />
            <div className={`${styles.cornerDecor} ${styles.cornerDecorBL}`} />
            <div className={`${styles.cornerDecor} ${styles.cornerDecorBR}`} />

            <div className={styles.sectionInner}>

                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.headerLine} />
                    <span className={styles.headerLabel}>The Visionaries</span>
                    <div className={styles.headerLineRight} />
                </div>

                <h2 className={`${styles.title} animate-fade-up`}>
                    The Minds <span className={styles.gold}>Behind</span> The Magic
                </h2>

                <p className={`${styles.subtitle} animate-fade-up`}>
                    Two creative souls united by a singular passion — transforming spaces into timeless sanctuaries of uncompromising elegance.
                </p>

                {/* Founders Grid */}
                <div className={styles.foundersGrid}>

                    {/* Founder 1 — Shubham */}
                    <div className={`${styles.founderCard} animate-fade-up`}>
                        <div className={styles.photoFrame}>
                            <Image
                                src="/shubham.jpg"
                                alt="Shubham Aggarwal — Founder & Principal Designer"
                                fill
                                className={styles.photo}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className={styles.photoOverlay} />
                            <span className={styles.cardNumber}>01</span>
                            <div className={styles.cardContent}>
                                <div className={styles.cardAccent} />
                                <h3 className={styles.founderName}>Shubham Aggarwal</h3>
                                <p className={styles.founderRole}>Founder &amp; Principal Designer</p>
                            </div>
                        </div>
                    </div>

                    {/* Founder 2 — Khushi */}
                    <div className={`${styles.founderCard} animate-fade-up animate-delay-200`}>
                        <div className={styles.photoFrame}>
                            <Image
                                src="/kushi.jpg"
                                alt="Khushi Juneja — Co-Founder & Creative Head"
                                fill
                                className={styles.photo}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className={styles.photoOverlay} />
                            <span className={styles.cardNumber}>02</span>
                            <div className={styles.cardContent}>
                                <div className={styles.cardAccent} />
                                <h3 className={styles.founderName}>Khushi Juneja</h3>
                                <p className={styles.founderRole}>Co-Founder &amp; Creative Head</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Philosophy Quote */}
                <div className={`${styles.philosophy} animate-fade-up`}>
                    <span className={styles.quoteIconLeft}>&ldquo;</span>
                    <blockquote className={styles.quote}>
                        True luxury is not just about aesthetics; it is about the feeling of arrival.
                        Our philosophy is rooted in creating spaces that are as timeless as they are personal —
                        sanctuaries where every detail tells a story of uncompromising excellence.
                    </blockquote>
                    <span className={styles.quoteIconRight}>&rdquo;</span>
                    <div className={styles.philoDivider} />
                    <div className={styles.signature}>Shubham &amp; Khushi</div>
                </div>

            </div>
        </section>
    );
}
