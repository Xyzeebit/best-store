import PropTypes from "prop-types";
import { removeFromCart, updateCartItem } from "../../redux/collectionsSlice";
import { useDispatch } from "react-redux";
import deleteIcon from "../../assets/icons/delete-icon.svg";
import minus from "../../assets/icons/minus-circle-icon.svg";
import plus from "../../assets/icons/plus-circle-icon.svg";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  }
  const changeQuantity = (increase) => {
    if (increase) {
      if (item.quantityLeft > item.quantity) {
        dispatch(updateCartItem({ quantity: item.quantity + 1, id: item.id }));
      }
    } else {
      if (item.quantity > 1) {
        dispatch(updateCartItem({ quantity: item.quantity - 1, id: item.id }));
      }
    }
  };

  return (
    <div className="bg-white shadow p-4 md:mb-8 rounded-sm w-80">
      <button
        className="flex gap-1 items-center justify-start text-sm underline text-gray-500"
        onClick={handleRemove}
      >
        <img
          src={deleteIcon}
          alt="remove item from cart"
          width={15}
          height={15}
        />
        <span>remove</span>
      </button>
      <div className="flex gap-4 items-center justify-start">
        <div className="rounded overflow-hidden">
          <img src={item.images[0]} alt={item.title} width={100} height={100} />
        </div>
        <div>
          <p className="text-sm text-gray-900 font-bold">{item.title}</p>
          <p className="text-md font-semibold text-green-900">${(item.price * item.quantity).toFixed(2)}</p>
          <p className="text-xs text-gray-900">Quantity: {item.quantity}</p>
          <div className="pt-2">
            <QuantityButton
              quantity={item.quantity}
              setQuantity={changeQuantity}
            />
          </div>
        </div>
      </div>
      <p className="text-xs text-right text-gray-900 pt-2 pr-2 rounded">Only { item.quantityLeft } item(s) left</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantityLeft: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
  }).isRequired,
};

export default CartItem;

const QuantityButton = ({ quantity, setQuantity }) => (
  <div className="flex justify-center items-center gap-3">
    <button
      className="shadow-sm rounded-full p-1"
      onClick={() => setQuantity(false)}
    >
      <img src={minus} alt="Reduce quantity to buy" width={30} height={30} />
    </button>
    <div className="w-8 h-8 border-2 border-black text-sm rounded flex items-center justify-center">
      {quantity}
    </div>
    <button
      className="shadow-sm rounded-full p-1"
      onClick={() => setQuantity(true)}
    >
      <img src={plus} alt="Increase quantity to buy" width={30} height={30} />
    </button>
  </div>
);

QuantityButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func,
};
