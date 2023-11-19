import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/profile.module.scss'

export default function about() {
  return (
    <Layout>
      <Head>
        <title>About imajin | imajin</title>
      </Head>
      <div>
        <h2>About imajin</h2>
        <div className={styles.aboutContainer}>
          <h3>Name</h3>
          imajin(imjn,いまじん)
          <h3>Occupation</h3>
          <p>Software Engineer, iOS app developer</p>

          <h3>Work Experience</h3>
          <ul>
            <li><span className={styles.bold}>Adaptics Ltd.(fresco)</span>, Dublin, Ireland, 23.09 -</li>
            <li><span className={styles.bold}>Cookpad limited</span>, Bristol, UK, 22.01 - 23.06</li>
            <li><span className={styles.bold}>クックパッド株式会社</span>, 横浜, Japan, 21.04 - 21.12</li>
            <li><span className={styles.bold}>...</span></li>
          </ul>

          <h3>Schools</h3>
          <ul>
            <li>東京外国語大学 (フランス)</li>
            <li>横浜国際高校</li>
          </ul>

          <h3>Links</h3>
          <ul>
            <li>LinkedIn <a target="_blank" href="https://www.linkedin.com/in/imjn/">@imjn</a></li>
            <li>X <a target="_blank" href="https://twitter.com/mrimjn">@mrimjn</a></li>
            <li>GitHub <a target="_blank"href="https://github.com/imjn">@imjn</a></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
