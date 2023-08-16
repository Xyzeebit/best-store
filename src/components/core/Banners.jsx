import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ id, image }) => {
    return (
      <Link to={id}>
        <div className="relative w-full h-52 md:h-60 lg:h-80 rounded-lg"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="font-bold text-3xl absolute z-10 top-10 left-10">
            Limited Time Offer!
            <br />
            Upto 50% off!
          </div>
          <div className="absolute insert-y-0 right-0 w-full">
            {/* <img src={image} alt={id} className="m-auto h-52 md:h-60 lg:h-80" /> */}
          </div>
          <div className="absolute bottom-10 right-10">
            <button className="px-8 py-2 bg-green-900 rounded-lg text-white">Buy now</button>
          </div>
        </div>
      </Link>
    );
};


Banner.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Banner;