import { getCategoryColor, getCategoryLabel } from "@/utils/categories";

export default function CategoryTag({ category }) {
  return (
    <li
      className={`${getCategoryColor(category)} rounded-sm px-1 text-black text-xs w-fit h-fit`}
    >
      {getCategoryLabel(category)}
    </li>
  );
}
