import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormGroup } from "../util/form/FormGroup";

const DetailsSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
});

export const ContactDetails = () => {
    return (
        <>
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
                            <FormGroup
                                name={"firstName"}
                                label={"First Name"}
                                placeholder={"First name"}
                            />

                            <FormGroup
                                name={"lastName"}
                                label={"Last Name"}
                                placeholder={"Last name"}
                            />
                        </div>

                        <FormGroup
                            name={"email"}
                            label={"Email address"}
                            placeholder={"me@example.com"}
                        />
                    </Form>
                )}
            </Formik>
        </>
    );
};