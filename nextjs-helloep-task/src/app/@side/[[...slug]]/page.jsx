import SideContent from "@/components/side/SideContent";
import { fetchContact, fetchCV, fetchPostBySlug } from "@/sanity/queries";

export default async function SideDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.[0];

  const [post, contact, cv] = await Promise.all([
    fetchPostBySlug(slug),
    fetchContact(),
    fetchCV(),
  ]);

  return <SideContent content={{ post, contact, cv }} />;
}
