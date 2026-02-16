"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSearchValue = searchParams.get("search") || "";

  const [searchValue, setSearchValue] = useState(currentSearchValue);

  useEffect(() => {
    setSearchValue(currentSearchValue);
  }, [currentSearchValue]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (searchValue.trim()) {
      params.set("search", searchValue.trim());
    } else {
      params.delete("search");
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <form
      className="flex-2 bg-[#D9D9D91A] border-b px-2 w-1/2 border-b-gray flex"
      onSubmit={handleSearchSubmit}
    >
      <label htmlFor="search" className="sr-only">
        검색어
      </label>
      <input
        id="search"
        type="search"
        placeholder="Serach"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="placeholder-foreground w-full h-full focus:px-4 transition-[padding]"
      />

      <button type="submit">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.14286" cy="5.14286" r="4.64286" stroke="#787878" />
          <path d="M8.57141 8.57143L12 12" stroke="#787878" />
        </svg>
        <span className="sr-only">검색하기</span>
      </button>
    </form>
  );
}
