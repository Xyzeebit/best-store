import Cart from './Cart';
import NavBrand from './NavBrand';
import ProductSearch from './ProductSearch';
import LinkIconButton from './LinkIconButton';
import Wrapper from './Wrapper';

import personIcon from '../../assets/icon-person.png';

const Header = () => {

    return (
      <>
        <div className="bg-yellow-500 h-4"></div>
        <header className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-16 py-2 flex items-center justify-between flex-wrap gap-4">
          <NavBrand brand="Bestore" />
          <Wrapper>
            <LinkIconButton text={"Account"} icon={personIcon} to="/account" />
            <Cart items={8} />
          </Wrapper>
          <ProductSearch />
        </header>
      </>
    );
}

export default Header;