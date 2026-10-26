import { site } from "./site";

/** Builds a wa.me deep link with a pre-filled message. */
export function whatsappLink(message?: string): string {
  if (!message) return site.whatsapp.href;
  return `${site.whatsapp.href}?text=${encodeURIComponent(message)}`;
}
