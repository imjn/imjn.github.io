import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/profile.module.scss'

export default function about() {
  return (
    <Layout>
      <Head>
        <title>Profile | imajin</title>
      </Head>
      <div>
        <h2>Profile</h2>
        <div className={styles.aboutContainer}>
          <h3>Name</h3>
          imajin(imjn)
          <h3>Occupation</h3>
          <p>Software Engineer, Mobile</p>

          <h3>Jobs</h3>
          <ul>
            <li><a href="https://frescocooks.com"><span className={styles.bold}>fresco</span></a>, Dublin, Ireland, 23.09 -</li>
            <li><a href="https://cookpad.com/uk/homepage"><span className={styles.bold}>Cookpad limited</span></a>, Bristol, UK, 22.01 - 23.06</li>
            <li><a href="https://cookpad.com"><span className={styles.bold}>クックパッド株式会社</span></a>, Yokohama, Japan, 21.04 - 21.12</li>
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
