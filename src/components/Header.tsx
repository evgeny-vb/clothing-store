import React, {Fragment, useEffect, useRef} from 'react';
import useOnScreen from "../hooks/useOnScreen";
import {useAppDispatch} from "../hooks/reduxHooks";
import {uiActions} from "../store/ui/ui-slice";

const Header = () => {
  const headerRef = useRef(null);
  const isHeaderOnScreen = useOnScreen(headerRef, 0.13);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(uiActions.setNavFixed(false))
  }, [])

  useEffect(() => {
    // run with timeout to avoid white bg popping after page loaded
    const setNav = setTimeout(() => {
      dispatch(uiActions.setNavFixed(!isHeaderOnScreen))
    }, 20)

    return () => {
      clearTimeout(setNav)
      dispatch(uiActions.resetNavShow())
    }
  }, [isHeaderOnScreen])


  return (
    <Fragment>
      <header ref={headerRef} className="relative h-[50vh] flex flex-col bg-hero bg-center bg-cover text-neutral-100">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-6xl p-5">
            Joe Design
          </h1>
          <h2 className="text-2xl">
            Design Clothing for men
          </h2>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;