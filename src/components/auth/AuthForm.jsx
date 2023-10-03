// import { Link } from "react-router-dom";
import googleIcon from '../../assets/icons/google-icon.svg';

const AuthForm = () => {
    return (
        <div className="p-4 bg-gray-100">
            <h1 className="font-semibold text-xl text-center">Sign in to your account</h1>
            <button className="w-48 m-auto flex items-center justify-center gap-4 px-4 py-2 mt-6 mb-6 bg-green-900 rounded-3xl hover:bg-red-500">
                <img src={googleIcon} alt="sign in with google" width={25} height={25} />
                <span className="text-white">Google Sign in</span>
            </button>
            <hr />
            <p className='py-4'>Continue with email</p>
            
        </div>
    );
}

export default AuthForm;