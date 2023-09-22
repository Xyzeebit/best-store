import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const HotDeal = ({text, image, to}) => {
    return (
        <div>
            <div>
                <img src={image} alt={text} width={200} height={300} />
            </div>
            <div>
                <div>{text}</div>
                <Link to={to}>Shop Now</Link>
            </div>
        </div>
    );
}

HotDeal.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
    to: PropTypes.string,
}

export default HotDeal;