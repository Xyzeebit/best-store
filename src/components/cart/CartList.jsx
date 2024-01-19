import PropTypes from 'prop-types'
import CartItem from './CartItem';

const CartList = ({ items }) => {
	
    return (
        <div className='flex justify-center md:justify-start items-center gap-4 md:gap-6 flex-wrap'>
            {items.map((item) => (
                <CartItem item={item} key={item.id} />
            ))}
        </div>
    );
}

CartList.propTypes = {
    items: PropTypes.array,
}

export default CartList;