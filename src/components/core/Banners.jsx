import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ to, image }) => {
    return (
      <Link to={to}>
        <div
          className="relative w-full h-52 md:h-60 lg:h-80 rounded-lg"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
          <div className="flex items-center justify-center absolute bottom-2 right-2 md:bottom-10 md:right-10 bg-yellow-900 w-24 h-24 md:w-32 md:h-32 border-4 border-yellow-500 border-dotted rounded-full font-bold text-xsm md:text-lg text-black shadow">
            Shop Now
          </div>
        </div>
      </Link>
    );
};


Banner.propTypes = {
    to: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Banner;