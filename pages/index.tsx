import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSorted3PostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/profile.module.css'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>imjn | Portfolio & Blog</title>
      </Head>
      <div>
        <div className={styles.profile}>
          <img className={styles.profileImage} src="/images/profile.jpg" alt=""/>
          <h1>imjn</h1>
          <p>
            ソフトウェアエンジニアをしています。<br />
            趣味はフットサルとサーフィンと料理です。
          </p>
          <Link href="/about">
            <button className="button">More about me</button>
          </Link>
        </div>
        
        <h2>Blog posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <Link href="/posts">
            <button className="button">More posts</button>
          </Link>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSorted3PostsData()
  return {
    props: {
      allPostsData
    }
  }
}