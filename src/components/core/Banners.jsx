import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OBanner = ({ to, image }) => {
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

OBanner.propTypes = {
    to: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
const colors = {
  red: "bg-red-300",
  blue: "bg-blue-300",
  green: "bg-green-300",
  gray: "bg-gray-300",
  pink: "bg-pink-300",
  dark: "bg-gray-900",
  yellow: "bg-yellow-300"
};
const NBanner = ({ to, image, color }) => {
  
  return (
    <Link
      to={to}
      className={`relative w-full h-52 md:h-60 lg:h-80 overflow-hidden`}
    >
      <div
        className={`rounded-lg flex justify-between items-start ${colors[color]} w-full h-52 md:h-60 lg:h-80`}
      >
        <div className="px-8 w-3/5 flex items-start justify-around flex-col h-full">
          <p className="font-bold text-xl md:text-3xl text-gray-900">
            Limited Time Offer!
            <br />
            Upto 50% off!
          </p>
          <div className="border-2 border-gray-900 w-28 py-4 text-sm md:text-md text-gray-900 font-bold text-center">
            Shop Now
          </div>
        </div>
        <div className="h-52 md:h-60 lg:h-80 w-2/5 rounded-bl-3xl overflow-hidden">
          <img
            src={image}
            width={300}
            height={200}
            className="w-full object-fill h-full"
          />
        </div>
      </div>
    </Link>
  );
}

NBanner.propTypes = {
    to: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,

}

const Banner = ({to, image, color}) => (
  <>
    <div className="hidden md:block"><NBanner to={to} image={image} color={color} /> </div>
    <div className="block md:hidden"><OBanner to={to} image={image} /> </div>
  </>
);

Banner.propTypes = {
  to: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default Banner;