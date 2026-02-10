import styles from "./Project.module.css";

type Props = {
  header: React.ReactNode;
  info: React.ReactNode;
  content: React.ReactNode;
};

export default function ProjectLayout({ header, info, content }: Props) {
  return (
    <main className={styles.page}>
      {header}
      {info}
      <section className={styles.content}>{content}</section>
    </main>
  );
}
