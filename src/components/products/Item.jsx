import Rating from '../core/Rating'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ id, text, price, image, ratings }) => {
    return (
      <div>
        <div>
          <img src={image} alt={text} width={150} height={100} />
        </div>
        <div>
          <Link to={`/products/${id}`}>{text}</Link>
          <p>{price}</p>
          <div />
          <div>
            {ratings ? (
              <div>
                <small>Reviews</small>
                <Rating rating={ratings} />
              </div>
            ) : (
              <div>
                <small>No reviews</small>
              </div>
            )}
          </div>
          <div>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ratings: PropTypes.number,
};

export default Item;