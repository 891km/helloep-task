import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4bwya28c",
  dataset: "production",
  apiVersion: "2026-02-13",
  useCdn: false,
});
