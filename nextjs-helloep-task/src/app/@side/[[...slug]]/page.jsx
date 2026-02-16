import SideContent from "@/components/side/SideContent";
import { fetchContact, fetchCV } from "@/sanity/queries";

export default async function SideDetailPage() {
  const [contact, cv] = await Promise.all([fetchContact(), fetchCV()]);

  return <SideContent content={{ contact, cv }} />;
}
