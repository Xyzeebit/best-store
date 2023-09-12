import cartIcon from '../../assets/icon-cart.png'
import visaIcon from '../../assets/icons/visa_icon.svg';
import mastercardIcon from "../../assets/icons/mastercard_icon.svg";
import paypalIcon from "../../assets/icons/paypal_icon.svg";
import gpayIcon from "../../assets/icons/gpay_icon.svg";


const Footer = () => {
    return (
        <div className="px-4 md:px-16 flex items-center justify-between gap-4">
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
                <div className='mt-2'>
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
            
            <div>
                
            </div>
        </div>
    );
}

export default Footer;