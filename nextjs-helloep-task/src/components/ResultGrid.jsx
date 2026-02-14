import CategoryTag from "@/components/CategoryTag";
import { useLanguage } from "@/provider/LanguageProvider";
import { urlFor } from "@/utils/urlFor";
import Link from "next/link";

export default function ResultGrid({ posts }) {
  const { isKor } = useLanguage();

  return (
    <ul className="flex flex-wrap items-baseline gap-2.5">
      {posts.map((post) => {
        return (
          <li key={post._id}>
            <Link
              href={`${post.slug.current}`}
              className="flex flex-col gap-2 hover:opacity-50"
            >
              <img
                src={urlFor(post.thumbnail.asset._ref)}
                alt={`${post.title} 썸네일`}
                decoding="async"
                loading="lazy"
              />
              <h3 className="text-base/5">
                {isKor ? post.title : post.eng.title}
              </h3>
              <ul className="flex flex-wrap gap-1">
                {post.categories.map((category) => (
                  <CategoryTag key={category} category={category} />
                ))}
              </ul>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
