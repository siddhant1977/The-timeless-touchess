import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                {/* Left Side: Info */}
                <div className={`${styles.infoSide} animate-fade-up`}>
                    <h2 className={styles.heading}>
                        CONNECT WITH <br />
                        <span className={styles.italicGold}>THE STUDIO</span>
                    </h2>

                    <p className={styles.subtext}>
                        Ready to elevate your living experience? Reach out to us for a bespoke consultation.
                    </p>

                    <div className={styles.contactBlock}>
                        <span className={styles.label}>PRINCIPAL DESIGNER</span>
                        <h3 className={styles.name}>Shubham Aggarwal</h3>
                    </div>

                    <div className={styles.contactBlock}>
                        <span className={styles.label}>THE ATELIER</span>
                        <p className={styles.address}>
                            61- A/3, G/F, Bhagwan Nagar,<br />
                            Ashram, Bala Sahib Gurudwara Road,<br />
                            New Delhi - 110014
                        </p>
                    </div>

                    <div className={styles.contactBlock}>
                        <span className={styles.label}>DIRECT LINE</span>
                        <p className={styles.phone}>+91 9278500500</p>
                        <p className={styles.phone}>+917982977314 </p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className={styles.formSide}>
                    <h2 className={styles.formHeading}>
                        JOIN <span className={styles.italicGold}>US</span>
                    </h2>

                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label>YOUR NAME</label>
                            <input type="text" />
                        </div>

                        <div className={styles.field}>
                            <label>EMAIL ADDRESS</label>
                            <input type="email" />
                        </div>

                        <div className={styles.field}>
                            <label>CONTACT NUMBER</label>
                            <input type="tel" />
                        </div>

                        <div className={styles.field}>
                            <label>PROJECT TYPE (E.G., VILLA, PENTHOUSE)</label>
                            <input type="text" />
                        </div>

                        <div className={styles.field}>
                            <label>YOUR VISION</label>
                            <textarea rows={4}></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>INQUIRE</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
