"use client";
import { components } from "@/sanity/components";
import { PortableText } from "@portabletext/react";

export default function CVContent({ content: cv }) {
  if (!cv && !cv?.content)
    return (
      <div className="p-2.5 text-lg flex flex-col gap-4">
        아직 등록된 내용이 없습니다.
      </div>
    );

  return (
    <div className="w-full text-lg flex flex-col gap-2.5">
      <PortableText value={cv.content} components={components} />
    </div>
  );
}
