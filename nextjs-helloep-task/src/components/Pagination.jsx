import Link from "next/link";
import { useSearchParams } from "next/navigation";

const tempPagination = Array.from({ length: 15 }, (_, i) => i + 1);

export default function Pagination({ totalPages }) {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");

  if (totalPages <= 1) return null;
  return (
    <nav className="mt-4.5">
      <ul className="flex gap-1">
        {tempPagination.slice(0, 6).map((num) => (
          <NumberItem key={num}>
            <Link href="/">{num}</Link>
          </NumberItem>
        ))}
        <span>···</span>
        <NumberItem>
          <Link href="/">{tempPagination[tempPagination.length - 1]}</Link>
        </NumberItem>
      </ul>
    </nav>
  );
}

function NumberItem({ children }) {
  return (
    <li
      className={`px-1.75 h-5 flex items-center bg-[#464646] rounded-sm hover:bg-[#2a2a2a] cursor-pointer transition-colors`}
    >
      {children}
    </li>
  );
}
