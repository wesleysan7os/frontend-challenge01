import { PlusCircle } from "@phosphor-icons/react";

import { Button } from "./Button";

import styles from "./CreateTodo.module.css";

const CreateTodo = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <Button content="Criar" IconComponent={PlusCircle} />
    </div>
  );
};

export default CreateTodo;
