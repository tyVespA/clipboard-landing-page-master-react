import React from "react";
import styles from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ children, style }) {
  return (
    <button className={`${styles.button} ${styles[style]}`}>{children}</button>
  );
}

export default Button;
