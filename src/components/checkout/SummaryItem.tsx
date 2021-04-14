import { MOCK_PRODUCT } from "../../enumeration/MockValues";
import { formatCurrency } from "../../util/formatting/CurrencyFormatter";
import { Product } from "../../util/state/Product";

interface IProps {
    product: Product;
};

export const SummaryItem: React.FC = ({ product }: IProps) => {
    return (
        <div className={"w-full flex flex-row text-white-base mb-3"}>
            <div className={"max-h-100 max-w-100 mr-3"}>
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

            <div className={"flex-1 flex flex-col sm:flex-row relative"}>
                <div className={"w-full flex flex-col"}>
                    <h3 className={"w-full mb-1"}>
                        {MOCK_PRODUCT.NAME}
                    </h3>

                    <div className={"mb-1 flex"}>
                        {product.getAttributes().map(attribute => {
                            return (
                                <div key={attribute.handle} className={"text-sm mr-1"}>
                                    {attribute.name}: {attribute.value},
                                </div>
                            );
                        })}

                        <div className={"text-sm"}>
                            Quantity: {product.getQuantity()}
                        </div>
                    </div>

                    <div className={"w-full font-semibold"}>
                        {formatCurrency(product.getPrice())}
                    </div>
                </div>
            </div>
        </div>
    )
};
