"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/utils/tailwindcss";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterSearch() {
  const { isMobile } = useMediaQuery();

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearchValue = searchParams.get("search") || "";

  const [searchValue, setSearchValue] = useState(currentSearchValue);

  useEffect(() => {
    setSearchValue(currentSearchValue);
  }, [currentSearchValue]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <form
      className={cn(
        "flex-2 h-full bg-[#D9D9D91A] border-b px-2 border-b-gray flex items-center",
        "mobile:px-0 mobile:w-full mobile:bg-transparent mobile:border-none",
      )}
    >
      {isMobile && (
        <svg
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray aspect-square w-4 h-4 mr-2"
        >
          <circle cx="5.14286" cy="5.14286" r="4.64286" stroke="currentColor" />
          <path d="M8.57141 8.57143L12 12" stroke="currentColor" />
        </svg>
      )}

      <label htmlFor="search" className="sr-only">
        검색어
      </label>
      <input
        id="search"
        type="search"
        placeholder="Serach"
        value={searchValue}
        onChange={handleSearch}
        className="placeholder-foreground w-full h-full focus:px-4 transition-[padding] mobile:placeholder-gray"
      />

      {!isMobile && (
        <svg
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray aspect-square w-4 h-4"
        >
          <circle cx="5.14286" cy="5.14286" r="4.64286" stroke="currentColor" />
          <path d="M8.57141 8.57143L12 12" stroke="currentColor" />
        </svg>
      )}
    </form>
  );
}
