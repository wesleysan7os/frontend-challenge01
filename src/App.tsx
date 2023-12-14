// import { useState } from "react";

import { Header } from "./components/Header";
import { CreateTodo } from "./components/CreateTodo";
import ListHeader from "./components/List/Header";
import { Item } from "./components/List/Item";
import { Empty } from "./components/List/Empty";

import styles from "./App.module.css";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  // const [tasks, setTasks] = useState<ITask[]>([]);
  const tasks = [
    { id: 1, text: "Lavar louça", isChecked: false },
    { id: 2, text: "Pegar prata 2", isChecked: true },
    { id: 3, text: "Fazer a barba", isChecked: true },
  ];

  function handleRemoveTask() {}
  function handleToggleTask() {}

  return (
    <main className={styles.wrapper}>
      <Header />

      <section>
        <CreateTodo />
        <div className={styles.tasksList}>
          <ListHeader />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
