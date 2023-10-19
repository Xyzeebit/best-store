import Rating from '../core/Rating'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ id, title, price, image, ratings, category }) => {
    return (
      <div className="shadow rounded overflow-hidden">
        <div className="h-32 overflow-hidden">
          <img
            src={image}
            alt={title}
            width={150}
            height={100}
            className="object-fit w-full h-32"
          />
        </div>
        <div className="p-2">
          <div className="truncate font-semibold text-sm text-green-900 hover:underline">
            <Link to={`/${category}/${id}`}>{title}</Link>
          </div>
          <p className="text-red-500 font-semibold">USD {price}</p>
          <div className="text-sm text-gray-500">
            {ratings ? (
              <div>
                <small>Reviews</small>
                <div className="py-[1px] bg-gray-300 mb-[4px]" />
                <Rating rating={ratings} />
              </div>
            ) : (
              <div>
                <small>No reviews</small>
                <div className="py-[1px] bg-gray-300 mb-[4px]" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center pt-2">
            <button className="font-semibold text-xsm text-gray-500 px-4 py-1 rounded-3xl bg-white border-2 border-gray-400 hover:bg-red-500 hover:border-red-500 hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    ratings: PropTypes.number,
};

export default Item;