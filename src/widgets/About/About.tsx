import { Container } from '../../shared/ui/Container/Container';
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle';
import { StatCard } from '../../shared/ui/StatCard/StatCard';
import styles from './About.module.scss';

const stats = [
  { value: '1+ год', label: 'Практического опыта' },
  { value: '3+', label: 'Завершённых коммерческих проектов' },
];

export function About() {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <SectionTitle>О себе</SectionTitle>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Я создаю быстрые и отзывчивые интерфейсы с фокусом на чистую
              архитектуру и пользовательский опыт. Прохожу регулярные код-ревью
              с tech lead инженером из Google, что помогает мне поддерживать
              стандарты качества кода на уровне мировых технологических
              компаний.
            </p>
            <p className={styles.paragraph}>
              Верю, что искусственный интеллект — отличный помощник для
              автоматизации рутины, но критические узлы, производительность
              рендеринга и сложную бизнес-логику всегда проектирую и
              оптимизирую вручную.
            </p>
          </div>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
