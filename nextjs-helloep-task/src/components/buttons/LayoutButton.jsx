"use client";
import { useLayout } from "@/provider/LayoutProvider";

export default function LayoutButton() {
  const { isList, setIsList } = useLayout();

  const handleLayoutClick = () => {
    setIsList((prev) => !prev);
  };

  return (
    <button
      className="shrink-0 w-14 flex items-center justify-end gap-1"
      onClick={handleLayoutClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 11"
        fill="none"
        className="text-gray w-4 h-4"
      >
        <path
          d="M0.207153 3.4789H14.0851L10.9597 0.353554"
          stroke="currentColor"
        />
        <path
          d="M15.0851 7.35321L1.20715 7.35321L4.3325 10.4786"
          stroke="currentColor"
        />
      </svg>
      <span>{isList ? "img" : "list"}</span>
    </button>
  );
}
