import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../../src/components/layout/Layout";
import { Product } from "../../../src/components/product/Product";

const ProductPage = ({slug, id}) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"container"}>
                <Product id={id} />
            </div>
        </Layout>
    );
};

export default ProductPage;
