import Cart from './Cart';
import NavBrand from './NavBrand';
import ProductSearch from './ProductSearch';
import IconButton from './IconButton';
import Wrapper from './Wrapper';

import personIcon from '../../assets/icon-person.png';

const Header = () => {
    const handleAccount = () => {
        console.log('account')
    }

    return (
      <header className="px-8 md:px-16 py-2 flex items-center justify-between gap-4">
        <NavBrand brand="Bestore" />
        <ProductSearch />
        <Wrapper>
          <IconButton
            text={"Account"}
            icon={personIcon}
            onClick={handleAccount}
          />
          <Cart />
        </Wrapper>
      </header>
    );
}

export default Header;