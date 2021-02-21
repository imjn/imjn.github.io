import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/profile.module.scss'

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
          imajin(imjn,いまじん)
          <h3>職業</h3>
          <p>ソフトウェアエンジニア(21卒)</p>
          <h3>出身</h3>
          <p>鵠沼海岸</p>
          <h3>生まれ</h3>
          <p>199x年</p>
          <h3>職歴(アルバイト)</h3>
          <ul>
            <li>Cookpad, Inc</li>
            <li>Wantedly, Inc</li>
            <li>STELLA, Inc</li>
            <li>TRAICY Japan, Inc</li>
            <li>and more...</li>
          </ul>
          <h3>大学</h3>
          <p>東京外国語大学フランス語専攻</p>
          <h3>各種アカウント</h3>
          <ul>
            <li>Twitter <a target="_blank" href="https://twitter.com/mrimjn">@mrimjn</a></li>
            <li>Instagram <a target="_blank" href="https://instagram.com/mrimjn">@mrimjn (オープン)</a></li>
            <li>Instagram <a target="_blank" href="https://instagram.com/nowperson">@nowperson (友だち用)</a></li>
            <li>GitHub <a target="_blank"href="https://github.com/imjn">@imjn</a></li>
            <li>Clubhouse @mrimjn</li>
          </ul>
          <h3>ヒト語</h3>
          <ul>
            <li>日本語</li>
            <li>English</li>
            <li>français</li>
          </ul>
          <h3>コンピュータ語</h3>
          <ul>
            <li>Swift</li>
            <li>PHP</li>
            <li>JavaScript</li>
          </ul>
          
        </div>
      </div>
    </Layout>
  )
}