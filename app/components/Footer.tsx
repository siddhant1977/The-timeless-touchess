import styles from './Footer.module.css';
import Link from 'next/link';
import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3>The Timeless Touches</h3>
                    <p>Redefining luxury living through exceptional interior design and architectural excellence.</p>
                </div>
                <div className={styles.column}>
                    <h3>Quick Links</h3>
                    <Link href="/#vision">Our Vision</Link>
                    <Link href="/#gallery">Gallery</Link>
                    <Link href="/#services">Services</Link>
                    <Link href="/inquire">Contact</Link>
                </div>

                <div className={styles.column}>
                    <h3>Contact</h3>
                    <a href="tel:+919278500500">+91 9278500500</a>
                    <a href="mailto:info@timelesstouches.com">info@timelesstouches.com</a>
                    <div className={styles.socials}>
                        <a href="https://www.instagram.com/thetimelesstouches/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="#"><Youtube size={20} /></a>
                        <a href="#"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} The Timeless Touches. All rights reserved.</p>
            </div>
        </footer>
    );
}
