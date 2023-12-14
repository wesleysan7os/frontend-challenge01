import { Header } from "./components/Header";

import styles from "./App.module.css";
import CreateTodo from "./components/CreateTodo";
import { TodosList } from "./components/TodosList";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <CreateTodo />
        <TodosList />
      </main>
    </div>
  );
}
