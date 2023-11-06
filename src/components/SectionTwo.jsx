import React from "react";
import Devices from "../assets/images/image-devices.png";
import styles from "../styles/SectionTwo.module.css";

function SectionTwo() {
  return (
    <>
      <h2>Access Clipboard anywhere</h2>
      <p>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img src={Devices} alt="Devices" className={styles.sectionTwoImg} />
    </>
  );
}

export default SectionTwo;
