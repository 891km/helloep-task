"use client";
import ClientContent from "@/components/side/ClientContent";
import ContactContent from "@/components/side/ContactContent";
import CVContent from "@/components/side/CVContent";
import PostContent from "@/components/side/PostContent";
import { useSideNav } from "@/provider/SideNavProvider";

export default function SideContent({ content }) {
  const { post, contact, cv } = content;
  const { currentMenu } = useSideNav();

  if (post) {
    return <PostContent content={post} />;
  } else if (currentMenu === "CV") {
    return <CVContent content={cv} />;
  } else if (currentMenu === "Client") {
    return <ClientContent />;
  } else if (currentMenu === "Contact") {
    return <ContactContent content={contact} />;
  }
}
