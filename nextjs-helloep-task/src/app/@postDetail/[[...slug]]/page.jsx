import PostContent from "@/components/side/PostContent";
import { fetchPostBySlug } from "@/sanity/queries";

export default async function PostDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.[0];

  const post = await fetchPostBySlug(slug);

  if (!post) return null;
  return <PostContent content={post} />;
}
