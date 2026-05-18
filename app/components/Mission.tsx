import styles from './Mission.module.css';

export default function Mission() {
    return (
        <section className={styles.mission} id="mission">
            <div className={styles.container}>
                <h2 className={styles.heading}>The Philosophy of Timelessness</h2>
                <p className={styles.text}>
                    We believe that true luxury is not just about aesthetics, but about creating environments that nurture the soul.
                    Our designs are curated to stand the test of time, blending modern innovation with classical elegance to create
                    spaces that feel eternally relevant.
                </p>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.number}>25+</span>
                        <span className={styles.label}>Years Warranty</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.number}>100%</span>
                        <span className={styles.label}>Sustainable Materials</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.number}>500+</span>
                        <span className={styles.label}>Homes Transformed</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
