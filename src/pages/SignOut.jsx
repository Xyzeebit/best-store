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
            const ok = await signout();
            if (ok) {
                dispatch(updateUser({ isLoggedIn: false }));
                navigate('/')
            }
        })();
    }, [navigate, dispatch]);
}

export default SignOut;