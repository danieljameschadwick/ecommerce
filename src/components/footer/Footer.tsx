const Footer = () => {
    return (
        <footer className={"footer w-full"}>
            <div className={"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"}>
                <div className={"flex title-font font-medium items-center md:justify-start justify-center text-black-base dark:text-white-base"}>
                    <a href={"/#"}>
                        <span className={"ml-3 text-xl"}>
                            ecommerce
                        </span>
                    </a>
                </div>

                <div className={"text-sm text-black-base dark:text-white-base sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:mt-0 mt-4"}>
                    © {(new Date()).getFullYear()} ecommerce —
                    <a href={"https://github.com/danis2gd"} className={"text-black-base dark:text-white-base ml-1"} rel={"noopener noreferrer"} target={"_blank"}>
                        @danis2gd
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;