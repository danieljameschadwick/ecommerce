import { MOCK_PRODUCT } from "../../enumeration/MockValues";

type IProps = {
    id: number;
    name: string;
};

const Product = ({ id, name }: IProps) => {
    return (
        <div className={"container"}>
            <div className={'flex flex-nowrap'}>
                <div className={'w-2/3 mr-5'}>
                    <picture className={'w-full h-full flex max-h-600'}>
                        <source srcSet={MOCK_PRODUCT.IMAGE_PATH}
                            media={"(min-width: 800px)"} />
                        <img className={'w-full object-cover'} src={MOCK_PRODUCT.IMAGE_PATH} alt={MOCK_PRODUCT.IMAGE_ALT_TEXT} />
                    </picture>
                </div>

                <div className={'w-1/3 flex flex-col'}>
                    <h1>{MOCK_PRODUCT.NAME}</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, erat id rhoncus pharetra, velit dui dapibus risus, a euismod augue nisi vel neque. Donec pellentesque, elit vitae dignissim dictum, magna eros vulputate ante, ut dapibus urna tellus quis purus. Fusce eget sodales augue, quis congue tortor. Vestibulum consequat efficitur justo et mattis. Sed euismod tristique porta. Integer aliquam eget ligula a semper. Quisque ut posuere quam. Sed vestibulum pharetra justo, non semper sapien. Proin imperdiet eu orci eget luctus. Praesent aliquam lectus ac leo tincidunt, quis vulputate ante porta.
                    </p>
                </div>
            </div>

           
        </div>
    );
};

export default Product;