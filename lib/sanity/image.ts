import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

/**
 * Builds optimized URLs for images stored in Sanity.
 */
export function urlFor(source: any) {
  return builder.image(source);
}
