import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  onClick,
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classNames}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
