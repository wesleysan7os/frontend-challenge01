import { ButtonHTMLAttributes } from "react";
import { Icon } from "@phosphor-icons/react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  IconComponent?: Icon;
  backgroundColor?: string;
}

export const Button = ({ content, IconComponent, ...props }: ButtonProps) => {
  return (
    <button title="add todo" className={styles.btn} {...props}>
      <span className={styles.content}>{content}</span>
      {IconComponent && <IconComponent size={20} />}
    </button>
  );
};
