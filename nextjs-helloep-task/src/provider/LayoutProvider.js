"use client";
import { createContext, useContext, useState } from "react";

const LayoutContext = createContext(null);

export function LayoutProvider({ children }) {
  const [isList, setIsList] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        isList,
        setIsList,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error("useLayout는 LayoutProvider 안에서 사용되어야 합니다.");

  return context;
};
