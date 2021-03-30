import { useParams } from "react-router-dom";
import { Product } from "../components/product/Product";

const ProductContainer = () => {
    const params = useParams();
    const { id, name } = params;

    return (
        <Product id={id} name={name} />
    );
};

export default ProductContainer;