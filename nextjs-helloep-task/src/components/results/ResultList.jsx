import CategoryTag from "@/components/CategoryTag";
import { useLanguage } from "@/provider/LanguageProvider";
import Link from "next/link";

export default function ResultList({ posts }) {
  const { isKor } = useLanguage();

  return (
    <ul className="flex flex-col">
      {posts.map((post) => {
        return (
          <li key={post._id}>
            <Link
              href={`${post.slug.current}`}
              className="flex items-start gap-2.5 py-2 border-b border-b-gray hover:opacity-50 transition-opacity"
            >
              <div className="flex-2 flex flex-wrap items-center self-center gap-x-3 gap-y-2">
                <h3 className="text-base/5">
                  {isKor ? post.title : post.eng.title}
                </h3>
                <ul className="flex flex-wrap gap-1">
                  {post.categories.map((category) => (
                    <CategoryTag key={category} category={category} />
                  ))}
                </ul>
              </div>
              <div className="flex-1">{post.workYear}</div>
              <div className="flex-1">{post.client}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
