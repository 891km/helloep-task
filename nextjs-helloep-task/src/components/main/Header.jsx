"use client";
import LanguageButton from "@/components/buttons/LanguageButton";
import SideOpenButton from "@/components/buttons/SideOpenButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/utils/tailwindcss";
import Link from "next/link";
import { Suspense, useState } from "react";

export default function Header() {
  const { isTablet } = useMediaQuery();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Suspense>
      <header
        className={cn(
          "px-2.5 shrink-0 w-full h-10 text-xl flex justify-between items-center whitespace-nowrap border-b border-b-gray bg-background sticky top-0 left-0 z-300",
          "tablet:pr-0 mobile:text-lg",
        )}
      >
        <Link
          href="/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-55 mobile:w-48"
        >
          <span
            className={`absolute transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            일상의실천
          </span>
          <span
            className={`transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            EVERYDAY PRACTICE
          </span>
        </Link>

        <LanguageButton />

        {isTablet ? (
          <SideOpenButton />
        ) : (
          <a
            href="mailto:hello@everyday-practice.com"
            className="text-xl text-gray hover:text-foreground transition-colors"
          >
            hello@everyday-practice.com
          </a>
        )}
      </header>
    </Suspense>
  );
}
