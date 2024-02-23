import styles from './header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <h1 className={styles.logo}>{process.env.APP_TITLE}</h1>
            </Link>
            <div className={styles.menu}>
                <ul>
                    {/* <li>
                        <Link href="/" className={[styles.menuItem, styles.menuItemActive].join(" ")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/work" className={styles.menuItem}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/skills" className={styles.menuItem}>
                            Skills
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/contact" className={styles.menuItem}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}