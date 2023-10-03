import AuthForm from "./AuthForm";


const Signin = () => {
    return (
        <div className="flex items-center justify-center p-4 md:p-10">
            <AuthForm signIn={true} />
        </div>
    );
}

export default Signin;