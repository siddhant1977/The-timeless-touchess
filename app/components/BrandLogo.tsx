import Image from 'next/image';
import styles from './BrandLogo.module.css';

interface BrandLogoProps {
    isScrolled?: boolean;
}

export default function BrandLogo({ isScrolled = false }: BrandLogoProps) {
    return (
        <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
            {/* The Frame focused on the Monogram (TTT) */}
            <div className={styles.monogramFrame}>
                <div className={styles.marbledBackground}>
                    <Image
                        src="/images/logo_bg.png"
                        alt="The Timeless Touches Logo"
                        fill
                        className={styles.bgImage}
                        sizes="100px"
                        priority
                    />
                </div>
            </div>

            <div className={styles.textWrapper}>
                <h1 className={styles.brandName}>THE TIMELESS TOUCHES<sup className={styles.trademark}>&reg;</sup></h1>
            </div>
        </div>
    );
}
