import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const FlashSalesItem = ({ id, title, price, image, rating }) => (
  <Link to={`/flashsales/${id}`} className=" rounded shadow overflow-hidden">
    <div className="flex items-start justify-start bg-white">
      <div className="w-1/3 md:w-2/5 h-28">
        <img
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <div className="w-2/3 m:w-3/5 h-28 px-2 md:pl-4 lg:pl-4 bg-white">
        <div className={`font-semibold title-gray-500 h-12 overflow-hidden`}>
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </div>
        <div className='py-2'>
         <Rating rating={rating} /> 
        </div>
        <div className="font-bold title-sm title-red-500">${price}</div>
      </div>
    </div>
  </Link>
);

FlashSalesItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number
}

export default FlashSalesItem;