import { site } from "@/lib/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icon";

/** Thin contact strip above the header. */
export function TopBar() {
  return (
    <div className="bg-forest-900 text-cream hidden text-sm sm:block">
      <div className="shell flex flex-wrap items-center justify-between gap-x-7 gap-y-2 py-2.5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5">
          <a href={site.phone.href} className="flex items-center gap-2 font-semibold">
            <PhoneIcon size={16} className="stroke-gold" strokeWidth={2} />
            {site.phone.display}
          </a>
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 font-semibold"
          >
            <WhatsAppIcon size={16} className="stroke-gold" strokeWidth={2} />
            WhatsApp {site.whatsapp.display}
          </a>
          <a
            href={site.email.href}
            className="hidden items-center gap-2 font-semibold lg:flex"
          >
            <MailIcon size={16} className="stroke-gold" strokeWidth={2} />
            {site.email.display}
          </a>
        </div>
        <div className="text-gold hidden text-xs font-semibold tracking-[0.08em] uppercase lg:block">
          {site.address.room} &middot; {site.address.short}
        </div>
      </div>
    </div>
  );
}
