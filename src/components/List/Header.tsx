import styles from "./Header.module.css";

interface HeaderProps {
  createdTasksCount: number;
  completedTasksCount: number;
}

export const Header = ({
  createdTasksCount,
  completedTasksCount,
}: HeaderProps) => {
  return (
    <header className={styles.container}>
      <aside>
        <p className={styles.created}>Tarefas Criadas</p>
        <span className={styles.count}>{createdTasksCount}</span>
      </aside>
      <aside>
        <p className={styles.completed}>Concluídas</p>
        {createdTasksCount > 0 ? (
          <span className={styles.count}>
            {completedTasksCount} de {createdTasksCount}
          </span>
        ) : (
          <span className={styles.count}>0</span>
        )}
      </aside>
    </header>
  );
};

export default Header;
