import { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a
            href={`#${SECTION_IDS.top}`}
            className={styles.logo}
            aria-label="На главную"
          >
            <span className={styles.badge}>D</span>
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={isOpen}
            aria-controls="nav-links"
            aria-label="Меню"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
          <ul
            id="nav-links"
            className={isOpen ? `${styles.links} ${styles.open}` : styles.links}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  onClick={() => setIsOpen(false)}
                >
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