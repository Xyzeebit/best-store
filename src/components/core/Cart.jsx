import { Link } from "react-router-dom";
import cartIcon from '../../assets/icon-cart.png';

const Cart = () => {
    return (
        <Link to="/checkout" className="flex items-center justify-center gap-2 font-bold">
            <img src={cartIcon} alt="cart" width={20} height={20} />
            <span>Cart</span>
        </Link>
    );
}

export default Cart;
