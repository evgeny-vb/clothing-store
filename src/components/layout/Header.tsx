import React, {useCallback, useEffect, useState} from "react";
import CartButton from "./CartButton";
import Cart from "../cart/Cart";
import {useAppSelector} from "../../hooks/reduxHooks";
import {useLocation} from "react-router-dom";
import MobileMenuButton from "./MobileMenuButton";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  const isCartOpen = useAppSelector(state => state.cart.isOpen);
  const isNavFixed = useAppSelector(state => state.ui.isNavFixed);
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";
  const [headerFixedClass, setHeaderFixedClass] = useState("fixed");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    if (isHomeLocation) {
      setHeaderFixedClass(isNavFixed ? "fixed bg-white text-black" : "absolute");
    } else {
      setHeaderFixedClass("sticky left-0 top-0 bg-white text-black");
    }
  }, [isHomeLocation, isNavFixed]);

  const toggleMobileMenuHandler = useCallback(() => {
    setIsMobileMenuOpen(prevState => !prevState)
  }, [])

  return (
    <header
      className={`flex-shrink-0 z-10 h-16 md:h-24 w-full px-4 md:px-10 grid grid-cols-3 items-center text-xl text-neutral-100 ${headerFixedClass}`}
    >
      <MobileMenuButton isOpen={isMobileMenuOpen} onToggle={toggleMobileMenuHandler}/>
      <Navigation isMenuOpen={isMobileMenuOpen} onMenuToggle={toggleMobileMenuHandler}/>
      <Logo isNavFixed={isNavFixed} isHomeLocation={isHomeLocation}/>
      <CartButton/>
      {isCartOpen && <Cart/>}
    </header>
  );
};

export default Header;