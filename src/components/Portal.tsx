import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";

type Props = {
  children?: React.ReactNode
}

const Portal = ({children}: Props) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return (
    createPortal(children, container)
  );
};

export default Portal;