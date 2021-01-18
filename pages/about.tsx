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
        <title>自己紹介 | imjn</title>
      </Head>
      <div>
        <div className={styles.profile}>
          <img className={styles.profileImage} src="/images/profile.webp" alt=""/>
          <h1>プロフィール</h1>
        </div>
        <div className={styles.aboutContainer}>
          <h3>名前</h3>
          いまじん(imjn,imajin)
          <h3>職業</h3>
          <p>ソフトウェアエンジニア</p>
          <h3>出身</h3>
          <p>鵠沼海岸</p>
          <h3>生まれ</h3>
          <p>199x年</p>
          <h3>職歴</h3>
          <ul>
            <li>Cookpad, Inc</li>
            <li>Wantedly, Inc</li>
            <li>STELLA, Inc</li>
            <li>TRAICY Japan, Inc</li>
          </ul>
          <h3>大学</h3>
          <p>東京外国語大学フランス語専攻</p>
          <h3>各種アカウント</h3>
          <ul>
            <li>Twitter <a target="_blank" href="https://twitter.com/mrimjn">@mrimjn</a></li>
            <li>Instagram <a target="_blank" href="https://instagram.com/mrimjn">@mrimjn (オープン)</a></li>
            <li>Instagram <a target="_blank" href="https://instagram.com/nowperson">@nowperson (友だち用)</a></li>
            <li>GitHub <a target="_blank"href="https://github.com/imjn">@imjn</a></li>
            <li>Scrapbox <a target="_blank" href="https://scrapbox.io/imjn">@imjn</a></li>
          </ul>
          <h3>ヒト語</h3>
          <ul>
            <li>日本語 (いちばんできる)</li>
            <li>English (にばんめにできる)</li>
            <li>français (さんばんめにできる)</li>
          </ul>
          <h3>コンピュータ語</h3>
          <ul>
            <li>Swift (いちばんできる)</li>
            <li>PHP (にばんめにできる)</li>
            <li>JavaScript (さんばんめにできる)</li>
          </ul>
          
        </div>
      </div>
    </Layout>
  )
}