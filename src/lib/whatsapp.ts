import { site } from "./site";

/** Builds a wa.me deep link with a pre-filled message. */
export function whatsappLink(message?: string): string {
  if (!message) return site.whatsapp.href;
  return `${site.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link with a pre-filled subject and body. */
export function mailtoLink(subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `${site.email.href}?${params.toString()}`;
}
