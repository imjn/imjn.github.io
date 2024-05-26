import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import profStyles from '../styles/profile.module.scss'

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
            <footer className={styles.footer}>
                <a target="_blank" href="https://x.com/mrimjn">@mrimjn</a>
            </footer>
        </>
    )
}
