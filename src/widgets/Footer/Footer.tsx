import { Container } from '../../shared/ui/Container/Container';
import styles from './Footer.module.scss';

const links = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Telegram', href: 'https://telegram.org' },
  { label: 'Email', href: 'mailto:hello@example.com' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.text}>
            © {new Date().getFullYear()} Дмитрий. Все права защищены.
          </p>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.link}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
