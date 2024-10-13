import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/home.module.scss'
import Date from '../components/date'
import { getNotePostsData } from '../lib/note'

export default function Home({ latestPosts, notePosts }) {
  return (
    <Layout>
      <Head>
        <title>imajin</title>
      </Head>
      <div>
        {/* Profile card */}
        <div id={styles.profileContainer}>
          <h1 className={styles.profileTitle}>Howdy!<br />I'm Imajin.</h1>
          <p className={styles.profileDescription}>
            ダブリン在住のエンジニア。趣味は欧州サッカー観戦と旅行です。日本→イギリス→アイルランドと移住してきました。
          </p>
          <p className={`${utilStyles.lightText} ${styles.profileDescriptionEn}`}>
            I'm a mobile app engineer based in Dublin. I love watching European football and traveling. I've moved from Japan to the UK and then to Ireland.
          </p>
          <Link href="/about">
            <button className="button">View profile</button>
          </Link>
        </div>

        <div className={styles.heading}>
          <h2 className={styles.headingTitle}>Latest blog</h2>
        </div>
        <ul className={utilStyles.list}>
          {latestPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <Link href="/posts">
          <button className="button">View all</button>
        </Link>
      </div>

      <div className={styles.heading}>
          <h2 className={styles.headingTitle}>Posts on note.com</h2>
        </div>
        <div id={styles.notePostsContainer}>
          <div id={styles.notePostsGridContainer}>
            {notePosts.map(({ id, name, likeCount, publishAt, noteUrl, eyecatch }) => (
              <div className={styles.notePostContainer} key={id}>
                <Link href={noteUrl} target='_blank'>
                  <div className={styles.thumbnailContainer}>
                    <img src={eyecatch} alt={name} className={styles.thumbnail} />
                  </div>
                </Link>
                <div className={styles.notePostTitle}>
                  <Link href={noteUrl} target='_blank'>
                    {name}
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    {likeCount} likes,
                  </small>
                  <small className={utilStyles.lightText}>
                    <Date dateString={publishAt} />
                  </small>
                </div>

              </div>
            ))}
          </div>

          <Link href="https://note.com/imjn" passHref legacyBehavior>
            <a href="https://note.com/imjn" target='_blank'>
              <button className="button">Visit note.com</button>
            </a>
          </Link>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const latestPosts = getSortedPostsData(5);
  const notePosts = await getNotePostsData();
  return {
    props: {
      latestPosts,
      notePosts
    }
  }
}
