"use client";
import { useState } from 'react';
import styles from './page.module.css';
import { Instagram, Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

export default function Inquire() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [projectType, setProjectType] = useState('');
    const [vision, setVision] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const message = `Hello The Timeless Touches,

I would like to inquire about your bespoke design services. Here are my details:

• Name: ${name}
• Email: ${email}
• Contact Number: ${phone}
• Project Type: ${projectType}
• Design Vision: ${vision}

Looking forward to connecting with the studio!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919278500500?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className={styles.section} id="enquire">
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
                        <span className={styles.label}>PRINCIPAL DESIGNERS</span>
                        <h3 className={styles.name}>Shubham Aggarwal</h3>
                        <h3 className={styles.name} style={{ marginTop: '0.25rem' }}>Kushi Juneja</h3>
                    </div>

                    <div className={styles.contactBlock}>
                        <span className={styles.label}>THE ATELIER</span>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=61-A/3,+G/F,+Bhagwan+Nagar,+Ashram,+New+Delhi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <div className={styles.iconRow}>
                                <MapPin size={20} className={styles.icon} />
                                <p className={styles.address}>
                                    61- A/3, G/F, Bhagwan Nagar,<br />
                                    Ashram, Bala Sahib Gurudwara Road,<br />
                                    New Delhi - 110014
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className={styles.contactBlock}>
                        <span className={styles.label}>DIRECT LINE</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="tel:+919278500500" className={styles.link}>
                                <div className={styles.iconRow}>
                                    <Phone size={20} className={styles.icon} />
                                    <p className={styles.phone}>+91 9278500500</p>
                                </div>
                            </a>
                            <a href="tel:+917982977314" className={styles.link}>
                                <div className={styles.iconRow}>
                                    <Phone size={20} className={styles.icon} />
                                    <p className={styles.phone}>+91 7982977314</p>
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className={styles.contactBlock}>
                        <span className={styles.label}>SOCIALS</span>
                        <div className={styles.socialRow}>
                            <a href="mailto:contact@thetimelesstouches.com" className={styles.socialLink} aria-label="Email">
                                <Mail size={24} />
                            </a>
                            <a href="https://www.instagram.com/thetimelesstouches/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="https://wa.me/919278500500" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className={`${styles.formSide} animate-fade-up animate-delay-200`}>
                    <h2 className={styles.formHeading}>
                        JOIN <span className={styles.italicGold}>US</span>
                    </h2>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label>YOUR NAME</label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>

                        <div className={styles.field}>
                            <label>EMAIL ADDRESS</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>

                        <div className={styles.field}>
                            <label>CONTACT NUMBER</label>
                            <input 
                                type="tel" 
                                placeholder="+91 ..." 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required 
                            />
                        </div>

                        <div className={styles.field}>
                            <label>PROJECT TYPE (E.G., VILLA, PENTHOUSE)</label>
                            <input 
                                type="text" 
                                placeholder="Luxury Villa" 
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                required 
                            />
                        </div>

                        <div className={styles.field}>
                            <label>YOUR VISION</label>
                            <textarea 
                                rows={4} 
                                placeholder="Tell us about your dream space..."
                                value={vision}
                                onChange={(e) => setVision(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>ENQUIRE</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
