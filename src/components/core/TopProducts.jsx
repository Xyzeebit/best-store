import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'


const PRODUCTS = [
  {
    text: "Random",
    url: "/products",
  },
  {
    text: "Phones",
    url: "/electronics/phones",
  },
  {
    text: "Laptops",
    url: "/electronics/laptops",
  },
  {
    text: "Furniture",
    url: "/furniture",
  },
  {
    text: "Gadgets",
    url: "/electronics/gadgets",
  },
  {
    text: "Shirts",
    url: "/clothes/shirt",
  },
  {
    text: "Shoes",
    url: "/footwear/shoes",
  },
  {
    text: "Games",
    url: "/toys-and-games",
  },
  {
    text: "Bags",
    url: "/bags",
  },
  {
    text: "Books",
    url: "/books-and-stationeries",
  },
  {
    text: "Beauty",
    url: "/beauty",
  },
  {
    text: "Toys",
    url: "/toys-and-games",
  },
  {
    text: "Stationeries",
    url: "/books-and-stationeries",
  },
  {
    text: "Travel",
    url: "/travel",
  },
];

const TopProducts = () => {
    return (
        <div className="px-4 md:px-16 py-4">
            <h1 className="font-bold text-xl text-green-900">Top Product Categories</h1>
            <div className="py-4 flex items-start justify-start gap-4 overflow-auto top-pro">
                {PRODUCTS.map(({ text, url }) => (
                    <ProductLink key={text + url} text={text} url={url} />
                )) }
            </div>
        </div>
    );
}

const ProductLink = ({ text, url }) => (
  <NavLink
    to={url}
    className={({ isActive }) =>
      isActive
        ? "bg-green-900 text-white rounded-3xl px-4 py-1"
        : "text-green-900 text-xsm font-bold bg-white hover:bg-green-900 hover:text-white border-2 border-green-900 rounded-3xl px-4 py-1"
    }
  >
    {text}
  </NavLink>
);

ProductLink.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default TopProducts;