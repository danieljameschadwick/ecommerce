import { Field, Form, Formik } from "formik";
import { Label } from "recharts";
import * as Yup from "yup";

const ShippingDetailsSchema = Yup.object().shape({
    property: Yup.string().required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string().required('Required'),
    county: Yup.string().required('Required'),
    postCode: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
});

export const ShippingDetails = () => {
    return (
        <>
            <h2 className={"mb-2"}>
                Shipping details 
            </h2>

            <Formik 
                initialValues={{
                    property: "",
                    addressLine1: "",
                    addressLine2: "",
                    county: "",
                    postCode: "",
                    country: "",
                }}
                validationSchema={ShippingDetailsSchema}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {() => (
                    <Form>
                        <div className={"form-group"}>
                            <label>
                                Property:
                            </label>

                            <Field 
                                name={"property"}
                                type={"input"}
                                className={"input"}
                                placeholder={"House/flat number"}
                            />
                        </div>

                        <div className={"form-group"}>
                            <label>
                                Address Line 1:
                            </label>

                            <Field 
                                name={"addressLine1"}
                                type={"input"}
                                className={"input"}
                            />
                        </div>

                        <div className={"form-group"}>
                            <label>
                                Address Line 2:
                            </label>

                            <Field 
                                name={"addressLine2"}
                                type={"input"}
                                className={"input"}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};