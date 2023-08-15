import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import logo from '../../assets/icon-cart.png'

const NavBrand = ({ brand }) => (
    <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
        <img src={logo} alt={brand} width={30} height={50} />
        <Link to='/' className="font-bold text-2xl text-green-900">{brand}</Link>
    </div>
);
NavBrand.propTypes = {
    brand: PropTypes.string.isRequired,
}
export default NavBrand;