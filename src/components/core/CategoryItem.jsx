import PropTypes from "prop-types";


const CategoryItem = ({ text, image }) => (
  <div className="overflow-hidden w-48 h-48 border-2 border-green-900 relative flex flex-col items-center justify-center gap-2 shadow-sm rounded-lg">
    <div className="absolute ml-8 insert-0 h-full">
      <img
        src={image}
        alt={text}
        className="object-fill h-full w-full transition-all hover:scale-110"
      />
    </div>

    <div className="absolute top-3 z-10 text-green-900 font-bold">{text}</div>
  </div>
);

CategoryItem.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string.isRequired,
}

export default CategoryItem;