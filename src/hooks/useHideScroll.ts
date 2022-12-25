import {useEffect} from "react";

export const useHideScroll = (condition: boolean = true) => {
  useEffect(() => {
    if (condition)
      document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [condition]);
}