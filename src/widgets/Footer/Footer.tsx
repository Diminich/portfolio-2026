import { Container } from '../../shared/ui/Container/Container';
import { NAME, MAILTO_URL, SOCIAL_LINKS } from '../../shared/config/constants';
import styles from './Footer.module.scss';

const links = [...SOCIAL_LINKS, { label: 'Email', href: MAILTO_URL, ariaLabel: 'Email' }];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.text}>
            © {new Date().getFullYear()} {NAME}. Все права защищены.
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