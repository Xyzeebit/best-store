import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// import { addToCart } from "../../redux/categoriesSlice";
// import { useDispatch } from "react-redux";

const ProductCard = ({ id, title, image, prices }) => {
    // const dispatch = useDispatch();
    // const handleAddToCart = item => {
    //     dispatch(addToCart({ item }));
    // }
    return (
        <div className="rounded-md shadow-lg bg-white relative">
            <div className="w-48 h-32 md:w-56 md:h-48">
                <img src={image} alt={title} width={80} height={60} className="object-fit w-full h-32 md:h-48 rounded-t-md" />
            </div>
            <div className="p-2">
                <Link to={`/products/${id}`} className="font-bold text-sm md:text-md text-gray-700">{title}</Link>
                <div className="flex gap-4 py-2">
                    <div className="font-bold text-lg text-green-900">${prices[0]}</div>
                    {prices[1] && <div className="text-sm text-red-500"><s>${prices[1]}</s></div>}
                </div>
                {/* {ratings && <div>{ratings}</div>} */}
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    prices: PropTypes.array.isRequired,
    // ratings: PropTypes.number,
}

export default ProductCard;
