"use client";
import ClientContent from "@/components/side/ClientContent";
import ContactContent from "@/components/side/ContactContent";
import CVContent from "@/components/side/CVContent";
import { useSideMenu } from "@/provider/SideMenuProvider";

export default function SideContent({ content }) {
  const { contact, cv } = content;
  const { currentMenu } = useSideMenu();

  if (currentMenu === "CV") {
    return <CVContent content={cv} />;
  } else if (currentMenu === "Client") {
    return <ClientContent />;
  } else if (currentMenu === "Post") {
    return null;
  } else {
    return <ContactContent content={contact} />;
  }
}
