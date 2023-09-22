import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cartIcon from '../../assets/icon-cart.png';
// import cartIcon from '../../assets/icons/cart-large_icon.svg';

const Cart = ({ items }) => {
    return (
      <Link to="/checkout" className="flex items-center justify-center gap-1">
        <img src={cartIcon} alt="cart" width={15} height={15} />
        {items > 0 ? (
          <span className="bg-green-900 w-5 h-5 rounded-full flex justify-center items-center text-white text-xsm">
            {items}
          </span>
        ) : (
          <>
            <span className="flex md:hidden bg-green-900 w-5 h-5 rounded-full justify-center items-center text-white text-xsm">
              {items ?? 0}
            </span>
            <span className="hidden md:block font-bold text-green-900 text-sm">
              Cart
            </span>
          </>
        )}
      </Link>
    );
}

Cart.propTypes = {
    items: PropTypes.number.isRequired,
}

export default Cart;
