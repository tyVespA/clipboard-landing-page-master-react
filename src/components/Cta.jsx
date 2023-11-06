import React from "react";
import styles from "../styles/Cta.module.css";
import Button from "./Button";

function Cta() {
  return (
    <>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <div className={styles.cta}>
        <Button style="variantOne">Download for iOS</Button>
        <Button style="variantTwo">Download for Mac</Button>
      </div>
    </>
  );
}

export default Cta;
