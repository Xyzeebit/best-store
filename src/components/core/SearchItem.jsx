import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchItem = ({ id, title, image }) => (
  <Link to={`/products/${id}`} className="bg-white flex items-center justify-start gap-4 px-4 py-2 border-b-2 hover:bg-gray-200">
    <img src={image} alt={title} width={20} height={30} className="" />
    <div className='font-bold text-sm text-gray-700'>{title}</div>
  </Link>
);

SearchItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
}

export default SearchItem;