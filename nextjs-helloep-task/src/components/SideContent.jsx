"use client";
import CategoryTag from "@/components/CategoryTag";
import { getYoutubeEmbed } from "@/utils/getYoutubeEmbed";
import { urlFor } from "@/utils/urlFor";
import { useState } from "react";

export default function SideContent({ post }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex-1 w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col w-full overflow-y-auto">
        {/* title */}
        <div className="px-2.5 py-3 pb-8 flex gap-4 justify-between items-start">
          <span className="text-2xl">{post.title}</span>

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
        <div className="px-2.5 pb-28 flex flex-col gap-4">
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
              return (
                <div key={i} className="flex flex-col gap-2">
                  <img
                    src={urlFor(content.asset._ref)}
                    alt={`${post.title} 작업 ${i + 1}`}
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
        className={`shrink-0 absolute right-0 bg-background w-full h-full flex flex-col gap-7 p-2.5 pr-10 bottom-28 transition-transform duration-500 ${isExpanded ? "translate-y-28" : "translate-y-full"}`}
      >
        <MoreButton
          onClick={() => setIsExpanded((prev) => !prev)}
          isExpanded={isExpanded}
        />
        <p className={`whitespace-pre-line ${!isExpanded && "line-clamp-2"}`}>
          {post.description}
        </p>
        <p className="whitespace-pre-line">{post.credit}</p>
        <span>클라이언트. {post.client}</span>

        {post.workLinks && post.workLinks.length > 0 && (
          <div>
            {post.workLinks.map((link) => (
              <a
                key={link}
                href={link}
                target="_blank"
                className="flex gap-1 items-center hover:text-gray"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-4 h-4"
                >
                  <path d="M1 12h22" />
                  <path d="M12 1v22" />
                </svg>
                {link}
              </a>
            ))}
          </div>
        )}
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
