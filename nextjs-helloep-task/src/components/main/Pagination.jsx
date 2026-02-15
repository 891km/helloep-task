import { PAGE_SIZE } from "@/utils/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PAGE_VISIBLE_NUM = 3;

function getPagenation(current, total) {
  const pagination = [];

  pagination.push(1);

  if (total !== 1) {
    let start = Math.max(2, current - PAGE_VISIBLE_NUM);
    let end = Math.min(current + PAGE_VISIBLE_NUM, total - 1);

    if (start - 1 >= 2) {
      pagination.push("···");
    }

    for (let i = start; i <= end; i++) {
      pagination.push(i);
    }

    if (total - end >= 2) {
      pagination.push("···");
    }

    pagination.push(total);
  }

  return pagination;
}

export default function Pagination({ postCount, page: currentPageNum }) {
  const searchParams = useSearchParams();
  const totalPageNum = Math.ceil(postCount / PAGE_SIZE);

  if (totalPageNum <= 1 || currentPageNum > totalPageNum) return null;

  const pagination = getPagenation(currentPageNum, totalPageNum);

  const createHref = (pageNum) => {
    const params = new URLSearchParams(searchParams.toString());

    if (pageNum <= 1) {
      params.delete("page");
    } else {
      params.set("page", pageNum);
    }

    const query = params.toString();
    return query ? `/?${query}` : "/";
  };

  return (
    <nav className="mt-4.5">
      <ul className="flex gap-1 h-5">
        {pagination.map((pageNum, i) => {
          if (typeof pageNum === "number") {
            return (
              <li
                key={pageNum}
                className={`rounded-sm transition-colors hover:bg-[#2a2a2a] bg-[#464646] ${+currentPageNum === +pageNum && "bg-background"}`}
              >
                <Link
                  href={createHref(pageNum)}
                  className={`px-1.75 h-full flex items-center`}
                >
                  {pageNum}
                </Link>
              </li>
            );
          } else {
            return (
              <li
                key={`${"ellipsis" + i}`}
                className="px-1.75 h-full flex items-center"
              >
                {pageNum}
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
