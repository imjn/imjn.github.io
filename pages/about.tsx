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
        <h2>About me</h2>
        <div className={styles.aboutContainer}>
          <h3>Name</h3>
          imajin(imjn,いまじん)
          <h3>Occupation</h3>
          <p>Software Engineer, iOS app developer</p>

          <h3>Experience</h3>
          <ul>
            <li>
              fresco 2023.09 ~
            </li>
            <li>Cookpad UK 2022.01-2023.06</li>
            <li>Cookpad Japan 2021.04-2021.12</li>
          </ul>

          <h3>Schools</h3>
          <ul>
            <li>Tokyo University of Foreign Studies (Major in Area Studies of France)</li>
            <li>Yokohama Senior High School of International Studies</li>
          </ul>

          <h3>Links</h3>
          <ul>
            <li>LinkedIn <a target="_blank" href="https://www.linkedin.com/in/imjn/">@imjn</a></li>
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
