"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import BrandLogo from './BrandLogo';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileOpen(!isMobileOpen);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logoLink} onClick={() => setIsMobileOpen(false)}>
                        <BrandLogo isScrolled={isScrolled} />
                    </Link>
                </div>

                <div className={styles.navRight}>
                    {/* Desktop Nav */}
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/#vision" className={styles.navLink}>Vision</Link>
                        <Link href="/#gallery" className={styles.navLink}>Our Works</Link>
                        <Link href="/#services" className={styles.navLink}>Services</Link>
                        <Link href="/#founder" className={styles.navLink}>About Us</Link>

                    </nav>

                    <Link href="/inquire" className={styles.inquireBtn}>
                        Enquire
                    </Link>

                    {/* Mobile Toggle */}
                    <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                        {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ''}`}>
                <nav className={styles.mobileNav}>
                    <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>Home</Link>
                    <Link href="/#vision" className={styles.mobileLink} onClick={toggleMenu}>Vision</Link>
                    <Link href="/#gallery" className={styles.mobileLink} onClick={toggleMenu}>Our Works</Link>
                    <Link href="/#services" className={styles.mobileLink} onClick={toggleMenu}>Services</Link>
                    <Link href="/#founder" className={styles.mobileLink} onClick={toggleMenu}>About Us</Link>
                    <Link href="/inquire" className={styles.mobileInquire} onClick={toggleMenu}>Enquire Now</Link>

                </nav>
            </div>
        </header>
    );
}
