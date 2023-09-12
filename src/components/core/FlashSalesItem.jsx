import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FlashSalesItem = ({ id, text, price, image }) => (
  <Link
    to={`/flashsales/${id}`}
    className="col-span-3 md:col-span-1 h-24 bg-red-500 rounded-lg shadow truncate"
  >
    <div className='bg-white h-24'>
      <div className='h-14'>
        <img src={image} alt={text} width={100} height={100} className='w-full' />
      </div>
      <div className="px-2 md:px-1 lg:px-2">
        <div className="font-bold text-sm text-red-500">${price}</div>
        <div className="text-xsm text-semibold text-gray-500">{text}</div>
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