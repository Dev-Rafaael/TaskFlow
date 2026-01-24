import styles from "./StatsCard.module.css";

interface StatsCardProps {
  label: string;
  value: number | string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  footer?: string;
}

export default function StatsCard({
  label,
  value,
  icon,
  trend = "neutral",
  footer,
}: StatsCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className={styles.label}>{label}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </header>

      <div className={styles.valueRow}>
        <strong className={styles.value}>{value}</strong>
        <span className={`${styles.trend} ${styles[trend]}`} />
      </div>

      {footer && (
        <p className={styles.footer}>{footer}</p>
      )}
    </article>
  );
}
