import { useEffect } from "react";
import { Layout } from "../components/core";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import CartList from "../components/cart/CartList";
import cartIcon from "../assets/icons/cart-large_icon.svg";

const Cart = () => {
  const { cart } = useSelector((state) => state.categories);

  useEffect(() => {
    document.title = "Bestore | Cart";
  }, []);

  return (
    <Layout renderHeader={true}>
      <div className="px-4 md:px-16 py-8">
        {cart.length > 0 ? (
          <>
            <div className="flex justify-end items-center mb-8">
              <Link to="/checkout" className="text-white bg-green-900 font-semibold px-8 py-2 rounded-3xl shadow hover:bg-red-500">Checkout</Link>
            </div>
            <CartList items={cart} />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center pb-24">
            <img src={cartIcon} alt="empty cart" width={200} height={150} />
            <p className="text-gray-900 text-xl font-extralight">
              You have no items in your cart
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
