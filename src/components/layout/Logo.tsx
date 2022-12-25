import React from "react";
import {Link} from "react-router-dom";

type Props = {
  isNavFixed: boolean,
  isHomeLocation: boolean,

}

const Logo = ({isNavFixed, isHomeLocation}: Props) => {
  return (
    <div className="justify-self-center">
      <h2 className={isNavFixed || !isHomeLocation ? "justify-self-center" : "hidden"}>
        <Link to="/">Joe Design</Link>
      </h2>
    </div>
  );
};

export default Logo;