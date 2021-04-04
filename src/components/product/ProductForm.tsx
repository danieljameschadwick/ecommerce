import { SubmitButton } from "../util/buttons/SubmitButton";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ACTION } from "../../util/state/Action";
import { AttributeDTO } from "../../util/state/Attribute";

const sizes = [
    {
        label: "S",
        value: {
            id: 1,
            name: "Size",
            handle: "SIZE",
            value: "S",
        },
    },
    {
        label: "M",
        value: {
            id: 2,
            name: "Size",
            handle: "SIZE",
            value: "M",
        },
    },
    {
        label: "L",
        value: {
            id: 3,
            name: "Size",
            handle: "SIZE",
            value: "L",
        },
    },
    {
        label: "XL",
        value: {
            id: 4,
            name: "Size",
            handle: "SIZE",
            value: "XL",
        },
    },
];

const ProductSchema = Yup.object().shape({
    size: Yup.string()
        .required('Required'),
});

export const ProductForm = () => {
    const dispatch = useDispatch();

    const addToCart = (size: AttributeDTO) => {
        const attributes = [];
        attributes["size"] = size;

        dispatch({
            type: ACTION.ADD_TO_CART,
            payload: {
                id: 1234,
                price: 19.99,
                quantity: 1,
                attributes,
            },
        });
    };

    return (
        <Formik 
            initialValues={{
                size: "",
            }}
            validationSchema={ProductSchema}
            onSubmit={values => {
                const size = JSON.parse(values.size);

                addToCart(size);
            }}
        >
            {({ errors, handleChange, touched }) => (
                <Form>
                    <Field 
                        name="size"
                        type="input"
                        className={"hidden"}
                    />

                    <select
                        name="size" 
                        className={"w-full mb-2"}
                        onChange={handleChange}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select your option
                        </option>

                        {sizes.map((option, index) =>
                            <option key={option.value.id} value={JSON.stringify(option.value)}>
                                {option.value.value}
                            </option>
                        )}
                    </select>

                    {errors.size && touched.size ? (
                        <div>{errors.size}</div>
                    ) : null}

                    <SubmitButton text={"Add to cart"} />
                </Form>
            )}
        </Formik>
    )
}