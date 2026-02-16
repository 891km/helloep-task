"use client";
import { components } from "@/sanity/components";
import { PortableText } from "@portabletext/react";

export default function ContactContent({ content: contact }) {
  if (!contact && !contact?.content)
    return (
      <div className="w-full flex flex-col gap-4 text-lg mobile:text-base">
        아직 등록된 내용이 없습니다.
      </div>
    );

  return (
    <div className="w-full flex flex-col gap-4 text-lg mobile:text-base">
      <PortableText value={contact.content} components={components} />
    </div>
  );
}
