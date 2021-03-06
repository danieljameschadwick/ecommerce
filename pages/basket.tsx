import Head from "next/head";
import Layout, { siteTitle } from "../src/components/layout/Layout";
import { Basket } from "../src/components/basket/Basket";

const BasketPage: React.FC = () => {
    return (
         <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"container"}>
                <Basket />
            </div>
        </Layout>
    );
};

export default BasketPage;
