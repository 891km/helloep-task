"use client";
import { createContext, useContext, useState } from "react";

const CategoriesContext = createContext(null);

export function CategoriesProvider({ categories, children }) {
  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  if (!context)
    throw new Error(
      "useCategories는 CategoriesProvider 안에서 사용되어야 합니다.",
    );

  return context;
};
