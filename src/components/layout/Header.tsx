import React, {useEffect, useState} from "react";
import CartButton from "./CartButton";
import Cart from "../cart/Cart";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {Link, NavLink, useLocation} from "react-router-dom";
import {cartActions} from "../../store/cart/cart-slice";

const Header = () => {
  const isCartOpen = useAppSelector(state => state.cart.isOpen);
  const isNavFixed = useAppSelector(state => state.ui.isNavFixed);
  const location = useLocation();
  const isHomeLocation = location.pathname === "/";
  const [navFixedClass, setNavFixedClass] = useState("fixed");
  const dispatch = useAppDispatch();

  const openCartHandler = () => {
    dispatch(cartActions.open())
  }

  useEffect(() => {
    if (isHomeLocation) {
      setNavFixedClass(isNavFixed ? "fixed bg-white text-black" : "absolute");
    } else {
      setNavFixedClass("sticky left-0 top-0 bg-white text-black");
    }
  }, [isHomeLocation, isNavFixed]);

  const navLinkActiveClasses = ({isActive}: {isActive: boolean}) => {
    return isActive ? "text-slate-700 underline" : undefined
  }


  return (
    <header
      className={`z-10 h-24 w-full px-12 grid grid-cols-3 items-center text-xl text-neutral-100 ${navFixedClass}`}
    >
      <nav className="justify-self-start">
        <ul className="flex list-none">
          <li className="px-2"><NavLink className={navLinkActiveClasses} to="shop/hats">Hats</NavLink></li>
          <li className="px-2"><NavLink className={navLinkActiveClasses}  to="shop/top">Top</NavLink></li>
          <li className="px-2"><NavLink className={navLinkActiveClasses}  to="shop/bottom">Bottom</NavLink></li>
          <li className="px-2"><NavLink className={navLinkActiveClasses}  to="shop/shoes">Shoes</NavLink></li>
        </ul>
      </nav>
      <div className="justify-self-center">
        <h2 className={isNavFixed || !isHomeLocation ? "justify-self-center" : "hidden"}>
          <Link to="/">Joe Design</Link>
        </h2>
      </div>
      <div className="justify-self-end" onClick={openCartHandler}>
        <CartButton/>
      </div>
      {isCartOpen && <Cart/>}
    </header>
  );
};

export default Header;