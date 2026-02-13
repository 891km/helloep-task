import SideContent from "@/components/SideContent";
import { fetchPostDetail } from "@/sanity/queries";

export default async function SidePage({ params }) {
  const post = await fetchPostDetail(params);
  return <SideContent post={post} />;
}
