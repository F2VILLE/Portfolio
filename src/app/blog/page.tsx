import styles from './page.module.tsx'

export default function Blog() {
  return (
   <>
      <main className={styles.main}>
        <div className={styles.greetings}>
          <h1 className={styles.title}>Hi ! I'm <span className="gradient-text">F2Ville</span></h1>
          <p>I am a {age} years old Computer Science Student at ULB, and</p>
          <p>I like creating things !</p>
        </div>
      </main>
    </> 
  )
}
