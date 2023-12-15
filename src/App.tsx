import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { CreateTodo } from "./components/CreateTodo";
import { Item } from "./components/List/Item";
import { Empty } from "./components/List/Empty";
import ListHeader from "./components/List/Header";

import styles from "./App.module.css";

export interface ITask {
  id: string;
  text: string;
  isChecked: boolean;
}

export function App() {
  const storedTasks = localStorage.getItem("todos");
  const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];

  const [tasks, setTasks] = useState<ITask[]>(initialTasks);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);
  const createdTasksCount = tasks.length;

  useEffect(() => {
    updateCompletedTasksCount(initialTasks);
  });

  function handleRemoveTask(id: string) {
    const prevTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("todos", JSON.stringify(prevTasks));

    setTasks(prevTasks);
    updateCompletedTasksCount(prevTasks);
  }

  function handleToggleTask(taskInfo: { id: string; checked: boolean }) {
    const prevTasks = tasks.map((task) =>
      task.id === taskInfo.id ? { ...task, isChecked: taskInfo.checked } : task
    );
    localStorage.setItem("todos", JSON.stringify(prevTasks));

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

  function createTodo(content: string) {
    const newTodo = { id: uuidv4(), text: content, isChecked: false };
    localStorage.setItem("todos", JSON.stringify([...tasks, newTodo]));

    setTasks((prevTasks) => [...prevTasks, newTodo]);
  }

  return (
    <main className={styles.wrapper}>
      <Header />

      <section>
        <CreateTodo createTodo={createTodo} />
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
