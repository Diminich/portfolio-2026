import { Container } from '../../shared/ui/Container/Container';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import { experiences } from '../../entities/experience/experience';
import { SECTION_IDS } from '../../shared/config/constants';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <section id={SECTION_IDS.experience} className={styles.experience}>
      <Container>
        <SectionTitle>Опыт</SectionTitle>
        <div className={styles.list}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}