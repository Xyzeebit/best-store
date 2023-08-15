import PropTypes from "prop-types";

const Wrapper = ({ children }) => (
  <div className="inline-flex items-center justify-center gap-8">
    {children}
  </div>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper;