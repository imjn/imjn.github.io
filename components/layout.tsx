import styles from '../styles/layout.module.scss'
import Link from 'next/link'

export default function Layout({ children}) {
    return (
        <>
            <header className={styles.headerContainer}>
                <div className={styles.header}>
                    <span className={styles.headerLogo}>
                        <Link href="/">
                            imjn
                        </Link>
                    </span>
                </div>
            </header>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <a target="_blank" href="https://twitter.com/mrimjn">@mrimjn</a>
            </footer>
        </>
    )
}