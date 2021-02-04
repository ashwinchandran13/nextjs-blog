import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.modules.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section class={utilStyles.headingMd}>
        <p>Hi my name is Ashwin Chandran, a full stack developer</p>
        <p>
          Visit my portfolio website where I have show cased my works
          <a href="https://ashwinchandran13.github.io/portfolio-page/#contact">My Portfolio page</a>
        </p>
      </section>
    </Layout>
  )
}