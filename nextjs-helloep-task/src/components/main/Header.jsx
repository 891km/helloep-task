"use client";
import LanguageButton from "@/components/buttons/LanguageButton";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="px-2.5 shrink-0 h-10 text-xl flex justify-between items-center whitespace-nowrap border-b border-b-gray bg-background sticky top-0 left-0 z-10">
      <Link
        href="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-55"
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

      <a
        href="mailto:hello@everyday-practice.com"
        className="text-xl text-gray hover:text-foreground transition-colors"
      >
        hello@everyday-practice.com
      </a>
    </header>
  );
}
