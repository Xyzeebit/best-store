import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const FlashSalesItem = ({ id, text, price, image, rating }) => (
  <Link to={`/flashsales/${id}`} className=" rounded shadow overflow-hidden">
    <div className="flex items-start justify-start bg-white">
      <div className="w-1/3 md:w-2/5 h-28">
        <img
          src={image}
          alt={text}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <div className="w-2/3 m:w-3/5 h-28 px-2 md:pl-4 lg:pl-4 bg-white">
        <div className={`font-semibold text-gray-500 h-12 overflow-hidden`}>
          {text.length > 30 ? text.substring(0, 30) + "..." : text}
        </div>
        <div className='py-2'>
         <Rating rating={rating} /> 
        </div>
        <div className="font-bold text-sm text-red-500">${price}</div>
      </div>
    </div>
  </Link>
);

FlashSalesItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number
}

export default FlashSalesItem;