import AuthForm from "./AuthForm";


const Register = () => {
    return (
      <div className="flex items-center justify-center p-4 md:p-10">
        <AuthForm signIn={false} />
      </div>
    );
}

export default Register;