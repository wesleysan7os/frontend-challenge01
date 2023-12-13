import styles from "./Header.module.css";
import { Rocket } from "./Rocket";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Rocket />
      <div className={styles.todo}>
        <span>todo</span>
      </div>
    </header>
  );
};
