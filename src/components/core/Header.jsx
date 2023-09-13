import Cart from './Cart';
// import NavBrand from './NavBrand';
import ProductSearch from './ProductSearch';
import LinkIconButton from './LinkIconButton';
import Wrapper from './Wrapper';

import personIcon from '../../assets/icon-person.png';
import SearchList from './SearchList';
import { useSelector } from 'react-redux';
import Logo from './Logo';

const Header = () => {
    const { cartItemCounter } = useSelector(state => state.categories);
    return (
      <div className='sticky top-0 z-50 '>
        <div className="bg-yellow-500 h-4"></div>
        <header className="bg-white shadow-sm px-4 md:px-16 py-2 flex items-center justify-between flex-wrap gap-4">
          {/* <NavBrand brand="Bestore" /> */}
          <Logo />
          <Wrapper>
            <LinkIconButton text={"Account"} icon={personIcon} to="/account" />
            <Cart items={cartItemCounter} />
          </Wrapper>
          <ProductSearch />
        </header>
        <SearchList />
      </div>
    );
}

export default Header;