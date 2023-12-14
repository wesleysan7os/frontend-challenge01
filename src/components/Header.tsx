import styles from "./Header.module.css";
import { Rocket } from "./RocketLogo";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Rocket />
      <div className={styles.todo}>
        <span>toDo</span>
      </div>
    </header>
  );
};
