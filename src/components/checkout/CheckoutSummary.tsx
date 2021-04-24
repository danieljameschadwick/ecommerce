import { Basket } from "../../util/state/Basket";
import { formatCurrency } from "../../util/formatting/CurrencyFormatter";
import { Product } from "../../util/state/Product";
import { SummaryItem } from "./SummaryItem";

interface IProps {
    basket: Basket;
    className: string;
};

export const CheckoutSummary: React.FC = ({ basket, className = "" }: IProps) => {
    const products: Product[] = [];

    // todo: add unhashed getProducts to Basket
    for (const keyMap in basket.products) {
        const productMap = basket.products[keyMap]

        for (const key in productMap) {
            const product = productMap[key];

            products.push(product);
        }
    }

    return (
        <div className={`basket--summary ${className}`}>
            <h3 className={"mb-2"}>
                Summary
            </h3>

            <div>
                {products.map(product => {
                    return (
                        <SummaryItem 
                            key={product.getSku()}
                            product={product}
                        />
                    );
                })}
            </div>

            <hr className={"mb-3"} />

            <div className={"flex flex-col mb-4"}>
                <span className={"flex mb-2"}>
                    <label className={"flex-1 font-semibold"}>Sub Total:</label> {formatCurrency(basket.getSubTotal())}
                </span>

                <span className={"flex mb-2"}>
                    <label className={"flex-1 font-semibold"}>Delivery:</label> {formatCurrency(basket.getDeliveryTotal())}
                </span>

                <span className={"flex"}>
                    <label className={"flex-1 font-semibold"}>Total:</label> {formatCurrency(basket.getTotal())}
                </span>
            </div>

            <div className={"flex justify-center space-x-2"}>
                <img className={"w-10 h-6"} src={"www/images/payment/visa.png"} />
                <img className={"w-10 h-6"} src={"www/images/payment/apple_pay.png"} />
                <img className={"w-10 h-6"} src={"www/images/payment/credit.png"} />
            </div>
        </div>
    );
};
