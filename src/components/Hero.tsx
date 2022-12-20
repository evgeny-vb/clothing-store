import React, {useEffect, useRef} from 'react';
import useOnScreen from "../hooks/useOnScreen";
import {useAppDispatch} from "../hooks/reduxHooks";
import {uiActions} from "../store/ui/ui-slice";

const Hero = () => {
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
    <div ref={headerRef} className="relative mb-10 md:mb-20 h-[50vh] flex flex-col bg-hero bg-center bg-cover text-neutral-100">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-6xl p-5">
          Joe Design
        </h1>
        <h2 className="text-2xl">
          Design Clothing for men
        </h2>
      </div>
    </div>
  );
};

export default Hero;