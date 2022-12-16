import React from "react";

type Props = {
  children?: React.ReactNode,
  onClick: () => void
}

const Button = ({children, onClick}: Props) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer border-2 rounded-md border-slate-800
      py-2 px-8
      hover:bg-slate-800 hover:text-white"
    >
      {children}
    </button>
  );
};

export default Button;