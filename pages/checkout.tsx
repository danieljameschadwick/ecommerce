import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../src/components/layout/Layout";
import { Checkout } from "../src/components/checkout/Checkout";

const CheckoutPage: React.FC = () => {
    return (
         <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"container"}>
                <h1>Checkout</h1>

                <Checkout />
            </div>
        </Layout>
    );
};

export default CheckoutPage;
