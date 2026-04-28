/**
 * Image assets pulled from the live Toast site.
 *
 * We hotlink these via the unsigned Toast CDN (`d28f3w0x9i80nq.cloudfront.net`)
 * because the signed variants include a per-size hash that rotates.
 *
 * To self-host later:
 *   1. Download each file into `public/images/toast/<filename>`.
 *   2. Replace `cdn(...)` calls with `/images/toast/<filename>`.
 *   3. Optionally drop the two cloudfront hosts from `next.config.mjs`.
 */

const RESTAURANT_ID = "52208dc8-67b9-4844-a2f4-71c62be5f5cd";
const CDN_BASE = `https://d28f3w0x9i80nq.cloudfront.net/restaurantImages/${RESTAURANT_ID}`;

const cdn = (name: string) => `${CDN_BASE}/${name}`;

/** Canonical image references keyed by page/section they appear on. */
export const toastImages = {
  heroStorefront: cdn("20251124_164205.jpg"),
  gardenCenter: cdn("IMG_1142.JPG"),
  bruceSpruce: cdn("BruceTheSpruce.png"),
  sandwich: cdn("Sandwich2.jpeg"),
  sandwiches: cdn("Sandwiches.jpg"),
  mulchBlack: cdn("blackmulch11.jpg"),
  mulchBrown: cdn("brownmulch.jpeg"),
  topsoil: cdn("screenedtopsoil.jpg"),
  compost: cdn("compost.jpg"),
} as const;

export type ToastImageKey = keyof typeof toastImages;
