import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DealsItem = ({id, text, price, image, styles}) => (
    <Link to={`/deals/${id}`} className={"relative overflow-hidden " + styles}>
        <div className={""}>
            <img src={image} alt={text} width={100} height={50} className="object-fill w-full h-full" />
            <div className="absolute left-2 right-2 bottom-2 m-auto text-sm font-semibold bg-gray-300 opacity-75 p-2 rounded-lg text-center text-green-900 truncate shadow-md">{text}</div>
            <div className="absolute top-0 right-0 w-16 p-2 bg-green-900 opacity-75 text-sm text-white font-semibold shadow">${price}</div>
        </div>
    </Link>
)

DealsItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    styles: PropTypes.string,
}

export default DealsItem;