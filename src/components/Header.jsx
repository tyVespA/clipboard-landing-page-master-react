import styles from "../styles/Header.module.css";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <section className={styles.cta}>
        <Button style="variantOne">Download for iOS</Button>
        <Button style="variantTwo">Download for Mac</Button>
      </section>
    </header>
  );
}

export default Header;
