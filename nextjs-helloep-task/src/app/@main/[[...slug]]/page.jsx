import MainContent from "@/components/main/MainContent";
import { fetchPosts, fetchWorkYears } from "@/sanity/queries";
import { PAGE_SIZE } from "@/utils/constants";

export default async function MainPage({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchparams = await searchParams;

  const [posts, years] = await Promise.all([
    fetchPosts({
      category: resolvedSearchparams?.category,
      workYear: resolvedSearchparams?.workYear,
      search: resolvedSearchparams?.search,
      client: resolvedSearchparams?.client,
    }),
    fetchWorkYears(),
  ]);

  const page = resolvedSearchparams?.page
    ? Number(resolvedSearchparams?.page)
    : 1;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const currentSlug = resolvedParams?.slug?.[0] || "";
  const currentPosts = posts.slice(start, end);
  const postCount = posts.length;

  return (
    <MainContent
      currentSlug={currentSlug}
      currentPosts={currentPosts}
      postCount={postCount}
      years={years}
      page={page}
    />
  );
}
