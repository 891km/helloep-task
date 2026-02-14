import MainContent from "@/components/MainContent";
import { fetchPosts, fetchTotalPages, fetchWorkYears } from "@/sanity/queries";

export default async function MainPage({ searchParams }) {
  const params = await searchParams;

  const [posts, years, totalPages] = await Promise.all([
    fetchPosts({
      category: params?.category,
      workYear: params?.workYear,
      search: params?.search,
      page: params?.page,
    }),
    fetchWorkYears(),
    fetchTotalPages(),
  ]);

  return <MainContent posts={posts} years={years} totalPages={totalPages} />;
}
