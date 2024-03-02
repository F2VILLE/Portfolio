//import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  const age = Math.floor((new Date().getTime() - new Date("2004-06-03").getTime()) / 1000 / 60 / 60 / 24 / 365.25);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.greetings}>
          <h1 className={styles.title}>Hi ! I'm <span className="gradient-text">F2Ville</span></h1>
          <p className={styles.paragraph}>I am a {age} years old Computer Science Student at ULB, and</p>
          <p className={styles.paragraph}>I like creating things !</p>
        </div>
      </main>
    </>
  );
}
