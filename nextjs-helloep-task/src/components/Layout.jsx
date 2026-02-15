"use client";
import Header from "@/components/Header";
import SideHeader from "@/components/side/SideHeader";
import { useEffect, useRef, useState } from "react";

export default function Layout({ main, side }) {
  const [sideWidth, setSideWidth] = useState(33.3);
  const [isResizing, setIsResizing] = useState(false);
  const sideRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;
      setSideWidth((1 - e.clientX / window.innerWidth) * 100);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.documentElement.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
      document.body.style.pointerEvents = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.style.cursor = "";
      document.body.style.userSelect = "";
      document.body.style.pointerEvents = "";
    };
  }, [isResizing]);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  return (
    <div className="flex w-screen h-screen">
      <main className="flex flex-col w-full h-full overflow-y-auto">
        <Header />
        <div className="flex-1 px-2.5 pb-11 w-full flex flex-col">{main}</div>
      </main>

      <ResizeHandler onMouseDown={handleMouseDown} isResizing={isResizing} />

      <aside
        ref={sideRef}
        style={{ width: `${sideWidth}%` }}
        className={`shrink-0 flex flex-col w-1/3 min-w-100 max-w-2/3 h-full overflow-hidden`}
      >
        <h4 className="sr-only">상세 내용</h4>
        <SideHeader />
        {side}
      </aside>
    </div>
  );
}

function ResizeHandler({ onMouseDown, isResizing }) {
  return (
    <button
      className={`shrink-0 w-2.5 border-l border-r border-l-gray border-r-gray bg-background cursor-ew-resize! flex justify-center items-center text-gray hover:bg-foreground/20 ${isResizing ? "bg-foreground/20" : "bg-background"}`}
      onMouseDown={onMouseDown}
    >
      <svg
        width="1"
        height="50"
        viewBox="0 0 1 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 0V50" stroke="currentColor" />
      </svg>
    </button>
  );
}
