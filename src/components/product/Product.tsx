import { MOCK_PRODUCT } from "../../enumeration/MockValues";
import ImageGallery from "react-image-gallery";
import { formatCentesimal } from "../../util/formatting/CurrencyFormatter";
import { Button } from "../util/buttons/Button";
import Dropdown from "react-dropdown";
import { useContext, useState } from "react";
import { ACTION } from "../../util/state/Reducer";
import { DispatchContext } from "../../util/state/Store";

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
    "S", "M", "L", "XL"
];

const Product = ({ id, name }: IProps) => {
    const dispatch = useContext(DispatchContext);
    const [ size, setSize ] = useState<string|undefined>(undefined);

    
    const showThumbnails = images.length > 1;
   
    const addToCart = () => {
        console.log('add to cart');
        console.log(size);

        dispatch({
            type: ACTION.ADD_TO_CART,
            payload: {
                id: MOCK_PRODUCT.ID,
                size,
                quantity: 1
            },
        })
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

                        <Dropdown className={"w-full mb-2"} options={sizes} onChange={({value}) => setSize(value)} placeholder="Select an option" />

                        <Button text={"Add to cart"} onClick={() => addToCart()} />
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, erat id rhoncus pharetra, velit dui dapibus risus, a euismod augue nisi vel neque. Donec pellentesque, elit vitae dignissim dictum, magna eros vulputate ante, ut dapibus urna tellus quis purus. Fusce eget sodales augue, quis congue tortor. Vestibulum consequat efficitur justo et mattis. Sed euismod tristique porta. Integer aliquam eget ligula a semper. Quisque ut posuere quam. Sed vestibulum pharetra justo, non semper sapien. Proin imperdiet eu orci eget luctus. Praesent aliquam lectus ac leo tincidunt, quis vulputate ante porta.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;