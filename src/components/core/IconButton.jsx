import PropTypes from 'prop-types';

const IconButton = ({ text, icon, onClick }) => (
    <button onClick={onClick} className='flex items-center justify-center gap-2 font-bold'>
        <img src={icon} alt={text} width={20} height={20} />
        <span>{text}</span>
    </button>
);

IconButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default IconButton;