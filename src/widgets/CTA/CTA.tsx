import { Container } from '../../shared/ui/Container/Container';
import { Button } from '../../shared/ui/Button/Button';
import styles from './CTA.module.scss';

export function CTA() {
  return (
    <section id="contact" className={styles.cta}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Давай работать вместе</h2>
          <p className={styles.subtitle}>
            Открыт для новых проектов и интересных предложений
          </p>
          <Button href="mailto:hello@example.com">Написать мне</Button>
        </div>
      </Container>
    </section>
  );
}
