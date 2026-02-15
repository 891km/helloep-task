"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FilterYear({ years }) {
  const [isYearOpen, setIsYearOpen] = useState(false);
  const router = useRouter();
  const searchParasm = useSearchParams();
  const currentYear = searchParasm.get("workYear");

  const handleYearClick = (year) => {
    const params = new URLSearchParams(searchParasm.toString());
    params.delete("page");

    if (year) {
      params.set("workYear", year);
    } else {
      params.delete("workYear");
    }

    router.push(`/?${params.toString()}`);
    setIsYearOpen(false);
  };

  return (
    <div className="flex-1 relative border-b border-b-gray">
      <button
        className="w-full h-full flex justify-between items-center"
        onClick={() => setIsYearOpen((prev) => !prev)}
      >
        <span>{currentYear ? currentYear : "Year"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          className={`text-gray transition-transform duration-200 ${
            isYearOpen ? "-rotate-180" : "rotate-0"
          }`}
        >
          <path
            d="M0.353577 0.353546L5.35358 5.35355L10.3536 0.353546"
            stroke="currentColor"
          />
        </svg>
      </button>
      {isYearOpen && (
        <ul className="absolute top-[calc(100%+1px)] left-0 w-full bg-[#222222] border-b border-b-gray z-10">
          <li className="h-8 flex items-center">
            <button
              className={`w-full h-full px-2 text-left hover:bg-[#323232] ${currentYear ? "bg-none" : "bg-[#323232]"}`}
              onClick={() => handleYearClick("")}
            >
              Year
            </button>
          </li>
          {years.map((year) => (
            <li key={year} className="h-8 flex items-center">
              <button
                className={`w-full h-full px-2 text-left hover:bg-[#323232] ${+currentYear === +year ? "bg-[#323232]" : "bg-none"}`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
