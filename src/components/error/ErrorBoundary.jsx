import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Layout } from "../core";
import errorImage from "../../assets/no-signal.png";

const Error = ({ message, path }) => (
  <div className="h-full">
    <div>
      <img
        src={errorImage}
        alt={() => console.log(message)}
        width={150}
        height={100}
        className="m-auto"
      />
    </div>
    <div className="font-bold text-3xl text-center text-gray-900">{message}</div>
    <div className="inline-flex items-center justify-center w-full mt-8 mb-12">
      <Link to={path} className="bg-green-900 hover:bg-red-500 text-white px-8 py-2 rounded-3xl shadow">
        Return home
      </Link>
    </div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const ErrorBoundary = ({message, path}) => <Layout renderHeader={true}>
  <Error message={message} path={path} />
</Layout>

ErrorBoundary.propTypes = {
  message: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ErrorBoundary;