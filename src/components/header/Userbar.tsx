import { Link } from 'react-router-dom';

export const Userbar = () => {
    return (
        <div className={'userbar'}>
            <div className={'container'}>
                <div className={'userbar-brand link link--black-base'}>
                    <Link to={{pathname: '/'}}>
                        {process.env.REACT_APP_SITE_NAME}
                    </Link>
                </div>

                <div className={'userbar-end'}>
                    <Link to={{pathname: '/login'}}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};
