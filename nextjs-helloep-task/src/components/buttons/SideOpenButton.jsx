"use client";
import { useSideOpen } from "@/provider/SideOpenProvider";
import { useRouter, useSearchParams } from "next/navigation";

export default function SideOpenButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isOpen, setIsOpen } = useSideOpen();

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      router.push(`/?${params.toString()}`);

      setIsOpen(false);
    }
  };

  return (
    <button onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={`w-10 h-10 p-2.5 transition-transform ${isOpen ? "rotate-45" : "rotate-0"}`}
      >
        <path d="M1 12h22" />
        <path d="M12 1v22" />
      </svg>
      <span className="sr-only">사이드바 열기</span>
    </button>
  );
}
