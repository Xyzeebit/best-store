import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import ProductList from "../products/ProductList";
import { LINKS } from "../../api/collections-api";


const TopProducts = ({ category, data }) => {
  
  return (
    <div className="px-4 md:px-16 py-8">
      <h1 className="font-bold text-xl text-green-900 pb-2">Top Product Categories</h1>
      <div className="py-4 flex items-start justify-start gap-4 overflow-auto top-pro">
        {LINKS.map(({ text, url }) => (
          <ProductLink key={text + url} text={text} url={url} />
        ))}
      </div>
      <ProductList category={category} data={data} />
    </div>
  );
}

const ProductLink = ({ text, url }) => (
  <NavLink
    to={url}
    className={({ isActive }) =>
      isActive
        ? "bg-green-900 text-white rounded-3xl px-4 py-1 shadow"
        : "text-green-900 text-xsm font-bold bg-white hover:bg-red-500 hover:border-red-500 hover:text-white border-2 border-green-900 rounded-3xl px-4 py-1 shadow"
    }
  >
    {text}
  </NavLink>
);

TopProducts.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

ProductLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TopProducts;