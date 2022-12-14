import React, {useEffect, useState} from 'react';
import CartButton from "./CartButton";
import Cart from "../Cart";
import {useAppSelector} from "../../hooks/reduxHooks";
import {Link, useLocation} from "react-router-dom";

const Navigation = () => {
  const isCartOpen = useAppSelector(state => state.cart.isOpen)
  const isNavFixed = useAppSelector(state => state.ui.isNavFixed)
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";
  const [navFixedClass, setNavFixedClass] = useState("fixed");

  useEffect(() => {
    if(isHomeLocation) {
      setNavFixedClass(isNavFixed ? "fixed bg-white text-black" : "absolute")
    } else {
      setNavFixedClass("sticky left-0 top-0 bg-white text-black")
    }
  }, [isHomeLocation, isNavFixed])


  return (
    <nav className={`z-10 h-24 w-full px-12 grid grid-cols-3 items-center text-xl text-neutral-100 ${navFixedClass}`}>
      <ul className="justify-self-start flex list-none">
        <li className="px-2"><Link to="shop/hats">Hats</Link></li>
        <li className="px-2"><Link to="shop/top">Top</Link></li>
        <li className="px-2"><Link to="shop/bottom">Bottom</Link></li>
        <li className="px-2"><Link to="shop/shoes">Shoes</Link></li>
      </ul>
      <div className="justify-self-center">
        <h2 className={isNavFixed || !isHomeLocation ? "justify-self-center" : "hidden"}>
          <Link to="/">Joe Design</Link>
        </h2>
      </div>
      <CartButton/>
      {isCartOpen && <Cart/>}
    </nav>
  );
};

export default Navigation;