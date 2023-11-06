import React from "react";
import styles from "../styles/Partners.module.css";
import Google from "../assets/images/logo-google.png";
import Ibm from "../assets/images/logo-ibm.png";
import Microsoft from "../assets/images/logo-microsoft.png";
import Hp from "../assets/images/logo-hp.png";
import Vector from "../assets/images/logo-vector-graphics.png";

function Partners() {
  return (
    <div className={styles.partnersSection}>
      <img src={Google} alt="google logo" />
      <img src={Ibm} alt="google logo" />
      <img src={Microsoft} alt="google logo" />
      <img src={Hp} alt="google logo" />
      <img src={Vector} alt="google logo" />
    </div>
  );
}

export default Partners;
