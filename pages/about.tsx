import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSorted3PostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/profile.module.scss'
import Date from '../components/date'

export default function about() {
  return (
    <Layout>
      <Head>
        <title>いまじん</title>
      </Head>
      <div>
        <div className={styles.profile}>
          <img className={styles.profileImage} src="/images/profile.webp" alt=""/>
          <h1>imjn</h1>
          <p>
            ソフトウェアエンジニアをしています。<br />
            趣味はフットサルとサーフィンと料理です。
          </p>
        </div>
      </div>
    </Layout>
  )
}