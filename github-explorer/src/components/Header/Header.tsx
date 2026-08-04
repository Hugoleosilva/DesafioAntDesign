import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>GitHub Explorer</h1>

      <p className={styles.description}>
        Pesquise os repositórios públicos de qualquer usuário do GitHub.
      </p>
    </header>
  );
}