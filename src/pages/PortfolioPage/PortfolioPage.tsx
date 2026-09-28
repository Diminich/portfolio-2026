import { Header } from '../../widgets/Header/Header';
import { Hero } from '../../widgets/Hero/Hero';
import { About } from '../../widgets/About/About';
import { Skills } from '../../widgets/Skills/Skills';
import { Projects } from '../../widgets/Projects/Projects';
import { Experience } from '../../widgets/Experience/Experience';
import { CTA } from '../../widgets/CTA/CTA';
import { Footer } from '../../widgets/Footer/Footer';
import styles from './PortfolioPage.module.scss';

export function PortfolioPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
