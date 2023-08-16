import PropTypes from "prop-types";

const ImageButton = ({ text, image }) => (
  <div className="flex flex-col items-center justify-center gap-2 shadow-md p-2 rounded-lg">
    <div className="bg-gray-200 flex items-center justify-center rounded-full p-2">
      <img src={image} alt={text} width={50} height={50} />
    </div>
    <div className="font-bold text-gray-700">{text}</div>
  </div>
);

ImageButton.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string.isRequired,
}

export default ImageButton;