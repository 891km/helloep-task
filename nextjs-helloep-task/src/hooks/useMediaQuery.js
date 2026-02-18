import { useSyncExternalStore } from "react";

const TABLET_QUERY = "(max-width: 1194px)";
const MOBILE_QUERY = "(max-width: 720px)";

const subscribe = (query, callback) => {
  const matchMedia = window.matchMedia(query);
  matchMedia.addEventListener("change", callback);

  return () => matchMedia.removeEventListener("change", callback);
};

const useMediaQuery = () => {
  const isTablet = useSyncExternalStore(
    (callback) => subscribe(TABLET_QUERY, callback),
    () => window.matchMedia(TABLET_QUERY).matches,
    () => false,
  );

  const isMobile = useSyncExternalStore(
    (callback) => subscribe(MOBILE_QUERY, callback),
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false,
  );

  return { isTablet, isMobile };
};

export default useMediaQuery;
