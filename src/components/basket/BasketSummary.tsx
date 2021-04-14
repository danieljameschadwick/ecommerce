import { Basket } from "../../util/state/Basket";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ACTION } from "../../util/state/Action";
import { AttributeDTO } from "../../util/state/Attribute";
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
            handle: "STANDARD_DELIVERY",
            value: 3,
        },
    },
    {
        label: "Next-day Delivery ($6.99)",
        value: {
            id: 2,
            name: "Next-day Delivery",
            handle: "NEXT_DAY",
            value: 6.99,
        },
    }
];

const BasketSummarySchema = Yup.object().shape({
    delivery: Yup.string()
        .required('Required'),
});

export const BasketSummary: React.FC = ({ basket, className = "" }: IProps) => {
    const dispatch = useDispatch();

    const updateDelivery = (delivery: AttributeDTO): void => {
        dispatch({
            type: ACTION.UPDATE_DELIVERY,
            payload: delivery,
        });
    };

    const submit = (): void => {
        location.href = "/checkout";
    };
    
    return (
        <div className={`basket--summary ${className}`}>
            <h3 className={"mb-2"}>
                Summary
            </h3>

            <hr className={"mb-3"} />

            <div className={"flex flex-col mb-4"}>
                <span className={"mb-2"}>
                    <label className={"inline-block font-semibold"}>Sub Total:</label> {formatCurrency(basket.getSubTotal())}
                </span>

                <div>
                    <label className={"mb-1 inline-block font-semibold"}>Delivery:</label>

                    <Formik 
                        initialValues={{
                            delivery: JSON.stringify(delivery[0].value),
                        }}
                        validationSchema={BasketSummarySchema}
                        onSubmit={values => {
                            const delivery = JSON.parse(values.delivery);

                            updateDelivery(delivery);
                            submit();
                        }}
                    >
                        {({ handleChange, handleSubmit }) => (
                            <Form>
                                <Field 
                                    name="delivery"
                                    type="input"
                                    className={"hidden"}
                                />

                                <select
                                    name="delivery"
                                    className={"w-full text-black-base mb-4"}
                                    onChange={handleChange}
                                    defaultValue=""
                                >
                                    {delivery.map((option, index) =>
                                        <option key={option.value.id} value={JSON.stringify(option.value)}>
                                            {option.label}
                                        </option>
                                    )}
                                </select>

                                <SubmitButton onClick={handleSubmit} text={"Checkout"} />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className={"flex justify-center space-x-2"}>
                <img className={"w-10 h-6"} src={"www/images/payment/visa.png"} />
                <img className={"w-10 h-6"} src={"www/images/payment/apple_pay.png"} />
                <img className={"w-10 h-6"} src={"www/images/payment/credit.png"} />
            </div>
        </div>
    );
};
