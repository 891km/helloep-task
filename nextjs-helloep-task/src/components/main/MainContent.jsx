"use client";
import FilterCategory from "@/components/filter/FilterCategory";
import LayoutButton from "@/components/buttons/LayoutButton";
import ResultGrid from "@/components/results/ResultGrid";
import FilterYear from "@/components/filter/FilterYear";
import FilterResult from "@/components/filter/FilterResult";
import FilterSearch from "@/components/filter/FilterSearch";
import Pagination from "@/components/main/Pagination";
import ResultList from "@/components/results/ResultList";
import { useLayout } from "@/provider/LayoutProvider";
import ResultEmpty from "@/components/results/ResultEmpty";
import useMediaQuery from "@/hooks/useMediaQuery";
import FilterResetButton from "@/components/buttons/FilterResetButton";

export default function MainContent({ currentPosts, postCount, years, page }) {
  const { isMobile } = useMediaQuery();
  const { isList } = useLayout();

  return (
    <>
      {isMobile ? (
        <section className="w-full flex flex-col text-lg whitespace-nowrap bg-background/80 sticky top-10 z-10 *:h-10">
          <h2 className="sr-only">카테고리, 검색어 및 연도별 필터</h2>
          <div className="flex gap-2 border-b border-b-gray">
            <FilterSearch />
            <FilterResetButton />
            <LayoutButton />
          </div>
          <div className="flex gap-2">
            <FilterCategory />
            <FilterYear years={years} />
          </div>
        </section>
      ) : (
        <>
          <section
            className={`py-1.5 w-full flex gap-x-8 items-start justify-between text-xl whitespace-nowrap bg-background/80 sticky top-10 z-10`}
          >
            <h2 className="sr-only">카테고리 필터</h2>
            <FilterCategory />
            <LayoutButton />
          </section>

          <section className="mt-12 flex gap-2.5 *:h-8">
            <h2 className="sr-only">검색어 및 연도별 필터</h2>
            <FilterSearch />
            <FilterYear years={years} />
            <FilterResult postCount={postCount} />
          </section>
        </>
      )}

      <section>
        <h2 className="sr-only">검색 결과 목록</h2>

        {isMobile && <FilterResult postCount={postCount} />}

        <div className="mt-11">
          {currentPosts.length > 0 ? (
            isList ? (
              <ResultList posts={currentPosts} />
            ) : (
              <ResultGrid posts={currentPosts} />
            )
          ) : (
            <ResultEmpty />
          )}
        </div>
        <Pagination postCount={postCount} page={page} />
      </section>
    </>
  );
}
