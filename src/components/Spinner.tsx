import React from "react";

const Spinner = () => {
  return (
    <div className="h-full w-full flex justify-center items-center p-20">
      <div className="w-12 h-12 border-4 border-solid border-slate-300 border-t-slate-900 rounded-full animate-spin"/>
    </div>
  );
};

export default Spinner;