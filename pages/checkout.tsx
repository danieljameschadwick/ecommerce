import Head from "next/head";
import Layout, { siteTitle } from "../src/components/layout/Layout";
import { Checkout } from "../src/components/checkout/Checkout";
import { CheckoutSummary } from "../src/components/checkout/CheckoutSummary";
import { useSelector } from "react-redux";
import { Basket } from "../src/util/state/Basket";

const CheckoutPage: React.FC = () => {
    const basket: Basket = useSelector(state => state.basket.basket);

    return (
         <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={"container"}>
                <h1>Checkout</h1>
            </div>

            <div className={"container container--checkout grid grid-cols-5 gap-x-10 gap-y-4"}>
                <div className={"container--details col-span-5 md:col-span-3"}>
                    <Checkout
                        basket={basket}
                    />
                </div>

                <div className={"container-summary col-span-5 md:col-span-2"}>
                    <CheckoutSummary
                        basket={basket}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;
