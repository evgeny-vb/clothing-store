import React, {Fragment, useRef} from 'react';
import useOnScreen from "../hooks/useOnScreen";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  const subTitleRef = useRef(null);
  const isSubTitleOnScreen = useOnScreen(subTitleRef);

  const headerRef = useRef(null);
  const isHeaderOnScreen = useOnScreen(headerRef, 0.08);


  return (
    <Fragment>
      <Navigation isSubTitleOnScreen={isSubTitleOnScreen} isHeaderOnScreen={isHeaderOnScreen}/>
      <header ref={headerRef} className="relative h-[50vh] bg-hero bg-center bg-cover text-neutral-100">
        <div className="absolute p-12 inset-0 flex flex-col justify-center items-center">
          <h1 className="text-6xl p-5">
            Joe Design
          </h1>
          <h2 ref={subTitleRef} className="text-2xl">
            Design Clothing for men
          </h2>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;