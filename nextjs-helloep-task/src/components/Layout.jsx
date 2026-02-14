"use client";
import Header from "@/components/Header";
import SideHeader from "@/components/SideHeader";

export default function Layout({ main, side }) {
  return (
    <div className="flex w-screen h-screen">
      <main className="flex flex-col w-full h-full overflow-y-auto">
        <Header />
        <div className="flex-1 px-2.5 pb-11 w-full flex flex-col">{main}</div>
      </main>

      <ResizeHandler />

      <aside className="shrink-0 flex flex-col w-1/3 min-w-100 max-w-[80%] h-full overflow-hidden">
        <h4 className="sr-only">상세 내용</h4>
        <SideHeader />
        {side}
      </aside>
    </div>
  );
}

function ResizeHandler() {
  return (
    <div className="w-2.5 border-l border-r border-l-gray border-r-gray bg-background cursor-ew-resize flex justify-center items-center text-gray">
      <svg
        width="1"
        height="50"
        viewBox="0 0 1 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 0V50" stroke="currentColor" />
      </svg>
    </div>
  );
}
