import PropTypes from 'prop-types';
import { Logo } from '../components/core';
import Signin from '../components/auth/Signin';

const Auth = ({signIn}) => {
    return (
        <>
            <div className="bg-red-500 py-2" />
            <div className="px-4 md:px-16 py-4 shadow">
                <Logo />
            </div>
            {signIn ? <Signin /> : ''}
        </>
    );
}

Auth.propTypes = {
    signIn: PropTypes.bool.isRequired,
}

export default Auth;