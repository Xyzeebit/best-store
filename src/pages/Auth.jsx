import PropTypes from 'prop-types';
import { Logo } from '../components/core';
import Signin from '../components/auth/Signin';
import Register from '../components/auth/Register';

const Auth = ({signIn}) => {
    return (
        <>
            <div className="bg-red-500 py-2" />
            <div className="px-4 md:px-16 py-2 shadow">
                <Logo />
            </div>
            {signIn ? <Signin /> : <Register />}
        </>
    );
}

Auth.propTypes = {
    signIn: PropTypes.bool.isRequired,
}

export default Auth;