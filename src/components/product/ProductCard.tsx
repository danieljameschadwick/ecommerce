import { MOCK_PRODUCT } from "../../enumeration/MockValues";

const ProductCard = () => {
    return (
        <div className={"product-card"}>
            <div className="relative overflow-hidden">
                <div>
                    <a href={MOCK_PRODUCT.URL}>
                        <picture className={'w-full h-full max-h-400 flex'}>
                            <source srcSet={MOCK_PRODUCT.IMAGE_PATH}
                                media={"(min-width: 800px)"} />
                            <img className={'object-cover'} src={MOCK_PRODUCT.IMAGE_PATH} alt={MOCK_PRODUCT.IMAGE_ALT_TEXT} />
                        </picture>
                    </a>
                </div>

                <div className={"absolute bottom-0 mb-2 ml-3 px-2 py-1 rounded text-sm bg-black-dark text-white-base"}>
                    $16.80
                </div>
            </div>

            <div className={"w-full p-3 bg-black-medium"}>
                <h3 className={"mr-10 text-sm truncate-2nd"}>
                    <a className={"hover:text-blue-500"} href={MOCK_PRODUCT.URL}>
                        {MOCK_PRODUCT.NAME}
                    </a>
                </h3>

                <div className={"flex items-start justify-between"}>
                    <p className={"text-xs text-gray-500"}>
                        {MOCK_PRODUCT.DESCRIPTION}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;