import styles from "./page.module.css";
import Hero from "./components/Hero";
import Vision from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import Founder from "./components/Founder";
import Work from "./components/Work";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Vision />
      <Services />
      <Stats />
      <Gallery />
      <Work />
      <Founder />
    </main>
  );
}
