import { Container } from '../../shared/ui/Container/Container';
import { SECTION_IDS } from '../../shared/config/constants';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'О себе', href: `#${SECTION_IDS.about}` },
  { label: 'Навыки', href: `#${SECTION_IDS.skills}` },
  { label: 'Проекты', href: `#${SECTION_IDS.projects}` },
  { label: 'Опыт', href: `#${SECTION_IDS.experience}` },
  { label: 'Контакты', href: `#${SECTION_IDS.contact}` },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a href={`#${SECTION_IDS.top}`} className={styles.logo} aria-label="На главную">
            <span className={styles.badge}>D</span>
          </a>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
