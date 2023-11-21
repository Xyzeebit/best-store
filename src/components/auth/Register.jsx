import AuthForm from "./AuthForm";
import { Layout } from "../core";

const Register = () => {
    return (
      <Layout renderHeader={false}>
        <div className="flex items-center justify-center p-4 md:p-10 mb-10">
          <AuthForm signIn={false} />
        </div>
      </Layout>
    );
}

export default Register;