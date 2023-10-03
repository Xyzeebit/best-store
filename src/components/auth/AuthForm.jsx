// import { Link } from "react-router-dom";
import { useState } from 'react';
import PropTypes from 'prop-types'
import googleIcon from '../../assets/icons/google-icon.svg';
import { isValidEmail, isValidPassword } from '../../api/apis';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({signIn}) => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCPwd] = useState('');
    const [shouldContinue, setShouldContinue] = useState(false);
    const navigate = useNavigate()

    const handleContinue = () => {
        if (isValidEmail(email)) {
            setShouldContinue(true);
        }
    }

    const handleSubmit = () => {
        if (signIn) {
            if (isValidEmail(email) && isValidPassword(pwd)) {
                navigate('/');
            }
        }
    }

    return (
        <div className="sm:w-80 w-full md:w-96 p-4 bg-gray-100 border-2 border-gray-900 rounded-md overflow-hidden">
            <h1 className="font-semibold text-xl text-center">
                Sign in to your account
            </h1>
            <button className="w-48 m-auto flex items-center justify-center gap-4 px-4 py-2 mt-6 mb-6 bg-green-900 rounded-3xl hover:bg-red-500">
                <img
                    src={googleIcon}
                    alt="sign in with google"
                    width={25}
                    height={25}
                />
                <span className="text-white">Google Sign in</span>
            </button>
            <hr />
            <p className="py-4 font-semibold">Continue with email</p>
            <div className="flex flex-col">
                <input
                    type="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Your email address"
                    className=" font-semibold transition-all px-2 py-2 outline-2 outline-gray-900 focus:outline-2 focus:outline-green-900 focus:border-none outline-none w-full rounded-md"
                />
                {shouldContinue == false && <button onClick={handleContinue}
                    className="w-48 m-auto bg-gray-950 text-white font-semibold rounded-3xl px-6 py-2 mt-6 shadow-sm">
                    Continue
                </button>}
            </div>
            {shouldContinue && <div className='mt-8 flex flex-col'>
                <input
                    type="password"
                    value={pwd}
                    onChange={({ target }) => setPwd(target.value)}
                    placeholder="Enter password"
                    className=" font-semibold transition-all px-2 py-2 outline-2 outline-gray-900 focus:outline-2 focus:outline-green-900 focus:border-none outline-none w-full rounded-md"
                />
                {!signIn && <input
                    type="password"
                    value={cpwd}
                    onChange={({ target }) => setCPwd(target.value)}
                    placeholder="Confirm password"
                    className=" font-semibold transition-all px-2 py-2 outline-2 outline-gray-900 focus:outline-2 focus:outline-green-900 focus:border-none outline-none w-full rounded-md"
                />}
                <button onClick={handleSubmit}
                    className="w-48 m-auto bg-gray-950 text-white font-semibold rounded-3xl px-6 py-2 mt-6 shadow-sm">
                    {signIn ? "Sign in" : "Create account"}
                </button>
            </div>}
        </div>
    );
}

AuthForm.propTypes = {
  signIn: PropTypes.bool.isRequired,
};

export default AuthForm;