import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSorted3PostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import profStyles from '../styles/profile.module.scss'
import styles from '../styles/home.module.scss'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>imjn | Portfolio & Blog</title>
      </Head>
      <div>
        <div className={profStyles.profile}>
          <img className={profStyles.profileImage} src="/images/profile-2.webp" alt=""/>
          <h1 className={profStyles.title}>いまじん</h1>
          <p>
            東京でソフトウェアエンジニアをしています。
          </p>
          <div className={profStyles.socialIconsContainer}>
            <a target="_blank" href="https://twitter.com/mrimjn"><img src="/icons/twitter.svg" alt=""/></a>
            <a target="_blank" href="https://scrapbox.io/imjn"><img src="/icons/scrapbox.png" alt=""/></a>
          </div>
          <Link href="/about">
            <button className="button">More about me</button>
          </Link>
        </div>
        
        <h2 className={styles.heading}>Blog posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{ title}</a>
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

        <h2 className={`${styles.heading} ${styles.headingPortfolio}`}>Portfolios</h2>
        <span className={`${utilStyles.lightText} ${styles.subHeading}`}>制作物の紹介です</span>
        <img className={styles.portfolioImage} src="/icons/nishikigoi.webp" alt=""/>
        <h3>
          ニシキゴイ
        </h3>
        <p>ニシキゴイは写真俳句のSNSアプリです。これまでに70000句以上の投句がされています。初めてつくったアプリでした。</p>
        <a target="_blank" href="https://apps.apple.com/jp/app/%E3%83%8B%E3%82%B7%E3%82%AD%E3%82%B4%E3%82%A4-%E4%BF%B3%E5%8F%A5%E3%81%A8%E5%86%99%E7%9C%9F%E3%81%AEsns/id1321285792?itsct=apps_box&itscg=30200">
          AppStoreでみる
        </a>
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