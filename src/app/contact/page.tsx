import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../../components/ContactForm/contactForm";

export default function Contact() {
  return (
    <>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Contact me !</h1> */}
        <div className={styles.contactArea}>
          <ContactForm />
          <div className={styles.networks}>
            <a href="https://github.com/F2Ville" target="_blank" rel="noreferrer">
              {/* <Image
                  src="/images/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                /> */}
              <p>GitHub</p>
            </a>
            <a href="https://twitter.com/f2ville_dev" target="_blank" rel="noreferrer">
              {/* <Image
                  src="/images/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                /> */}
              <p>Twitter</p>
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                /> 
              <p>LinkedIn</p>
            </a> */}
            <a href="https://discord.com/users/836685191812218970" target="_blank" rel="noreferrer">
              {/* <Image
                  src="/images/discord.svg"
                  alt="Discord"
                  width={24}
                  height={24}
                /> */}
              <p>Discord</p>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
