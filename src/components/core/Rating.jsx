import PropTypes from 'prop-types'
import starIcon from '../../assets/icons/star-icon.svg';
import starColoredIcon from "../../assets/icons/star-colored-icon.svg";

// import starHalfIcon from '../../assets/icons/star-half-icon.svg';
import starHalfColoredIcon from "../../assets/icons/star-half-colored-icon.svg";



const Rating = ({ rating }) => {
    const getRatingColor = (counter) => {
        if (rating - counter >= 1) {
            return starColoredIcon;
        } else if (rating - counter > 0) {
            return starColoredIcon;
        } else if (rating - counter >= 0.5) {
            return starHalfColoredIcon;
        } else {
            return starIcon;
        }
    }
    return (
      <div className='flex items-start justify-start gap-2'>
        <img src={getRatingColor(1)} alt="rating" width={18} height={18} />
        <img src={getRatingColor(2)} alt="rating" width={18} height={18} />
        <img src={getRatingColor(3)} alt="rating" width={18} height={18} />
        <img src={getRatingColor(4)} alt="rating" width={18} height={18} />
        <img src={getRatingColor(5)} alt="rating" width={18} height={18} />
      </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.number,
}

export default Rating;