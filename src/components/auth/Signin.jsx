import { Layout } from "../core";
import AuthForm from "./AuthForm";


const Signin = () => {
    return (
      <Layout>
        <div className="flex items-center justify-center p-4 md:p-10 mb-10">
          <AuthForm signIn={true} />
        </div>
      </Layout>
    );
}

export default Signin;