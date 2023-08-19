import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ProductCard = ({ url, title, image, prices, ratings }) => {
    return (
        <div>
            <div>
                <img src={image} alt={title} width={80} height={60} />
            </div>
            <div>
                <div>{title}</div>
                <div>
                    <div>{prices[0]}</div>
                    <div><s>{prices[1]}</s></div>
                </div>
                {ratings && <div>{ratings}</div>}
            </div>
            <div>
                <Link to={url}>Add to Cart</Link>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    prices: PropTypes.array.isRequired,
    ratings: PropTypes.number,
}

export default ProductCard;
