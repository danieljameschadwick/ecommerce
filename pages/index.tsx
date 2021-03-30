import Head from "next/head";
import Layout, { siteTitle } from "../src/components/layout/Layout";
import Link from "next/link";
import ProductCard from "../src/components/product/ProductCard";

const Index = () => {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>

        <div className={"container"}>
            <ProductCard />
        </div>
    </Layout>
  )
};

export default Index;

export async function getStaticProps() {
    return {
        props: {}
    }
};
