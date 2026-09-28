import { Container } from '../../shared/ui/Container/Container';
import { Button } from '../../shared/ui/Button/Button';
import { MAILTO_URL, SECTION_IDS } from '../../shared/config/constants';
import styles from './CTA.module.scss';

export function CTA() {
  return (
    <section id={SECTION_IDS.contact} className={styles.cta}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Давай работать вместе</h2>
          <p className={styles.subtitle}>
            Открыт для новых проектов и интересных предложений
          </p>
          <Button href={MAILTO_URL}>Написать мне</Button>
        </div>
      </Container>
    </section>
  );
}
