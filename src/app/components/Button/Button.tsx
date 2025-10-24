import React from "react";
import styles from "./Button.module.css";

type Props = {
  title: string;
  style?: React.CSSProperties;
  className?: string;
  href?: string; 
  onClick?: () => void; 
};

export default function Button({ title, style, className, href, onClick }: Props) {
  const combinedClass = `${styles.button} ${className || ""}`;

  if (href) {
    return (
      <a href={href} style={style} className={combinedClass}> 
        {title}
      </a>
    );
  }

  return (
    <button style={style} className={combinedClass} onClick={onClick}>
      {title}
    </button>
  );
}
