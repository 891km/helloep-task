import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/utils/categories";

export default function FilterCategory() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const createHref = (category) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    const query = params.toString();
    return query ? `/?${query}` : "/";
  };

  return (
    <nav>
      <ul className="flex flex-wrap items-start gap-x-2.5 gap-y-0">
        <li className={`${!currentCategory ? "text-foreground" : "text-gray"}`}>
          <Link href={createHref()}>All</Link>
        </li>
        {CATEGORIES.map((cat) => (
          <li
            key={cat.value}
            className={`${currentCategory === cat.value ? "text-foreground" : "text-gray"}`}
          >
            <Link href={createHref(cat.value)}>{cat.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
