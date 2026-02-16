"use client";
import { createContext, useState, useContext } from "react";

const SideNavContext = createContext(null);

export default function SideOpenProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideNavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideNavContext.Provider>
  );
}

export const useSideOpen = () => {
  const context = useContext(SideNavContext);
  if (!context)
    throw new Error("useSideOpen는 SideOpenProvider 안에서 사용되어야 합니다.");
  return context;
};
