import PropTypes from "prop-types";

const orders = [
  {
    id: "kdskj0jn",
    price: "150.45",
    title: "iWatch",
    quantity: 1,
  },
  {
    id: "kdskj09jn",
    price: "850.00",
    title: "Laptop XS-119",
    quantity: 2,
  },
];

const CheckoutPanel = () => {
  return (
    <div className="px-4 md:px-16 py-12">
      <div className="flex justify-center gap-6 items-start flex-col md:flex-row">
        <div className="md:w-1/2 bg-white p-4 rounded shadow">
          <div>
            <h1 className="text-gray-800 font-bold py-4">
              Review items and shipping
            </h1>
            <ul>
              {orders.map((order) => (
                <Order key={order.id} {...order} />
              ))}
            </ul>
          </div>

          <div className="pt-6">
            <h2 className="text-gray-800 font-bold py-4">
              Delivery Information
            </h2>
            <DeliveryAddress />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1>Order Summary</h1>
          <div>
            <input type="text" placeholder="Enter coupon code" />
            <button>Apply coupon</button>
          </div>
          <p>Payment Methods</p>
          <div>
            <ul>
              <li>Cash on Delivery</li>
              <li>Shopcart Card</li>
              <li>Paypal</li>
              <li>Credit or Debit Card</li>
            </ul>
            <div>
              <img />
              <img />
              <img />
            </div>
            <div>payment method form here | card by default</div>
            <div>total</div>
          </div>
        </div>
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
  quantity: PropTypes.string.isRequired,
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

const DeliveryAddress = () => (
  <div className="">
    <div className="flex gap-4 justify-start items-center">
      <Value label="First name" text="Donald" />
      <Value label="Last name" text="Sunday" />
    </div>
    <Value label="Address" text="123 Fake Street" />
    <div className="flex gap-4 justify-start items-center">
      <Value label="City/Town" text="Uyo" />
      <Value label="Zip/Post Code" text="50012" />
    </div>
    <Value label="Phone" text="+234 0903 137 2176" />
    <Value label="Email" text="gotodonald@gmail.com" />
  </div>
);

export default CheckoutPanel;
