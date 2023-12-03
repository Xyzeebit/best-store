import { useEffect } from "react";
import { Layout } from "../components/core";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import CartList from "../components/cart/CartList";
import cartIcon from "../assets/icons/cart-large_icon.svg";
import { createOrders } from "../redux/categoriesSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    const order = {
      orders: [],
      deliveryDetails: {},
      shippingCost: 0.0,
    };
    if (cart && cart.length > 0) {
      cart.forEach(item => {
        order.orders.push({
          id: item.id,
          title: item.title,
          price: item.prices[0],
          quantity: item.quantity,
        });
      });
    }
    dispatch(createOrders(order));
    navigate("/checkout")
  }

  useEffect(() => {
    document.title = "Bestore | Cart";
  }, []);

  return (
    <Layout renderHeader={true}>
      <div className="px-4 md:px-16 py-8">
        {cart.length > 0 ? (
          <>
            <div className="flex justify-end items-center mb-8">
              <button onClick={handleCheckout} className="text-white bg-green-900 font-semibold px-8 py-2 rounded-3xl shadow hover:bg-red-500">Checkout</button>
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
