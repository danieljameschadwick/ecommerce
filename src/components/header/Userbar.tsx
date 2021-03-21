import { Link } from 'react-router-dom';

export const Userbar = () => {
    return (
        <div className={'userbar navbar'}>
            <div className={'container'}>
                <div className={'navbar-brand'}></div>

                <div className={'navbar-end'}>
                    <Link to={{pathname: '/login'}}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};
