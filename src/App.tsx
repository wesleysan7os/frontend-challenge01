import { useState } from "react";

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
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, text: "Lavar louça", isChecked: false },
    { id: 2, text: "Pegar prata 2", isChecked: false },
    { id: 3, text: "Fazer a barba", isChecked: false },
  ]);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const createdTasksCount = tasks.length;

  function handleRemoveTask(id: number) {
    const prevTasks = tasks.filter((task) => task.id !== id);
    setTasks(prevTasks);
    updateCompletedTasksCount(prevTasks);
  }

  function handleToggleTask(taskInfo: { id: number; checked: boolean }) {
    const prevTasks = tasks.map((task) =>
      task.id === taskInfo.id ? { ...task, isChecked: taskInfo.checked } : task
    );
    setTasks(prevTasks);
    updateCompletedTasksCount(prevTasks);
  }

  function updateCompletedTasksCount(prevTasks: ITask[]) {
    setCompletedTasksCount(() => {
      return prevTasks.reduce((acc: number, cur: ITask) => {
        if (cur.isChecked) acc += 1;
        return acc;
      }, 0);
    });
  }

  return (
    <main className={styles.wrapper}>
      <Header />

      <section>
        <CreateTodo />
        <div className={styles.tasksList}>
          <ListHeader
            createdTasksCount={createdTasksCount}
            completedTasksCount={completedTasksCount}
          />

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
