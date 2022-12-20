import React from "react";

type Props = {
  isOpen: boolean,
  onToggle: () => void
}

const MobileMenuButton = ({isOpen, onToggle}: Props) => {
  return (
    <div className={`block z-40 cursor-pointer w-7 md:hidden ${isOpen && 'text-black'}`} onClick={onToggle}>
      {!isOpen && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>}
      {isOpen && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>}
    </div>
  );
};

export default MobileMenuButton;