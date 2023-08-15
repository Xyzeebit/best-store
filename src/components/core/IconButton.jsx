import PropTypes from 'prop-types';
import { useState } from 'react';


const IconButton = ({ text, icon, onClick }) => {
    const [btnBG, setBtnBG] = useState('');

    const handleFocusGained = () => {
        setBtnBG('bg-red-100');
    }
    const handleFocusLost = () => {
        setBtnBG("");
    }

    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-center gap-1 font-bold text-sm text-gray-700 transition-all pt-1 pb-1 pl-1 pr-3 rounded-3xl ${btnBG}`}
        onMouseEnter={handleFocusGained}
        onMouseLeave={handleFocusLost}
      >
        <span className="bg-white p-2 rounded-full">
          <img src={icon} alt={text} width={15} height={15} />
        </span>
        <span>{text}</span>
      </button>
    );
}

IconButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default IconButton;