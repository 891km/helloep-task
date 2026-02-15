import MainContent from "@/components/main/MainContent";
import { fetchPosts, fetchWorkYears } from "@/sanity/queries";
import { PAGE_SIZE } from "@/utils/constants";

export default async function MainPage({ searchParams }) {
  const params = await searchParams;

  const [posts, years] = await Promise.all([
    fetchPosts({
      category: params?.category,
      workYear: params?.workYear,
      search: params?.search,
    }),
    fetchWorkYears(),
  ]);

  const page = params?.page ? Number(params?.page) : 1;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const currentPosts = posts.slice(start, end);
  const postCount = posts.length;

  return (
    <MainContent
      currentPosts={currentPosts}
      postCount={postCount}
      years={years}
      page={page}
    />
  );
}
