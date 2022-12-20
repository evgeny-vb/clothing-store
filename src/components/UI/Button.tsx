import React from "react";

export enum BUTTON_TYPES {
  base = 1,
  inverted = 2
}

type Props = {
  children?: React.ReactNode,
  onClick?: () => void,
  className?: string,
  type?: BUTTON_TYPES
}

const Button = ({children, onClick, className, type}: Props) => {
  let typeClasses = "bg-white text-slate-900 hover:bg-slate-800 hover:text-white";

  if (type === BUTTON_TYPES.inverted) {
    typeClasses = "bg-slate-800 text-white hover:bg-white hover:text-slate-900";
  }


  return (
    <button
      onClick={onClick}
      className={`cursor-pointer border-2 rounded border-slate-800
      py-1 md:py-2 px-4 md:px-8 font-bold 
      ${typeClasses}
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;