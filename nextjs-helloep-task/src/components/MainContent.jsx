"use client";
import FilterCategory from "@/components/FilterCategory";
import LayoutButton from "@/components/LayoutButton";
import ResultGrid from "@/components/ResultGrid";
import FilterYear from "@/components/FilterYear";
import FilterReset from "@/components/FilterReset";
import FilterSearch from "@/components/FilterSearch";
import Pagination from "@/components/Pagination";
import ResultList from "@/components/ResultList";
import { useLayout } from "@/provider/LayoutProvider";
import ResultEmpty from "@/components/ResultEmpty";

export default function MainContent({ currentPosts, postCount, years, page }) {
  const { isList, setIsList } = useLayout();

  return (
    <>
      <section
        className={`py-1.5 w-full flex gap-x-8 items-start justify-between text-gray text-xl whitespace-nowrap bg-background/80 sticky top-10 z-10`}
      >
        <h2 className="sr-only">카테고리 필터</h2>
        <FilterCategory />
        <LayoutButton isList={isList} setIsList={setIsList} />
      </section>

      <section className="mt-12 h-8 flex gap-2.5">
        <h2 className="sr-only">검색어 및 연도별 필터</h2>
        <FilterSearch />
        <FilterYear years={years} />
        <FilterReset postCount={postCount} />
      </section>

      <section className="mt-11">
        <h2 className="sr-only">검색 결과 목록</h2>
        {currentPosts.length > 0 ? (
          isList ? (
            <ResultList posts={currentPosts} />
          ) : (
            <ResultGrid posts={currentPosts} />
          )
        ) : (
          <ResultEmpty />
        )}
        <Pagination postCount={postCount} page={page} />
      </section>
    </>
  );
}
