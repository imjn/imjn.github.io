import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSorted3PostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/home.module.css'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>いまじん</title>
      </Head>
      <div>
        こんにちは。いまじんです。
        <Link href="/portfolios">link test</Link>
        <h2>Blog</h2>
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