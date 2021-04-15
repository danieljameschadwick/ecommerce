import { Field, Form, Formik } from "formik";
import { Label } from "recharts";
import * as Yup from "yup";
import { Basket } from "../../util/state/Basket";
import { SubmitButton } from "../util/buttons/SubmitButton";

interface IProps {
    basket: Basket;
    className?: string;
};

const DetailsSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
});

export const Checkout: React.FC = ({ basket, className = "" }: IProps) => {
    return (
        <div className={`flex flex-col text-white-base ${className}`}>
            <h1 className={"mb-2"}>
                Checkout
            </h1>

            <h2 className={"mb-2"}>
                Contact details
            </h2>

            <Formik 
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                }}
                validationSchema={DetailsSchema}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {() => (
                    <Form>
                        <div className={"form-row grid grid-cols-2 gap-x-4"}>
                            <div className={"form-group"}>
                                <label>
                                    First Name:
                                </label>

                                <Field 
                                    name={"firstName"}
                                    type={"input"}
                                    className={"input"}
                                    placeholder={"First name"}
                                />
                            </div>

                            <div className={"form-group"}>
                                <label>
                                    Last Name:
                                </label>

                                <Field 
                                    name={"lastName"}
                                    type={"input"}
                                    className={"input"}
                                    placeholder={"Last name"}
                                />
                            </div>
                        </div>

                        <div className={"form-group"}>
                            <label>
                                Email:
                            </label>

                            <Field 
                                name={"email"}
                                type={"input"}
                                className={"input"}
                                placeholder={"me@example.com"}
                            />
                        </div>

                        <SubmitButton text={"Next"} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};
