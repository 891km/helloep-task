"use client";
import { createContext, useState, useContext } from "react";

const SideNavContext = createContext(null);

export default function SideMenuProvider({ children }) {
  const [currentMenu, setCurrentMenu] = useState("Contact");

  return (
    <SideNavContext.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </SideNavContext.Provider>
  );
}

export const useSideMenu = () => {
  const context = useContext(SideNavContext);
  if (!context)
    throw new Error("useSideMenu는 SideMenuProvider 안에서 사용되어야 합니다.");
  return context;
};
