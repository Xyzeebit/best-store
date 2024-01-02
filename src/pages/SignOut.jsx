import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { signout } from "../api/apis";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";

const SignOut = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { error } = await signout();
            if (!error) {
                dispatch(updateUser({ isLoggedIn: false }));
                navigate('/')
            }
        })();
    }, [navigate, dispatch]);
}

export default SignOut;