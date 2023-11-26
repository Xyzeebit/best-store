import PropTypes from "prop-types";
import { useState } from 'react';
import visaIcon from "../../assets/icons/visa_icon.svg";
import mastercardIcon from "../../assets/icons/mastercard_icon.svg";
import paypalIcon from "../../assets/icons/paypal_icon.svg";
import gpayIcon from "../../assets/icons/gpay_icon.svg";

const CheckoutPanel = ({ orders }) => {
  const [coupon, setCoupon] = useState('');
  const [applyCoupon, setApplyCoupon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = () => {

  }

  return (
    <div className="px-4 md:px-16 py-12">
      <div className="flex justify-center gap-6 items-start flex-col md:flex-row">
        <div className="md:w-1/2 bg-white p-4 rounded shadow">
          <div>
            <h1 className="text-gray-800 font-bold py-4">
              Review items and shipping
            </h1>
            <ul>
              {orders &&
                orders.orders.map((order) => (
                  <Order key={order.id} {...order} />
                ))}
            </ul>
          </div>

          <div className="pt-6">
            <h2 className="text-gray-800 font-bold py-4">
              Delivery Information
            </h2>
            <DeliveryAddress deliveryInfo={orders.deliveryDetails} />
          </div>
        </div>

        <form
          className="md:w-1/2 bg-white p-4 rounded shadow"
          onSubmit={handleSubmit}
        >
          <h1 className="text-gray-800 font-bold py-4">Order Summary</h1>
          <div className="border-2 flex rounded-full overflow-hidden">
            <input
              className="w-full h-10 px-4 outline-none font-semibold"
              type="text"
              value={coupon}
              placeholder="Enter coupon code"
              onChange={({ target }) => setCoupon(target.value)}
            />
            <button
              role="button"
              type="button"
              onClick={() => setApplyCoupon(!applyCoupon)}
              className={`w-40 text-white text-xs rounded-3xl ${
                applyCoupon ? "bg-red-500" : "bg-green-900"
              } py-2 shadow-lg`}
            >
              Apply coupon
            </button>
          </div>
          <p className="text-gray-800 font-bold pt-8 pb-4">Payment Methods</p>
          <div>
            <ul>
              <li className="flex items-center justify-start gap-3 pb-2">
                <input
                  type="radio"
                  name="payment"
                  onChange={() => setPaymentMethod("cash")}
                  value={paymentMethod}
                  id="cash"
                  className="w-5 h-5"
                />
                <label htmlFor="cash" className="text-green-900 font-semibold">
                  Cash on Delivery
                </label>
              </li>
              <li className="flex items-center justify-start gap-3 pb-2">
                <input
                  type="radio"
                  name="payment"
                  onChange={() => setPaymentMethod("gpay")}
                  value={paymentMethod}
                  id="gpay"
                  className="w-5 h-5"
                />
                <label htmlFor="gpay" className="text-green-900 font-semibold">
                  Google Pay
                </label>
              </li>
              <li className="flex items-center justify-start gap-3 pb-2">
                <input
                  type="radio"
                  name="payment"
                  onChange={() => setPaymentMethod("paypal")}
                  value={paymentMethod}
                  id="paypal"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="paypal"
                  className="text-green-900 font-semibold"
                >
                  Paypal
                </label>
              </li>
              <li className="flex items-center justify-start gap-3 pb-2">
                <input
                  type="radio"
                  name="payment"
                  onChange={() => setPaymentMethod("card")}
                  value={paymentMethod}
                  id="card"
                  className="w-5 h-5"
                />
                <label htmlFor="card" className="text-green-900 font-semibold">
                  Credit or Debit Card
                </label>
              </li>
            </ul>
            <div className="flex justify-center items-center gap-4">
              <img src={visaIcon} alt="visa card" width={35} height={25} />
              <img
                src={mastercardIcon}
                alt="visa card"
                width={35}
                height={25}
              />
              <img src={gpayIcon} alt="visa card" width={35} height={25} />
              <img src={paypalIcon} alt="visa card" width={35} height={25} />
            </div>
            {paymentMethod && (
              <div>payment method form here | card by default</div>
            )}
            <div>
              <p className="text-gray-800 font-bold pt-8 pb-4">
                Checkout Total
              </p>
              <div className="flex justify-between items-center px-2 py-1">
                <span className="font-semibold">Sub Total</span>
                <span className="text-green-900 font-medium">${"1000.00"}</span>
              </div>
              <div className="flex justify-between items-center px-2 py-1">
                <span className="font-semibold">Tax(5%)</span>
                <span className="text-green-900 font-medium">${"1050.00"}</span>
              </div>
              {applyCoupon && (
                <div className="flex justify-between items-center px-2 py-1">
                  <span className="font-semibold">Coupon Discount</span>
                  <span className="text-green-900 font-medium">
                    ${"-100.00"}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center px-2 py-1">
                <span className="font-semibold">Shipping Fee</span>
                <span className="text-green-900 font-medium">${"0.00"}</span>
              </div>
              <div className="flex justify-between items-center border-b-2 px-2 py-1 mt-10 bg-gray-50">
                <span className="font-semibold">Total</span>
                <span className="text-green-900 font-medium text-lg">${"1050.00"}</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Order = ({ title, price, quantity }) => (
  <div className="border rounded bg-gray-100 mb-4">
    <p className="font-bold px-2 pt-2 text-gray-800">{title}</p>
    <p className="text-green-900 px-2 text-sm font-semibold text-right">
      ${price}
    </p>
    <small className="block bg-gray-200 p-2 font-semibold text-right text-xs text-gray-900">
      Quantity: {quantity}
    </small>
  </div>
);

Order.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

const Value = ({ label, text }) => (
  <div className="w-full mb-2">
    <div className="rounded-tr-md bg-gray-200 w-40 text-xs text-gray-500 p-1 font-semibold">{label}</div>
    <div className="p-1 bg-gray-50 text-gray-900">{text}</div>
  </div>
)

Value.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const DeliveryAddress = ({ deliveryInfo }) => (
  <div className="">
    <div className="flex gap-4 justify-start items-center">
      <Value label="First name" text={deliveryInfo.firstname} />
      <Value label="Last name" text={deliveryInfo.lastname} />
    </div>
    <Value label="Address" text={deliveryInfo.address} />
    <div className="flex gap-4 justify-start items-center">
      <Value label="City" text={deliveryInfo.city} />
      <Value label="Zip Code" text={deliveryInfo.zipCode} />
    </div>
    <Value label="Phone" text={deliveryInfo.phone} />
    <Value label="Email" text={deliveryInfo.email} />
  </div>
);

DeliveryAddress.propTypes = {
  deliveryInfo: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

CheckoutPanel.propTypes = {
  orders: PropTypes.objectOf({
    orders: PropTypes.array.isRequired,
    deliveryDetails: PropTypes.array.isRequired
  })
}

export default CheckoutPanel;
