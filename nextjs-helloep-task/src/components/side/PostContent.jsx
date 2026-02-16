"use client";
import CategoryTag from "@/components/CategoryTag";
import { useLanguage } from "@/provider/LanguageProvider";
import { getYoutubeEmbed } from "@/utils/getYoutubeEmbed";
import { cn } from "@/utils/tailwindcss";
import { urlFor } from "@/utils/urlFor";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { useState } from "react";

export default function PostContent({ content: post }) {
  const { isKor } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!post) return;

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex flex-col w-full flex-1 overflow-y-auto pb-30">
        {/* title */}
        <div className="px-2.5 py-3 pb-8 flex gap-4 justify-between items-start">
          <span className="text-2xl">
            {isKor ? post.title : post.eng.title}
          </span>

          <div className="flex gap-1.5 mt-1">
            <span className="h-4 flex items-center">{post.workYear}</span>
            <ul className="flex flex-col gap-1 justify-start items-end">
              {post.categories.map((category) => (
                <CategoryTag key={category} category={category} />
              ))}
            </ul>
          </div>
        </div>

        {/* content */}
        <div className="px-2.5 flex flex-col gap-4">
          {post.content.map((content, i) => {
            if (content._type === "youtubeEmbed") {
              const src = getYoutubeEmbed(content.url);
              if (!src) return null;

              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-full aspect-9/16">
                    <iframe
                      title={`${post.title} 작업 ${i + 1}`}
                      src={src}
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  {content.caption && <span>{content.caption}</span>}
                </div>
              );
            }

            if (content._type === "image") {
              const src = urlFor(content.asset._ref);
              if (!src) return null;

              const { width, height } = getImageDimensions(content);
              return (
                <div key={i} className="flex flex-col gap-2">
                  <Image
                    src={src}
                    alt={`${post.title} 작업 ${i + 1}`}
                    width={width}
                    height={height}
                    loading="eager"
                  />
                  {content.caption && <span>{content.caption}</span>}
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* description */}
      <div
        className={cn(
          "absolute right-0 bottom-30",
          "w-full h-full flex flex-col p-2.5 pr-10",
          "bg-background transition-transform duration-500",
          `${isExpanded ? "translate-y-30" : "translate-y-full"}`,
        )}
      >
        <MoreButton
          onClick={() => setIsExpanded((prev) => !prev)}
          isExpanded={isExpanded}
        />
        <div className="flex-1 flex flex-col gap-7 overflow-y-auto pb-20">
          <p className={`whitespace-pre-line ${!isExpanded && "line-clamp-2"}`}>
            {isKor ? post.description : post.eng.description}
          </p>
          <p className="whitespace-pre-line">
            {isKor ? post.credit : post.eng.credit}
          </p>
          <span>
            {isKor ? "클라이언트." : "Client."} {post.client}
          </span>

          {post.workLinks && post.workLinks.length > 0 && (
            <ul className="w-full">
              {post.workLinks.map((link) => (
                <li key={link} className="w-full flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="shrink-0 w-4 h-4 my-0.5"
                  >
                    <path d="M1 12h22" />
                    <path d="M12 1v22" />
                  </svg>
                  <a
                    href={link}
                    target="_blank"
                    className="text-base/5 w-full wrap-break-word hover:text-gray"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function MoreButton({ onClick, isExpanded }) {
  return (
    <button
      className="absolute top-1 right-1 w-8 h-8 flex items-center justify-center"
      onClick={onClick}
    >
      <span className="sr-only">더보기</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className={`${isExpanded ? "-rotate-180" : "rotate-0"}`}
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    </button>
  );
}
