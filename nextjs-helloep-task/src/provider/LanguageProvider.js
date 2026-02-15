"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [isKor, setIsKor] = useState(true);

  return (
    <LanguageContext.Provider
      value={{
        isKor,
        setIsKor,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage는 LanguageProvider 안에서 사용되어야 합니다.");

  return context;
};
