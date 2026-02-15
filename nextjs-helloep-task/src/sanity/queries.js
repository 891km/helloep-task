import { client } from "@/sanity/client";

const options = { next: { revalidate: 3600 } };

// --- posts ---
export async function fetchPosts({ category, workYear, search }) {
  const filters = ['_type == "post"', "defined(slug.current)"];

  if (category) {
    filters.push(`"${category}" in categories`);
  }

  if (workYear) {
    filters.push(`workYear == ${workYear}`);
  }

  if (search) {
    filters.push(`(
      title match "*${search}*" ||
      description match "*${search}*" ||
      credit match "*${search}*" ||
      eng.title match "*${search}*" ||
      eng.description match "*${search}*" ||
      eng.credit match "*${search}*" ||
      client match "*${search}*"
      )
    `);
  }

  const filterString = filters.join(" && ");

  const POSTS_QUERY = `
    *[${filterString}]{
        _id,
        slug,
        workYear,
        categories,
        client,
        thumbnail,
        title,
        eng{
        title,
        }
    } | order(workYear desc, publishedAt desc)
    `;

  return await client.fetch(POSTS_QUERY, {}, options);
}

export async function fetchPostBySlug(slug) {
  if (!slug) return null;

  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    slug,
    publishedAt,

    title,
    description,
    credit,
    eng{
      title,
      description,
      credit
    },

    thumbnail,
    workYear,
    categories,
    client,
    workLinks,

    content[]
  }`;

  return await client.fetch(POST_QUERY, { slug }, options);
}

export async function fetchWorkYears() {
  const YEARS_QUERY = `*[_type == "post" && defined(workYear)]{
    workYear
  } | order(workYear desc)`;

  const result = await client.fetch(YEARS_QUERY);
  const years = Array.from(new Set(result.map((item) => item.workYear)));
  return years;
}

// --- contact ---
export async function fetchContact() {
  const CONTACT_QUERY = `*[_type == "contact"][0]{
    content[]
  }`;
  return await client.fetch(CONTACT_QUERY, {}, options);
}

// --- cv ---
export async function fetchCV() {
  const CV_QUERY = `*[_type == "CV"][0]{
    content[]
  }`;
  return await client.fetch(CV_QUERY, {}, options);
}
