import PropTypes from "prop-types";
import { useEffect, useRef, useState } from 'react';
import visaIcon from "../../assets/icons/visa_icon.svg";
import mastercardIcon from "../../assets/icons/mastercard_icon.svg";
import paypalIcon from "../../assets/icons/paypal_icon.svg";
import gpayIcon from "../../assets/icons/gpay_icon.svg";
import editIcon from "../../assets/icons/edit-2-icon.svg";


const CheckoutPanel = ({ orders }) => {
  const [edit, setEdit] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [applyCoupon, setApplyCoupon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [total, setTotal] = useState({
    subTotal: 0.00, totalTax: 0.00, total: 0.00
  });
  const TAX_RATE = 1.05; // 5% tax rate
  const COUPON = 100.00; // coupon amount

  const handleSubmit = () => {
    console.log("order placed")
  }

  useEffect(() => {
    if (orders && orders.orders) {
      let subTotal = 0;
      orders.orders.forEach(order => {
        subTotal += parseFloat(order.price * order.quantity)
      });
      let totalTax = subTotal * TAX_RATE;
      let total = totalTax;
      if (applyCoupon) {
        total -= COUPON;
      }
      total += orders.shippingCost;
      setTotal({ subTotal, totalTax, total });
    }
  }, [orders, applyCoupon]);

  return (
    <div className="px-4 md:px-16 py-12">
      <div className="flex justify-center gap-6 items-start flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-white p-4 rounded shadow">
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
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-bold py-4">
                Delivery Information
              </h2>
              <button className="" onClick={() => setEdit(!edit)}>
                <img src={editIcon} width={20} height={20} alt="Edit delivery information" />
              </button>
            </div>
            <DeliveryAddress deliveryInfo={orders.deliveryDetails} edit={edit} />
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
            {coupon && coupon.length > 5 && <button
              role="button"
              type="button"
              onClick={() => setApplyCoupon(!applyCoupon)}
              className={`w-40 text-white text-xs rounded-3xl ${
                applyCoupon ? "bg-red-500" : "bg-green-900"
              } py-2 shadow-lg`}
            >
              {applyCoupon ? "Coupon applied" : "Apply coupon"}
            </button>}
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
            {paymentMethod === "card" && <CardForm />}
            <div>
              <p className="text-gray-800 font-bold pt-8 pb-4">
                Checkout Total
              </p>
              <div className="flex justify-between items-center px-2 py-1">
                <span className="font-semibold">Sub Total</span>
                <span className="text-green-900 font-medium">
                  ${total.subTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center px-2 py-1">
                <span className="font-semibold">Tax(5%)</span>
                <span className="text-green-900 font-medium">
                  ${total.totalTax.toFixed(2)}
                </span>
              </div>
              {applyCoupon && (
                <div className="flex justify-between items-center px-2 py-1">
                  <span className="font-semibold">Coupon Discount</span>
                  <span className="text-green-900 font-medium">-${COUPON.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center px-2 py-1">
                <span className="font-semibold">Shipping Fee</span>
                <span className="text-green-900 font-medium">
                  ${orders.shippingCost.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 px-2 py-1 mt-10 bg-gray-50">
                <span className="font-semibold">Total</span>
                <span className="text-green-900 font-medium text-lg">
                  ${total.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-center">
            <button
              className="px-8 py-2 hover:bg-green-700 shadow-sm font-semibold text-sm rounded-3xl bg-green-900 text-white"
            >
              Checkout
            </button>
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
      ${(price * quantity).toFixed(2)}
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

const Value = ({ label, text, showForm, value, handler }) => {
  return (
    <div className="w-full mb-2">
      <div className="rounded-tr-md bg-gray-200 w-32 text-xs text-gray-500 p-1 font-semibold">
        {label}
      </div>
      {!showForm && <div className={`bg-gray-50 text-gray-900 ${text ? 'p-1' : ''}`}>{text}</div>}
      {(!text || showForm) && (
        <div className="w-full h-10 font-semibold border">
          <input
            type="text"
            value={value}
            onChange={handler}
            className="w-full h-10 px-4 font-semibold border outline-none focus:shadow-outline focus:bg-gray-100"
          />
        </div>
      )}
    </div>
  );
}

Value.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
  value: PropTypes.string,
  handler: PropTypes.object.isRequired
}

const DeliveryAddress = ({ deliveryInfo, edit }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="w-full">
      <div className="md:flex gap-4 justify-start items-center">
        <Value
          label="First name"
          text={null}
          showForm={edit}
          value={firstname}
          handler={({ target }) => setFirstname(target.value)}
        />
        <Value
          label="Last name"
          text={deliveryInfo.lastname}
          showForm={edit}
          value={lastname}
          handler={({ target }) => setLastname(target.value)}
        />
      </div>
      <Value
        label="Address"
        text={deliveryInfo.address}
        showForm={edit}
        value={address}
        handler={({ target }) => setAddress(target.value)}
      />
      <div className="md:flex gap-4 justify-start items-center">
        <Value
          label="City"
          text={deliveryInfo.city}
          showForm={edit}
          value={city}
          handler={({ target }) => setCity(target.value)}
        />
        <Value
          label="Zip Code"
          text={deliveryInfo.zipCode}
          showForm={edit}
          value={zipCode}
          handler={({ target }) => setZipCode(target.value)}
        />
      </div>
      <Value
        label="Phone"
        text={deliveryInfo.phone}
        showForm={edit}
        value={phone}
        handler={({ target }) => setPhone(target.value)}
      />
      <Value
        label="Email"
        text={deliveryInfo.email}
        showForm={edit}
        value={email}
        handler={({ target }) => setEmail(target.value)}
      />
    </div>
  );
}

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
  edit: PropTypes.bool.isRequired,
};

CheckoutPanel.propTypes = {
  orders: PropTypes.objectOf({
    orders: PropTypes.array.isRequired,
    deliveryDetails: PropTypes.array.isRequired,
    shippingCost: PropTypes.number.isRequired,
  })
}

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expire, setExpire] = useState("");
  const [cvv, setCVV] = useState("");
  const cardRef = useRef();

  const handleCardNumber = ({target}) => {
    if (target.value.length <= 16) {
      setCardNumber(target.value.trim());
    }
  }
  const handleExpire = ({target}) => {
    if (target.value.length < 5) {
      setExpire(target.value);
    }
  }
  const handleCVV = ({ target }) => {
    if (cvv.length < 3) {
      setCVV(target.value);
    }
  };

  const insertBar = ({ target }) => {
    if (target.value.length > 2 && target.value.indexOf("/") === -1) {
      setExpire(target.value.substring(0, 2) + "/" + target.value.substring(2));
    }
  }

  return (
    <fieldset className="bg-gray-50 m-auto px-4 py-8 mt-6 border rounded-md">
      <div className="mb-8">
        <input
          type="number"
          value={cardNumber}
          placeholder="Card number"
          size={16}
          ref={cardRef}
          onChange={handleCardNumber}
          className="w-full h-10 px-4 font-semibold border outline-none appearance-none"
        />
      </div>
      <div className="flex items-center justify-around gap-12">
        <input
          type="text"
          value={expire}
          placeholder="MM/YY"
          onChange={handleExpire}
          onBlur={insertBar}
          className="w-full h-10 px-4 font-semibold border outline-none appearance-none"
        />
        <input
          type="number"
          value={cvv}
          placeholder="CVV"
          onChange={handleCVV}
          className="w-full h-10 px-4 font-semibold border outline-none appearance-none"
        />
      </div>
    </fieldset>
  );
}

export default CheckoutPanel;
