import styles from "../styles/Header.module.css";
import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
    </header>
  );
}

export default Header;
