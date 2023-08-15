import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import errorImage from "../../assets/no-signal.png";

const ErrorBoundary = ({ message, path }) => (
  <div className="h-full">
    <div>
      <img
        src={errorImage}
        alt={message}
        width={100}
        height={100}
        className="m-auto"
      />
    </div>
    <div className="text-center text-gray-400">{message}</div>
    <div className="inline-flex items-center justify-center w-full mt-4">
      <Link to={path} className="bg-blue-700 hover:bg-blue-500 text-white px-8 py-2 rounded-xl">
        retry
      </Link>
    </div>
  </div>
);

ErrorBoundary.propTypes = {
  message: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ErrorBoundary;