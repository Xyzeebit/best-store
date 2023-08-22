import PropTypes from "prop-types";


const CategoryItem = ({ text, image }) => (
  <div className="overflow-hidden w-48 h-48 border-2 border-green-900 relative shadow-sm rounded-lg">
    <div className="absolute insert-0">
      <img
        src={image}
        alt={text}
        width={200}
        height={200}
        className="object-fit h-48 w-full transition-all hover:scale-110"
      />
    </div>

    <div className="absolute top-3 left-0 right-0 z-10 text-center text-green-900 font-bold">{text}</div>
  </div>
);

CategoryItem.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string.isRequired,
}

export default CategoryItem;