import React, {useEffect, useState} from "react";
import CartButton from "./CartButton";
import Cart from "../cart/Cart";
import {useAppSelector} from "../../hooks/reduxHooks";
import {Link, useLocation} from "react-router-dom";
import MobileMenuButton from "./MobileMenuButton";
import Navigation from "./Navigation";

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

  const toggleMobileMenuHandler = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`flex-shrink-0 z-10 h-24 w-full px-12 grid grid-cols-3 items-center text-xl text-neutral-100 ${headerFixedClass}`}
    >
      <MobileMenuButton isOpen={isMobileMenuOpen} onToggle={toggleMobileMenuHandler}/>
      <Navigation isMenuOpen={isMobileMenuOpen} onMenuToggle={toggleMobileMenuHandler}/>
      <div className="justify-self-center">
        <h2 className={isNavFixed || !isHomeLocation ? "justify-self-center" : "hidden"}>
          <Link to="/">Joe Design</Link>
        </h2>
      </div>
      <CartButton/>
      {isCartOpen && <Cart/>}
    </header>
  );
};

export default Header;