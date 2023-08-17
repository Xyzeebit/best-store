import PropTypes from "prop-types";

const ImageButton = ({ text, image }) => (
  <div className="flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md p-2 rounded-lg bg-white">
    <div className="flex items-center justify-center rounded-full">
      <img src={image} alt={text} width={50} height={50} className="w-20" />
    </div>
    <div className="font-bold text-sm text-gray-700">{text}</div>
  </div>
);

ImageButton.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string.isRequired,
}

export default ImageButton;