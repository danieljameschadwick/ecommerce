import { Userbar } from "./Userbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
             <Userbar />

             <div className={"header navbar"}>
                <div className={"container"}>
                    <div className={"navbar-brand link link--black-base"}>
                        <Link to={{pathname: "/"}}>
                            {process.env.REACT_APP_SITE_NAME}
                        </Link>
                    </div>

                    <div className={"navbar-end"}>
                        <div className={"basket-wrapper w-8"}>
                            <svg className={"text-white-base w-6 fill-current mx-auto"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M438,466.49H74a5.68,5.68,0,0,1-5.59-4.67L22.85,211.51a5.69,5.69,0,0,1,5.59-6.71H483.56a5.69,5.69,0,0,1,5.59,6.71L443.64,461.82A5.68,5.68,0,0,1,438,466.49ZM78.71,455.11H433.29l43.44-238.93H35.26Z"/>
                                <path d="M506.31,216.18H5.69a5.69,5.69,0,0,1,0-11.38H506.31a5.69,5.69,0,0,1,0,11.38Z"/>
                                <path d="M119.46,216.18a5.68,5.68,0,0,1-4.93-8.51l91-159.29A5.69,5.69,0,1,1,215.43,54l-91,159.29A5.69,5.69,0,0,1,119.46,216.18Z"/>
                                <path d="M392.54,216.18a5.69,5.69,0,0,1-4.94-2.87L296.57,54a5.69,5.69,0,1,1,9.88-5.64l91,159.29a5.68,5.68,0,0,1-4.93,8.51Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Header;