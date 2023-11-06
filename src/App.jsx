import Header from "./components/Header";
import styles from "./App.module.css";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import Partners from "./components/Partners";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <SectionOne />
      </section>
      <section className={styles.section}>
        <SectionTwo />
      </section>
      <section className={styles.section}>
        <SectionThree />
      </section>
      <section className={styles.section}>
        <Partners />
      </section>
      <section className={styles.section}>
        <Cta />
      </section>
      <Footer />
    </>
  );
}

export default App;
