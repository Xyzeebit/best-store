import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FlashSalesItem = ({ id, text, price, image }) => (
  <Link
    to={`/flashsales/${id}`}
    className="col-span-3 md:col-span-1 h-32 md:h-28 bg-red-500 rounded-lg shadow overflow-hidden"
  >
    <div className='bg-white h-30 md:h-28'>
      <div className='h-20 md:h-18'>
        <img src={image} alt={text} width={100} height={100} className='w-full h-full' />
      </div>
      <div className="px-2 md:px-1 lg:px-2 bg-yellow-200">
        <div className="font-bold text-sm text-red-500">${price}</div>
        <div className="text-xsm text-semibold text-gray-500 truncate">{text}</div>
      </div>
    </div>
  </Link>
);

FlashSalesItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default FlashSalesItem;