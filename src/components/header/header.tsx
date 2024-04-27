"use client";
import styles from './header.module.css'
import Link from 'next/link'
import { useAuthStore } from '@/store/useAuthStore'


export default function Header() {
    const authenticated = useAuthStore.getState().authenticated
    const user = useAuthStore.getState().user
    console.log("Authed ", authenticated, "User ", user)

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
                    <Link href="/skills" className={styles.menuItem}>
                    Skills
                    </Link>
                </li> */}
                    <li>
                        <Link href="/work" className={styles.menuItem}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.menuItem}>
                            Contact
                        </Link>
                    </li>
                    {!authenticated && (
                        <>
                            <li>
                                <Link href="/register" className={styles.menuItem}>
                                    Register
                                </Link>
                            </li>

                            <li>
                                <Link href="/login" className={styles.menuItem}>
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                    {authenticated && user && (
                        <>
                            <li>
                                <Link href="/profile" className={styles.menuItem}>
                                    Profile ({user.username})
                                </Link>
                            </li>
                            <li>
                                <Link href="/logout" className={styles.menuItem}>
                                    Logout
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}