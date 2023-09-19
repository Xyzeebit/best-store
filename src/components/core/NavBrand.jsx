import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import logo from '../../assets/icon-cart.png'

const NavBrand = ({ brand }) => (
    <div className="flex items-center justify-center gap-2 mt md:mt-0">
        <img src={logo} alt={brand} width={30} height={50} className="w-6 h-6 md:w-8 md:h-8" />
        <Link to='/' className="font-bold text-xl md:text-2xl text-green-900">{brand}</Link>
    </div>
);
NavBrand.propTypes = {
    brand: PropTypes.string.isRequired,
}
export default NavBrand;