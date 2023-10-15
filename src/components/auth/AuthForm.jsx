import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import googleIcon from '../../assets/icons/google-icon.svg';
import { createUserWithEmailAndPassword, isValidEmail, isValidPassword, signInWithEmailAndPassword } from '../../api/apis';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const AuthForm = ({signIn}) => {
  const { isLoggedIn } = useSelector(state => state.user);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState([false, 'Email address cannot be empty']); 
    const [pwd, setPwd] = useState('');
    const [pwdErr, setPwdErr] = useState(false);
    const [cpwd, setCPwd] = useState('');
    const [cpwdErr, setCPwdErr] = useState(false);
    const [shouldContinue, setShouldContinue] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleContinue = () => {
    if (email.trim()) {
      const [valid, text] = isValidEmail(email);
      if (valid) {
        setShouldContinue(true);
        setEmailErr([false, ""])
      } else {
        setEmailErr([true, text]);
      }
    } else {
      setEmailErr([true, "Email address cannot be empty"]);
    }
  }

  const handleSubmit = async () => {
    if (signIn) {
      if (!emailErr[0] && isValidPassword(pwd)) {
        const user = await signInWithEmailAndPassword(email, pwd);
        setPwdErr(false);
        dispatch(updateUser(user));
      } else {
        setPwdErr(true);
      }
    } else {
      if (isValidPassword(pwd)) {
        if (cpwd === pwd) {
          const user = await createUserWithEmailAndPassword(email, pwd);
          setPwdErr(false);
          setCPwdErr(false);
          dispatch(updateUser(user));
        } else {
          setCPwdErr(true);
        }
      } else {
        setPwdErr(true);
      }
    }
  }

    useEffect(() => {
      document.title = `Bestore | ${signIn ? 'Sign in' : 'Create an Account'}`
    }, [signIn]);
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="sm:w-80 w-full md:w-96 p-4 bg-gray-100 border-2 border-gray-900 rounded-md overflow-hidden">
      <h1 className="font-semibold text-xl text-center">
        {signIn ? "Sign in to your account" : "Create an account"}
      </h1>
      <button className="w-48 m-auto flex items-center justify-center gap-4 px-4 py-2 mt-6 mb-6 bg-green-900 rounded-3xl hover:bg-red-500">
        <img
          src={googleIcon}
          alt="sign in with google"
          width={25}
          height={25}
        />
        <span className="text-white">Google Sign {signIn ? 'in' : 'up'}</span>
      </button>
      <hr />
      <p className="py-4 font-semibold">Continue with email</p>
      <div className="flex flex-col">
        <div>
          <small
            className={`${emailErr[0] ? "block" : "hidden"
              } pb-2 text-red-600 font-semibold`}
          >
            *{emailErr[1]}
          </small>
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Your email address"
            className={` font-semibold transition-all px-2 py-2 outline-2 outline-gray-900 focus:outline-2 focus:outline-green-900 focus:border-none outline-none w-full rounded-md`}
          />
        </div>
        {shouldContinue == false && (
          <button
            onClick={handleContinue}
            className="w-48 m-auto bg-gray-950 text-white font-semibold rounded-3xl px-6 py-2 mt-6 shadow-sm hover:bg-red-500"
          >
            Continue
          </button>
        )}
      </div>
      {shouldContinue && (
        <div className="mt-8 flex flex-col">
          <div>
            <small
              className={`${pwdErr ? "block" : "hidden"
                } pb-2 text-red-600 font-semibold`}
            >
              *Password should be at least 6 characters long
            </small>
            <input
              type="password"
              value={pwd}
              onChange={({ target }) => setPwd(target.value)}
              placeholder="Enter password"
              className=" font-semibold transition-all px-2 py-2 outline-2 outline-gray-900 focus:outline-2 focus:outline-green-900 focus:border-none outline-none w-full rounded-md"
            />
          </div>
          {!signIn && (
            <div className="pt-8">
              <small
                className={`${cpwdErr ? "block" : "hidden"
                  } pb-2 text-red-600 font-semibold`}
              >
                *Passwords do not match
              </small>
              <input
                type="password"
                value={cpwd}
                onChange={({ target }) => setCPwd(target.value)}
                placeholder="Confirm password"
                className=" font-semibold transition-all px-2 py-2 outline-2 outline-gray-900 focus:outline-2 focus:outline-green-900 focus:border-none outline-none w-full rounded-md"
              />
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="w-48 m-auto bg-gray-950 text-white font-semibold rounded-3xl px-6 py-2 mt-6 mb-4 shadow-sm hover:bg-red-500"
          >
            {signIn ? "Sign in" : "Create account"}
          </button>
        </div>
      )}
      <div className="text-sm text-center pt-4">
        {signIn ? (
          <p>
            Don{"'"}t have account? create one{" "}
            <Link to={"/register"} className="text-blue-600 hover:underline">
              here
            </Link>
          </p>
        ) : (
          <p>
            Have an account? sign in{" "}
            <Link to={"/signin"} className="text-blue-600 hover:underline">
              here
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

AuthForm.propTypes = {
  signIn: PropTypes.bool.isRequired,
};

export default AuthForm;