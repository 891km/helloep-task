import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const tabletQuery = window.matchMedia("(max-width: 1194px)");
    const mobileQuery = window.matchMedia("(max-width: 720px)");

    const handleChange = () => {
      setIsTablet(tabletQuery.matches);
      setIsMobile(mobileQuery.matches);
    };

    handleChange();

    tabletQuery.addEventListener("change", handleChange);
    mobileQuery.addEventListener("change", handleChange);

    return () => {
      tabletQuery.removeEventListener("change", handleChange);
      mobileQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { isTablet, isMobile };
};

export default useMediaQuery;
