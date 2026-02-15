import { client } from "@/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const { projectId, dataset } = client.config();

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  if (projectId && dataset && source) {
    return builder.image(source).url();
  } else {
    return null;
  }
}
