import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/profile.module.scss'
import Twemoji from 'react-twemoji';

export default function about() {
  return (
    <Layout>
      <Head>
        <title>About me | imjn</title>
      </Head>
      <div>
        <div className={styles.profile}>
          <img className={styles.profileImage} src="/images/profile.webp" alt=""/>
          <h1>About me</h1>
        </div>
        <div className={styles.aboutContainer}>
          <h3>Name</h3>
          imajin(imjn,いまじん)
          <h3>Occupation</h3>
          <p><Twemoji tag="span">💻</Twemoji> Software Engineer (21 graduate)</p>
          <h3>Hometown</h3>
          <p><Twemoji tag="span">🏖</Twemoji> Kugenuma Kaigan</p>
          <h3>Born in</h3>
          <p><Twemoji tag="span">👶</Twemoji> 1997</p>
          <h3>Jobs (Including internships)</h3>
          <ul>
            <li>Cookpad, Inc</li>
            <li>Wantedly, Inc</li>
            <li>STELLA, Inc</li>
            <li>TRAICY Japan, Inc</li>
            <li>and more...</li>
          </ul>
          <h3>Schools</h3>
          <ul>
            <li><Twemoji tag="span">🇫🇷</Twemoji> Tokyo University of Foreign Studies (Major in Area Studies of France)</li>
            <li><Twemoji tag="span">🗽</Twemoji> Smithtown High School East</li>
            <li><Twemoji tag="span">👨‍🎓</Twemoji> Yokohama Senior High School of International Studies</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li><Twemoji tag="span">🇯🇵</Twemoji> 日本語</li>
            <li><Twemoji tag="span">🇺🇸</Twemoji> English</li>
            <li><Twemoji tag="span">🇫🇷</Twemoji> français</li>
          </ul>
          <h3>Programming Languages</h3>
          <ul>
            <li><Twemoji tag="span">🐤</Twemoji> Swift</li>
            <li><Twemoji tag="span">🐘</Twemoji> PHP</li>
            <li><Twemoji tag="span">🕸</Twemoji> JavaScript</li>
            <li>...</li>
          </ul>
          <h3>Hobbies</h3>
          <ul>
            <li><Twemoji tag="span">⚽️</Twemoji> Playing and watching soccer</li>
            <li><Twemoji tag="span">🏄‍♂️</Twemoji> Surfing</li>
            <li><Twemoji tag="span">⛰</Twemoji> Hiking</li>
            <li><Twemoji tag="span">🍳</Twemoji> Cooking</li>
            <li><Twemoji tag="span">👨‍💻</Twemoji> Indie Hacking</li>
          </ul>
          <h3>Links</h3>
          <ul>
            <li>Twitter <a target="_blank" href="https://twitter.com/mrimjn">@mrimjn</a></li>
            <li>Instagram <a target="_blank" href="https://instagram.com/mrimjn">@mrimjn</a></li>
            <li>Instagram <a target="_blank" href="https://instagram.com/nowperson">@nowperson <Twemoji tag="span">🔒</Twemoji></a></li>
            <li>GitHub <a target="_blank"href="https://github.com/imjn">@imjn</a></li>
            <li>Amazon <a target="_blank" href="https://www.amazon.jp/hz/wishlist/ls/3I59379SDCM1R?ref_=wl_share">Wishlist</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}