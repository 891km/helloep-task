import SideContent from "@/components/SideContent";
import SideHeader from "@/components/SideHeader";
import { fetchPostBySlug } from "@/sanity/queries";

export default async function SideDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.[0];
  const post = await fetchPostBySlug(slug);

  if (!slug && !post) {
    return null;
  }
  return <SideContent post={post} />;
}
