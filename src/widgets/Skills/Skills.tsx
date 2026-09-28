import { Container } from '../../shared/ui/Container/Container';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import { Tag } from '../../shared/ui/Tag/Tag';
import { SECTION_IDS } from '../../shared/config/constants';
import styles from './Skills.module.scss';

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'Prisma'],
  },
  {
    title: 'Инструменты',
    items: ['Git', 'Jest', 'ESLint', 'Figma', 'Docker'],
  },
  {
    title: 'AI ассистенты',
    note: 'использую с проверкой',
    items: ['Cursor', 'GitHub Copilot'],
  },
];

export function Skills() {
  return (
    <section id={SECTION_IDS.skills} className={styles.skills}>
      <Container>
        <SectionTitle>Навыки</SectionTitle>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.title} className={styles.card}>
              <div className={styles.heading}>
                <h3 className={styles.title}>{skill.title}</h3>
                {skill.note && <p className={styles.note}>{skill.note}</p>}
              </div>
              <div className={styles.tags}>
                {skill.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
