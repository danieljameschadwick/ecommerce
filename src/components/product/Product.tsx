import { MOCK_PRODUCT } from "../../enumeration/MockValues";
import ImageGallery from "react-image-gallery";
import { formatCentesimal } from "../../util/formatting/CurrencyFormatter";
import { SubmitButton } from "../util/buttons/SubmitButton";
import { useState } from "react";
import { ACTION } from "../../util/state/Action";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

type IProps = {
    id: number;
    name: string;
};

const images = [
    {
        original: MOCK_PRODUCT.IMAGE_PATH,
        thumbnail: MOCK_PRODUCT.IMAGE_PATH,
    },
    {
        original: MOCK_PRODUCT.IMAGE_PATH,
        thumbnail: MOCK_PRODUCT.IMAGE_PATH,
    },
    {
        original: MOCK_PRODUCT.IMAGE_PATH,
        thumbnail: MOCK_PRODUCT.IMAGE_PATH,
    },
];

const sizes = [
    {
        label: "S",
        value: {
            id: 1,
            type: "SIZE",
            handle: "S",
        },
    },
    {
        label: "M",
        value: {
            id: 2,
            type: "SIZE",
            handle: "M",
        },
    },
    {
        label: "L",
        value: {
            id: 3,
            type: "SIZE",
            handle: "L",
        },
    },
    {
        label: "XL",
        value: {
            id: 4,
            type: "SIZE",
            handle: "XL",
        },
    },
];

const ProductSchema = Yup.object().shape({
   size: Yup.string()
     .required('Required'),
 });

export const Product = ({ id, name }: IProps) => {
    const dispatch = useDispatch();
    const [ size, setSize ] = useState<string|undefined>(undefined);
    const showThumbnails = images.length > 1;

    const updateSize = (value: AttributeDTO) => {
        setSize(value);
    };

    const addToCart = () => {
        dispatch({
            type: ACTION.ADD_TO_CART,
            payload: {
                id: 1234,
                quantity: 1,
                attributes: {
                    size,
                },
            },
        });
    };

    return (
        <div className={"container mb-4"}>
            <div className={"flex flex-wrap md:flex-nowrap"}>
                <div className={"w-full md:w-2/3 md:mr-5"}>
                    <ImageGallery 
                        additionalClass={"product-gallery"}
                        items={images} 
                        showNav={false}
                        showPlayButton={false}
                        showBullets={false}
                        showThumbnails={showThumbnails}
                        thumbnailPosition={"bottom"}
                    />
                </div>

                <div className={"w-full md:w-1/3 flex flex-col"}>
                    <h1>{MOCK_PRODUCT.NAME}</h1>

                    <p className={"mb-2"}>
                        {formatCentesimal(MOCK_PRODUCT.PRICE)}
                    </p>

                    <div className={"mb-4"}>
                        <p className={"mb-1"}>Size:</p>

                        <Formik 
                            initialValues={{
                                size: "",
                            }}
                            validationSchema={ProductSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);

                                addToCart();
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <select name="sizes" className={"w-full mb-2"} onChange={(event, value) => updateSize(JSON.parse(event.target.value))}>
                                        <option value="" disabled defaultValue={true}>
                                            Select your option
                                        </option>

                                        {sizes.map((option, index) =>
                                            <option key={option.value.id} value={JSON.stringify(option.value)}>
                                                {option.value.handle}
                                            </option>
                                        )}
                                    </select>

                                    {errors.sizes && touched.sizes ? (
                                        <div>{errors.sizes}</div>
                                    ) : null}

                                    {/* <SubmitButton text={"Add to cart"} onClick((event) => updateSize(event.target.value)) /> */}
                                    <button type="submit">
                                        Add to cart
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, erat id rhoncus pharetra, velit dui dapibus risus, a euismod augue nisi vel neque. Donec pellentesque, elit vitae dignissim dictum, magna eros vulputate ante, ut dapibus urna tellus quis purus. Fusce eget sodales augue, quis congue tortor. Vestibulum consequat efficitur justo et mattis. Sed euismod tristique porta. Integer aliquam eget ligula a semper. Quisque ut posuere quam. Sed vestibulum pharetra justo, non semper sapien. Proin imperdiet eu orci eget luctus. Praesent aliquam lectus ac leo tincidunt, quis vulputate ante porta.
                    </p>
                </div>
            </div>
        </div>
    );
};
