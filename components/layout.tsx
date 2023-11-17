import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import profStyles from '../styles/profile.module.scss'

export default function Layout({ children }) {
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.header}>
                    <span className={styles.headerLogo}>
                        <Link href="/">
                            <img src="/images/profile.png" alt=""/>
                        </Link>
                    </span>
                </div>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <a target="_blank" href="https://x.com/mrimjn">@mrimjn</a>
            </footer>
        </>
    )
}