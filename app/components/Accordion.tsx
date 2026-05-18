'use client';

import { useState } from 'react';
import styles from './Accordion.module.css';
import { Plus, Minus } from 'lucide-react';

const questions = [
    {
        question: "Do you offer international shipping for materials?",
        answer: "Yes, we ship our exclusive stone and materials globally, ensuring your project meets our standards no matter the location."
    },
    {
        question: "Is the 25-year warranty transferable?",
        answer: "Absolutely. Our warranty is tied to the installation, adding immense value to your property should you choose to sell."
    },
    {
        question: "How long does a typical project take?",
        answer: "Depending on the scope, a complete transformation typically spans 8-12 weeks from design approval to final handover."
    }
];

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Common Questions</h2>
                <div className={styles.list}>
                    {questions.map((q, i) => (
                        <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
                            <button className={styles.trigger} onClick={() => toggle(i)}>
                                <span>{q.question}</span>
                                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            <div className={styles.content}>
                                <p>{q.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
