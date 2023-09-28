import PropTypes from 'prop-types'
import { useRef } from 'react';
import starIcon from '../../assets/icons/star-icon.svg';
import starColoredIcon from "../../assets/icons/star-colored-icon.svg";
// import starHalfIcon from '../../assets/icons/star-half-icon.svg';
import starHalfColoredIcon from "../../assets/icons/star-half-colored-icon.svg";



const Rating = ({ rating }) => {
    const counterRef = useRef();
    counterRef.current = rating ?? 0;
    const getRatingColor = () => {
        counterRef.current -= 1;
        if (counterRef.current >= 1) {
            return starColoredIcon;
        } else if (counterRef.current > 0.49) {
            return starHalfColoredIcon;
        } else {
            return starIcon;
        }
    }
    return (
      <div className='flex items-start justify-start gap-2'>
        <img src={getRatingColor()} alt="rating" width={18} height={18} />
        <img src={getRatingColor()} alt="rating" width={18} height={18} />
        <img src={getRatingColor()} alt="rating" width={18} height={18} />
        <img src={getRatingColor()} alt="rating" width={18} height={18} />
        <img src={getRatingColor()} alt="rating" width={18} height={18} />
      </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.number,
}

export default Rating;