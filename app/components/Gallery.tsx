import Image from 'next/image';
import styles from './Gallery.module.css';

const images = [
    { src: '/residential/res8.jpg', alt: 'Grand Living Lounge & Wave Accent Wall' },
    { src: '/residential/res10.jpg', alt: 'Master Bedroom Suite' },
    { src: '/residential/res9.jpg', alt: 'Outdoor Terrace Lounge Suite' },
    { src: '/residential/res4.jpg', alt: 'Marble Coffee Table & Sculptures' },
    { src: '/commercial/comm1.jpg', alt: 'Luxury Office Reception' },
    { src: '/commercial/comm2.jpg', alt: 'Modern Open Workstation Space' },
    { src: '/gallery-1.png', alt: 'Stone Kitchen Detail' },
    { src: '/gallery-2.png', alt: 'Modern Living Room' },
];

export default function Gallery() {
    return (
        <section className={styles.gallery} id="gallery">
            <div className={styles.header}>
                <h2>Our Masterpieces</h2>
                <p>A glimpse into the homes we've transformed.</p>
            </div>

            <div className={styles.scrollContainer}>
                {images.map((img, index) => (
                    <div key={index} className={styles.imageCard}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className={styles.overlay}>
                            <span>{img.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
