import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <aside>
        <p className={styles.created}>Tarefas Criadas</p>
        <span className={styles.count}>0</span>
      </aside>
      <aside>
        <p className={styles.completed}>Concluídas</p>
        <span className={styles.count}>0</span>
      </aside>
    </header>
  );
};

export default Header;
