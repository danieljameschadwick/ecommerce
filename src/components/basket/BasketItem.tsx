import { MOCK_PRODUCT } from "../../enumeration/MockValues";
import { formatCurrency } from "../../util/formatting/CurrencyFormatter";
import { Product } from "../../util/state/Product";

interface IProps {
    product: Product;
};

export const BasketItem: React.FC = ({product}: IProps) => {
    
    return (
        <div className={"w-full flex flex-row max-h-100 text-white-base"}>
            <div className={"max-w-100 mr-3"}>
                <picture className={"w-full h-full flex"}>
                    <source
                        srcSet={MOCK_PRODUCT.IMAGE_PATH}
                        media={"(min-width: 800px)"}
                    />
                    <img
                        className={"object-cover w-full rounded-md"}
                        src={MOCK_PRODUCT.IMAGE_PATH}
                        alt={MOCK_PRODUCT.IMAGE_ALT_TEXT}
                    />
                </picture>
            </div>

            <div className={"w-1/4 flex flex-col"}>
                <h3 className={"w-full mb-1"}>
                    {MOCK_PRODUCT.NAME}
                </h3>

                <div className={"w-full"}>
                    {formatCurrency(product.getPrice())}
                </div>
            </div>

            <div className={"w-1/2"}>
                
            </div>
        </div>
    )
};
