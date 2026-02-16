import CategoryTag from "@/components/CategoryTag";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useLanguage } from "@/provider/LanguageProvider";
import { urlFor } from "@/utils/urlFor";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Link from "next/link";

const gridItemRatio = [1.4, 1.2, 1, 1, 1, 0.8, 0.8];

function getRandomIndex(seed) {
  const random = Math.sin(seed * 9999) * 10000;
  const normalized = random - Math.floor(random);
  return Math.floor(normalized * gridItemRatio.length);
}

export default function ResultGrid({ posts }) {
  const { isMobile } = useMediaQuery();
  const { isKor } = useLanguage();

  return (
    <ul className="flex flex-wrap items-baseline gap-x-2.5 gap-y-11 after:content-[''] after:flex-1000">
      {posts.map((post, i) => {
        const ratio = gridItemRatio[getRandomIndex(i)];

        const imgSrc = urlFor(post.thumbnail.asset._ref);
        const { width, height } = getImageDimensions(post.thumbnail);

        return (
          <li
            key={post._id}
            style={{
              flexBasis: `${(isMobile ? 140 : 240) * ratio}px`,
            }}
            className="grow"
          >
            <Link
              href={`${post.slug.current}`}
              className="flex flex-col gap-2 hover:opacity-50 transition-opacity"
            >
              {imgSrc && (
                <Image
                  src={imgSrc}
                  alt={`${post.title} 썸네일`}
                  width={width}
                  height={height}
                  loading="eager"
                  className="w-full"
                />
              )}
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
