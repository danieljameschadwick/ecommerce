import Head from "next/head";
import Layout, { siteTitle } from "../src/components/layout/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section>
        <h2>
            Blog
        </h2>
      </section>
    </Layout>
  )
};

export default Index;

export async function getStaticProps() {
    return {
        props: {}
    }
};
