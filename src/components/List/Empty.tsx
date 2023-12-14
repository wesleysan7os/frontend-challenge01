import { Clipboard } from "../Clipboard";
import styles from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={styles.empty}>
      <Clipboard />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
