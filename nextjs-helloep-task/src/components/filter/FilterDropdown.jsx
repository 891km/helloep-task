"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/utils/tailwindcss";

export default function FilterDropdown({
  paramsKey,
  optionValues,
  optionLabels,
  defaultLabel,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get(paramsKey);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideTouch = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideTouch);
    return () =>
      document.removeEventListener("pointerdown", handleOutsideTouch);
  }, []);

  const handleItemClick = (value) => {
    const params = new URLSearchParams(searchParasm.toString());
    params.delete(paramsKey);
    params.delete("page");

    if (value) {
      params.set(paramsKey, value);
    } else {
      params.delete(paramsKey);
    }

    router.push(`/?${params.toString()}`);
    setIsOpen(false);
  };

  const options = optionValues.map((value, i) => ({
    value,
    label: optionLabels?.[i] ?? String(value),
  }));
  const dropdownOptions = [{ value: null, label: defaultLabel }, ...options];

  return (
    <div
      ref={dropdownRef}
      className={cn("flex-1 h-full relative border-b border-b-gray")}
    >
      <button
        className="w-full h-full flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="mobile:text-gray">{currentValue ?? defaultLabel}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          className={`text-gray transition-transform duration-200 ${
            isOpen ? "-rotate-180" : "rotate-0"
          }`}
        >
          <path
            d="M0.353577 0.353546L5.35358 5.35355L10.3536 0.353546"
            stroke="currentColor"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute top-[calc(100%+1px)] left-0 w-full bg-[#222222] border-b border-b-gray z-10">
          {dropdownOptions.map(({ value, label }, i) => {
            return (
              <li
                key={label}
                className={cn(
                  "h-8 flex items-center hover:bg-[#323232]",
                  `${String(currentValue) === String(value) ? "bg-[#323232]" : "bg-none"}`,
                  `${!currentValue && "first:bg-[#323232]"}`,
                )}
              >
                <button
                  className={cn("w-full h-full px-2 text-left")}
                  onClick={() => handleItemClick(value)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
