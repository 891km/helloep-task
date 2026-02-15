"use client";
import { components } from "@/sanity/components";
import { PortableText } from "@portabletext/react";

export default function ContactContent({ content: contact }) {
  if (!contact && !contact?.content)
    return (
      <div className="p-2.5 text-lg flex flex-col gap-4">
        아직 등록된 내용이 없습니다.
      </div>
    );

  return (
    <div className="p-2.5 text-lg flex flex-col gap-4">
      <PortableText value={contact.content} components={components} />
    </div>
  );
}
