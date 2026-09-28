import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`${styles.title} ${className}`.trim()}>
      {children}
    </h2>
  );
}
