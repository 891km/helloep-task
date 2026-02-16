"use client";
import FilterResetButton from "@/components/buttons/FilterResetButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/utils/tailwindcss";

export default function FilterResult({ postCount }) {
  const { isMobile } = useMediaQuery();

  return (
    <div
      className={cn(
        "flex-1 h-full flex items-center justify-between border-b border-b-gray",
        "mobile:flex-auto mobile:h-10 mobile:justify-end mobile:border-none",
      )}
    >
      <span className="text-gray text-sm whitespace-nowrap">
        {postCount} results
      </span>

      {!isMobile && <FilterResetButton />}
    </div>
  );
}
