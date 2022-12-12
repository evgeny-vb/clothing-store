import React from 'react';
import CartButton from "./CartButton";

type Props = {
  isHeaderOnScreen: boolean
}

const Navigation = ({isHeaderOnScreen}: Props) => {

  return (
    <nav className={`fixed z-10 h-24 w-screen px-12 grid grid-cols-3 items-center text-xl text-neutral-100
      ${!isHeaderOnScreen
      ? "bg-white text-black"
      : ""}`}
    >
      <ul className="justify-self-start flex list-none">
        <li className="px-2">Hats</li>
        <li className="px-2">Top</li>
        <li className="px-2">Bottom</li>
        <li className="px-2">Shoes</li>
      </ul>
      <div className="justify-self-center">
        <h2 className={isHeaderOnScreen ? "hidden" : "justify-self-center"}>
          Joe Design
        </h2>
      </div>
      <CartButton/>
    </nav>
  );
};

export default Navigation;