import React, {Fragment, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";
import {selectCategories} from "../../store/categories/categories-selectors";
import {useHideScroll} from "../../hooks/useHideScroll";
import {useWindowSize} from "../../hooks/useWindowSize";

type Props = {
  isMenuOpen: boolean,
  onMenuToggle: () => void
}

const Navigation = ({isMenuOpen, onMenuToggle}: Props) => {
  useHideScroll(isMenuOpen);
  const windowSize = useWindowSize();
  const windowWidth = windowSize[0];
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    if (isMenuOpen && windowWidth > 767) {
      onMenuToggle();
    }
  }, [isMenuOpen, windowSize])

  const navLinkActiveClasses = ({isActive}: { isActive: boolean }) => {
    return isActive ? "text-slate-500 underline" : undefined;
  };

  const navClasses = isMenuOpen ? "pre-md:text-black" : "pre-md:-translate-x-full";

  return (
    <Fragment>
      <div className={`fixed top-0 left-0 z-20 w-full h-screen
          backdrop-blur-md bg-white/90 transition-all ease-in duration-250
          md:hidden ${!isMenuOpen && "-translate-x-full"}`}
      />
      <nav className={`md:justify-self-start
        pre-md:fixed pre-md:inset-0 pre-md:z-30 pre-md:text-3xl pre-md:w-screen pre-md:h-screen 
        pre-md:flex pre-md:justify-center pre-md:items-center transition-all ease-in duration-300
        ${navClasses}`}
      >
        <ul className={`list-none flex flex-col md:flex-row`}>
          {categories.map((category) => (
            <li key={category.title} className="px-2 pre-md:mb-8">
              <NavLink onClick={onMenuToggle} className={navLinkActiveClasses}
                       to={`shop/${category.title.toLowerCase()}`}>
                {category.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;