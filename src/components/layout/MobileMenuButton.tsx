import React from "react";
import {ReactComponent as MenuIcon} from "../../assets/menuIcon.svg";
import {ReactComponent as CrossIcon} from "../../assets/crossIcon.svg";

type Props = {
  isOpen: boolean,
  onToggle: () => void
}

const MobileMenuButton = ({isOpen, onToggle}: Props) => {
  return (
    <div className={`block z-40 cursor-pointer w-7 md:hidden ${isOpen && "text-black"}`} onClick={onToggle}>
      {!isOpen && <MenuIcon/>}
      {isOpen && <CrossIcon/>}
    </div>
  );
};

export default MobileMenuButton;