import PropTypes from "prop-types";

const TopProductsList = ({ title, children }) => (
  <div className="px-4 md:px-16 py-8">
    <h2 className="font-bold text-green-700 text-lg pb-4">{title}</h2>
    <div className="top-pro flex items-start justify-start overflow-auto gap-4 md:gap-12 py-4">
      {children}
    </div>
  </div>
);


TopProductsList.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default TopProductsList;