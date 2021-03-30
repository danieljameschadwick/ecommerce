import Head from "next/head";
import Layout, { siteTitle } from "../../../src/components/layout/Layout";
import { Product } from "../../../src/components/product/Product";

const ProductPage = ({id}) => {
    return (
        <Layout>
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
