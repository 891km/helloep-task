import { useCategories } from "@/provider/CategoriesProvider";
import { getCategoryColor, getCategoryLabel } from "@/utils/categories";

export default function CategoryTag({ category }) {
  const { categories } = useCategories();

  const color = getCategoryColor({ categories, value: category });
  const label = getCategoryLabel({ categories, value: category });

  return (
    <li
      className={`bg-[${color}] rounded-sm px-1 text-black text-xs w-fit h-fit`}
    >
      {label}
    </li>
  );
}
