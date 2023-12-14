import { Clipboard } from "./Clipboard";
import styles from "./TodosList.module.css";

export const TodosList = () => {
  return (
    <>
      <header className={styles.wrapper}>
        <div>
          <span className={styles.created}>Tarefas Criadas</span>
          <span className={styles.count}>0</span>
        </div>
        <div>
          <span className={styles.completed}>Concluídas</span>
          <span className={styles.count}>0</span>
        </div>
      </header>
      <main>
        <div className={styles.empty}>
          <Clipboard />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </>
  );
};
