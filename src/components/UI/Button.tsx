import React from "react";

type Props = {
  children?: React.ReactNode,
  onClick: () => void,
  className?: string
}

const Button = ({children, onClick, className}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer border-2 rounded-md border-slate-800
      py-2 px-8 font-bold text-slate-900 bg-white
      hover:bg-slate-800 hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;