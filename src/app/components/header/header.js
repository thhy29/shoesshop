import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </nav>

      <div className={styles.logo}>NEXT.js</div>
    </div>
  );
}