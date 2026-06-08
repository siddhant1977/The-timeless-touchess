import styles from './Stats.module.css';
import { Award, ShieldCheck, FileText, Coffee } from 'lucide-react';

const stats = [
    { icon: Award, title: "Expert since 2021", sub: "In Interior Services" },
    { icon: ShieldCheck, title: "Guaranteed product", sub: "With Client Satisfaction" },
    { icon: FileText, title: "Study & advice", sub: "Personalized" },
    { icon: Coffee, title: "Free estimate", sub: "In 24 hour" },
];

export default function Stats() {
    return (
        <section className={styles.stats}>
            <h2 className={styles.title}>Our Assets</h2>
            <div className={styles.grid}>
                {stats.map((s, i) => (
                    <div key={i} className={styles.item}>
                        <s.icon size={40} strokeWidth={1} className={styles.icon} />
                        <div className={styles.text}>
                            <h3>{s.title}</h3>
                            <p>{s.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
