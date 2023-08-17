import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const CategoryItem = ({ text, image, category }) => (
  <div className="flex flex-col items-center justify-center gap-2 shadow-sm rounded-lg bg-white">
    <div className="flex items-center justify-center rounded-full w-40 overflow-hidden">
      <img
        src={image}
        alt={text}
        width={50}
        height={50}
        className="object-fill h-25 w-full transition-all hover:scale-110"
      />
    </div>
    <div className="font-bold text-sm text-gray-700 p-2">{text}</div>
    <Link to={category} className="bg-green-900 text-white text-sm hover:bg-green-700 px-8 py-2 mb-4 rounded-3xl">
      Shop now
    </Link>
  </div>
);

CategoryItem.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}

export default CategoryItem;