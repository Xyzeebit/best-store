import PropTypes from 'prop-types';

const HotDeal = ({text, image, to}) => {
    return (
      <div className="w-full rounded shadow">
        <div className="h-60 overflow-hidden">
          <img
            src={image}
            alt={text}
            width={200}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="">
          <div
            className={`p-4 font-semibold text-white bg-green-900 ${
              text.length > 50 ? "truncate" : ""
            }`}
          >
            {text}
          </div>
          {/* <div>
            <Link
              to={to}
              className="bg-white border-2 border-gray-500 text-green-900 px-8 py-2 rounded-full"
            >
              Shop Now
            </Link>
          </div> */}
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