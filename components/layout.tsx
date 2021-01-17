import styles from '../styles/layout.module.css'
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
                copyright imjn
            </footer>
        </>
    )
}