import cartIcon from '../../assets/icon-cart.png'
import visaIcon from '../../assets/icons/visa_icon.svg';
import mastercardIcon from "../../assets/icons/mastercard_icon.svg";
import paypalIcon from "../../assets/icons/paypal_icon.svg";
import gpayIcon from "../../assets/icons/gpay_icon.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-6">
          <div className="w-full md:w-2/5">
            <div className="flex items-center justify-start gap-2">
              <img src={cartIcon} alt="Bestore" width={40} height={40} />
              <div className="font-bold text-2xl text-green-900">Bestore</div>
            </div>
            <div className="py-4 text-sm text-gray-600">
              The E-Commerce Website project is designed to provide users with a
              user-friendly platform for online shopping. It allows users to
              browse products, add them to the cart, and proceed to checkout.
            </div>
            <div className="mt-2">
              <div className="font-bold">Accepted Payment Methods</div>
              <div className="mt-4 flex items-center justify-start gap-2">
                <img
                  src={visaIcon}
                  alt="Visa card accepted"
                  width={50}
                  height={40}
                  className="mr-2"
                />
                <img
                  src={mastercardIcon}
                  alt="Visa card accepted"
                  width={50}
                  height={40}
                  className="mr-2"
                />
                <img
                  src={paypalIcon}
                  alt="Visa card accepted"
                  width={50}
                  height={40}
                  className="mr-2"
                />
                <img
                  src={gpayIcon}
                  alt="Visa card accepted"
                  width={50}
                  height={40}
                  className="mr-2"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 flex items-start justify-between gap-4">
            <div className="">
              <div className="font-bold mb-4">Categories</div>
              <div className="flex flex-col gap-1">
                <Link
                  to={`/products/electronics`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Electronics
                </Link>
                <Link
                  to={`/products/clothings`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Clothings and Accessories
                </Link>
                <Link
                  to={`/products/home-and-living`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Home and Living
                </Link>
                <Link
                  to={`/products/care-products`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Beauty and Personal Care
                </Link>
                <Link
                  to={`/products/sport-and-outdoors`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Sports and Outdoors
                </Link>
                <Link
                  to={`/products/games-and-toys`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Games and Toys
                </Link>
              </div>
            </div>
            <div className="">
              <div className="font-bold mb-4">About us</div>
              <div className="flex flex-col gap-1">
                <Link
                  to={`/about/bestore`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  About Beststore
                </Link>
                <Link
                  to={`/about/careers`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Careers
                </Link>
                <Link
                  to={`/blog`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  News and Blog
                </Link>
                <Link
                  to={`/about/affiliate-and-partners`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Affiliate and Partners
                </Link>
              </div>
            </div>
            <div className="">
              <div className="font-bold mb-4">Services</div>
              <div className="flex flex-col gap-1">
                <Link
                  to={`/services/coupons`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Coupons and Gift Cards
                </Link>
                <Link
                  to={`/services/apps`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Mobile App
                </Link>
                <Link
                  to={`/services/shipping-and-delivery`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Shipping and Delivery
                </Link>
                <Link
                  to={`/services/merchant`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Become a Seller
                </Link>
                <Link
                  to={`/signup`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Account Signup
                </Link>
              </div>
            </div>
            <div className="">
              <div className="font-bold mb-4">Help</div>
              <div className="flex flex-col gap-1">
                <Link
                  to={`/help/bestore`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Help
                </Link>
                <Link
                  to={`/help/returns`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Returns
                </Link>
                <Link
                  to={`/help/track-orders`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Track Orders
                </Link>
                <Link
                  to={`/help/contact`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Contact us
                </Link>
                <Link
                  to={`/help/security-and-fraud`}
                  className="text-xsm md:text-sm text-gray-600 hover:underline"
                >
                  Security and Fraud
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;