import { ChangeEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import { Button } from "./Button";

import styles from "./CreateTodo.module.css";

interface CreateTodoProps {
  createTodo: (content: string) => void;
}

export const CreateTodo = ({ createTodo }: CreateTodoProps) => {
  const [content, setContent] = useState("");

  function handleCreateTodo() {
    createTodo(content);
    setContent("");
  }

  function handleContentChange(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        value={content}
        placeholder="Adicione uma nova tarefa"
        onChange={handleContentChange}
      />
      <Button
        content="Criar"
        IconComponent={PlusCircle}
        onClick={handleCreateTodo}
      />
    </div>
  );
};
