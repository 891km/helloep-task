"use client";
import Header from "@/components/main/Header";
import SideHeader from "@/components/side/SideHeader";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useSideMenu } from "@/provider/SideMenuProvider";
import { useSideOpen } from "@/provider/SideOpenProvider";
import { cn } from "@/utils/tailwindcss";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MAIN_MIN_WIDTH = 768;

export default function Layout({ main, side, postDetail }) {
  const params = useParams();
  const { isOpen, setIsOpen } = useSideOpen();
  const { currentMenu, setCurrentMenu } = useSideMenu();
  const { isTablet } = useMediaQuery();

  const [sideWidth, setSideWidth] = useState(33.3);
  const [isResizing, setIsResizing] = useState(false);
  const sideRef = useRef(null);

  useEffect(() => {
    if (params?.slug) {
      setIsOpen(true);
      setCurrentMenu("PostDetail");
    } else {
      setIsOpen(false);
      setCurrentMenu("Contact");
    }
  }, [params?.slug, setCurrentMenu, setIsOpen]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;

      const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
      const sidePx = windowWidth - e.clientX;
      const maxSidePx = windowWidth - MAIN_MIN_WIDTH;
      const newSideWidth = (Math.min(sidePx, maxSidePx) / windowWidth) * 100;

      setSideWidth(newSideWidth);
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
      <main
        className={cn(
          `flex flex-col w-full h-full overflow-y-auto min-w-[${MAIN_MIN_WIDTH}px]`,
          "tablet:min-w-full",
        )}
      >
        <Header />
        <div className={cn("flex-1 px-2.5 pb-11 w-full flex flex-col")}>
          {main}
        </div>
      </main>

      {isTablet ? (
        <>
          <aside
            className={`fixed top-0 left-0 z-1000 bg-background border-r border-r-gray w-[calc(100%-2.5rem)] h-full transition-transform duration-500 ${isOpen && currentMenu !== "PostDetail" ? "translate-x-0" : "-translate-x-full"}`}
          >
            <SideHeader />
            {side}
          </aside>

          <aside
            className={`fixed top-10 bottom-0 z-1500 bg-background w-full h-full transition-transform duration-500 ${isOpen && currentMenu === "PostDetail" ? "translate-y-0" : "translate-y-full"}`}
          >
            {postDetail}
          </aside>
        </>
      ) : (
        <>
          <ResizeHandler
            onMouseDown={handleMouseDown}
            isResizing={isResizing}
          />
          <aside
            ref={sideRef}
            style={{
              width: `${sideWidth}%`,
            }}
            className={cn(
              `shrink-0 flex flex-col w-1/3 min-w-100 h-full overflow-hidden`,
            )}
          >
            <h4 className="sr-only">상세 내용</h4>
            <SideHeader />
            <>
              {postDetail}
              {side}
            </>
          </aside>
        </>
      )}
    </div>
  );
}

function ResizeHandler({ onMouseDown, isResizing }) {
  return (
    <button
      className={cn(
        "shrink-0 w-2.5 border-l border-r border-l-gray border-r-gray bg-background cursor-ew-resize! flex justify-center items-center text-gray hover:bg-foreground/20",
        `${isResizing ? "bg-foreground/20" : "bg-background"}`,
      )}
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
