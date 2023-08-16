import PropTypes from "prop-types";

const ImageButton = ({ text, image }) => (
  <div>
    <div>
      <img src={image} alt={text} width={50} height={50} />
    </div>
    <div>{text}</div>
  </div>
);

ImageButton.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string.isRequired,
}

export default ImageButton;