import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, image, prices, ratings }) => {
    const handleAddToCart = item => {
        alert(item.title + " at $" + item.prices[0])
    }
    return (
        <div className="rounded-md shadow-lg bg-yellow-50">
            <div className="w-56 h-48">
                <img src={image} alt={title} width={80} height={60} className="object-fit w-full h-48 rounded-t-md" />
            </div>
            <div className="p-2">
                <Link to={`/products/${id}`} className="font-bold text-green-900">{title}</Link>
                <div className="flex gap-4 py-2">
                    <div className="text-sm font-bold text-gray-700">${prices[0]}</div>
                    {prices[1] && <div className="text-sm text-red-500"><s>${prices[1]}</s></div>}
                </div>
                {ratings && <div>{ratings}</div>}
            </div>
            <div className="flex items-center justify-center pb-4">
                <button className="rounded-full border-2 border-solid border-green-900 px-4 py-2 text-green-900 text-sm hover:bg-green-900 hover:text-white" onClick={() => handleAddToCart({id, image, title, prices})}>Add to Cart</button>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    prices: PropTypes.array.isRequired,
    ratings: PropTypes.number,
}

export default ProductCard;
