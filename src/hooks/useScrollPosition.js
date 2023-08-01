import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setUseScrollPosition] = useState();
  useEffect(() => {
    const updatePosition = () => {
      setUseScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  });
  return scrollPosition;
};

export default useScrollPosition;
