import { Basket } from "../../util/state/Basket";
import { formatCurrency } from "../../util/formatting/CurrencyFormatter";
import { SubmitButton } from "../util/buttons/SubmitButton";

interface IProps {
    basket: Basket;
    className: string;
};

const delivery = [
    {
        label: "Standard Delivery ($3.00)",
        value: {
            id: 1,
            name: "Standard Delivery",
            handle: "DELIVERY",
            value: "STANDARD",
        },
    },
    {
        label: "Next-day Delivery ($6.99)",
        value: {
            id: 2,
            name: "Next-day Delivery",
            handle: "DELIVERY",
            value: "NEXT_DAY",
        },
    }
];

export const BasketSummary: React.FC = ({basket, additionalClassName}: IProps) => {
    return (
        <div className={`bg-black-darker text-white-base p-4 ml-5 rounded-md ${additionalClassName ?? ""}`}>
            <h3 className={"mb-2"}>
                Summary
            </h3>

            <hr className={"mb-3"} />

            <div className={"flex flex-col mb-4"}>
                <span className={"mb-2"}>
                    <label className={"inline-block font-semibold"}>Sub Total:</label> {formatCurrency(basket.getTotal())}
                </span>

                <div className={"mb-4"}>
                    <label className={"mb-1 inline-block font-semibold"}>Delivery:</label>

                    <select
                        name="delivery" 
                        className={"w-full text-black-base"}
                        defaultValue=""
                    >
                        {delivery.map((option, index) =>
                            <option key={option.value.id} value={JSON.stringify(option.value)}>
                                {option.label}
                            </option>
                        )}
                    </select>
                </div>

                <SubmitButton text={"Checkout"} />
            </div>

            <div className={"flex justify-center space-x-2"}>
                <img className={"w-10 h-6"} src={"www/images/payment/visa.png"} />
                <img className={"w-10 h-6"} src={"www/images/payment/apple_pay.png"} />
                <img className={"w-10 h-6"} src={"www/images/payment/credit.png"} />
            </div>
        </div>
    );
};
