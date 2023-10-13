import Cart from './Cart';
// import NavBrand from './NavBrand';
import ProductSearch from './ProductSearch';
import LinkIconButton from './LinkIconButton';
import Wrapper from './Wrapper';

import personIcon from '../../assets/icons/user_icon.svg';
import loginIcon from "../../assets/icons/login_icon.svg";

import SearchList from './SearchList';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import { useEffect } from 'react';

const Header = () => {
  const { cartItemCounter } = useSelector(state => state.categories);
  const { isLoggedIn } = useSelector(state => state.user);
  
    return (
      <div className='sticky top-0 z-50 '>
        <div className="bg-red-500 h-4"></div>
        <header className="bg-white shadow-sm px-4 md:px-16 py-2 flex items-center justify-between flex-wrap gap-4">
          {/* <NavBrand brand="Bestore" /> */}
          <Logo />
          <Wrapper>
            <LinkIconButton 
              text={`${isLoggedIn ? "Account" : "Sign in"}`} 
              icon={isLoggedIn ? personIcon : loginIcon} 
              to={`${isLoggedIn ? "/account" : "/signin"}`} 
            />
            <Cart items={cartItemCounter} />
          </Wrapper>
          <ProductSearch />
        </header>
        <SearchList />
      </div>
    );
}

export default Header;