import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchItem = ({ id, title, image, price }) => (
    <Link to={`/products/${id}`}>
        <img src={image} alt={title} width={20} height={20} className="" />
        <div>{title}</div>
        <div>{price}</div>
    </Link>
);

SearchItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
}

export default SearchItem;