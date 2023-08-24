import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from "react-router-dom";



const LinkIconButton = ({ text, icon, to }) => {
    const [btnBG, setBtnBG] = useState('');
    const [textColor, setTextColor] = useState('text-green-900');

    const handleFocusGained = () => {
        setBtnBG('bg-green-900');
        setTextColor('text-white');
    }
    const handleFocusLost = () => {
        setBtnBG("");
        setTextColor("text-gray-700");
    }

    return (
      <Link
        to={to}
        className={`flex items-center justify-center gap-1 font-bold text-xsm md:text-sm transition-all pt-1 pb-1 pl-1 pr-3 rounded-3xl ${btnBG}`}
        onMouseEnter={handleFocusGained}
        onMouseLeave={handleFocusLost}
      >
        <span className="bg-white p-2 rounded-full">
          <img src={icon} alt={text} width={14} height={12} />
        </span>
        <span className={`${textColor}`}>{text}</span>
      </Link>
    );
}

LinkIconButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string.isRequired,
}

export default LinkIconButton;