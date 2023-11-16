import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/profile.module.scss'

export default function about() {
  return (
    <Layout>
      <Head>
        <title>About me | imajin</title>
      </Head>
      <div>
        <div className={styles.profile}>
          <img className={styles.profileImage} src="/images/profile.png" alt=""/>
          <h1>About me</h1>
        </div>
        <div className={styles.aboutContainer}>
          <h3>Name</h3>
          imajin(imjn,いまじん)
          <h3>Occupation</h3>
          <p>Software Engineer</p>
          <h3>Hometown</h3>
          <p>Kugenuma Kaigan</p>
          <h3>Born in</h3>
          <p>1997</p>
          <h3>Jobs (Including internships)</h3>
          <ul>
            <li>Cookpad, Ltd</li>
            <li>Cookpad, Inc</li>
            <li>Wantedly, Inc</li>
            <li>STELLA, Inc</li>
            <li>TRAICY Japan, Inc</li>
            <li>and more...</li>
          </ul>
          <h3>Schools</h3>
          <ul>
            <li>Tokyo University of Foreign Studies (Major in Area Studies of France)</li>
            <li>Yokohama Senior High School of International Studies</li>
          </ul>
          <h3>Links</h3>
          <ul>
            <li>Twitter <a target="_blank" href="https://twitter.com/mrimjn">@mrimjn</a></li>
            <li>Facebook <a target="_blank" href="https://facebook.com/mrimjn">@mrimjn</a></li>
            <li>note <a target="_blank" href="https://note.com/imjn">@imjn</a></li>
            <li>GitHub <a target="_blank"href="https://github.com/imjn">@imjn</a></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
