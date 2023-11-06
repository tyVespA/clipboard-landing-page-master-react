import React from "react";
import styles from "../styles/SectionThree.module.css";
import Blacklist from "../assets/images/icon-blacklist.svg";
import Text from "../assets/images/icon-text.svg";
import Preview from "../assets/images/icon-preview.svg";

function SectionThree() {
  return (
    <>
      <h2 style={{ fontSize: "30px" }}>Supercharge your workflow</h2>
      <p>We’ve got the tools to boost your productivity.</p>
      <section className={styles.superchargeSection}>
        <div className={styles.supercharge}>
          <div className={styles.imgContainer}>
            <img src={Blacklist} alt="" />
          </div>
          <h3>Create blacklists</h3>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className={styles.supercharge}>
          <div className={styles.imgContainer}>
            <img src={Text} alt="" />
          </div>
          <h3>Plain text snippets</h3>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className={styles.supercharge}>
          <div className={styles.imgContainer}>
            <img src={Preview} alt="" />
          </div>
          <h3>Sneak preview</h3>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </section>
    </>
  );
}

export default SectionThree;
