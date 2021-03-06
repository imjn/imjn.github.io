import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/post.module.scss'

export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@mrimjn" />
            <meta property="og:url" content="imjn.github.io" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={postData.title} />
            <meta property="og:description" content="いまじんの雑記ブログ" />
            <meta property="og:site_name" content="imjn" />
            <meta property="og:image" content="https://imjn.github.io/images/profile-2.webp" />
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className={styles.commentContainer}>
            <a
              href={"https://twitter.com/intent/tweet?screen_name=mrimjn&text=imjn.github.io/posts/" + postData.id + " "}>
              <button className="button">Twitterでコメントする</button>
            </a>
              <p className={utilStyles.lightText}>よかったらコメントください。励みになります。</p>
            </div>
        </article>
    </Layout>
  )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
    props: {
        postData
      }
    }
  }