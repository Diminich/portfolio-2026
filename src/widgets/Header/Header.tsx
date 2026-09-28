import { Container } from '../../shared/ui/Container/Container';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'О себе', href: '#about' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Контакты', href: '#contact' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <a href="#top" className={styles.logo}>
            A
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
