import Link from "next/link";
import type { ReactNode } from "react";
import { TickIcon } from "./Icon";

/** Page gutter and max width, shared by every section. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`shell ${className}`}>{children}</div>;
}

/** Small uppercase eyebrow with a leading rule. */
export function SectionLabel({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-gold" : "text-gold-800";
  const rule = tone === "dark" ? "bg-gold" : "bg-gold-800";
  return (
    <p
      className={`flex items-center gap-2.5 text-xs tracking-[0.16em] font-bold uppercase lg:gap-3.5 lg:text-[13px] lg:tracking-[0.18em] ${color}`}
    >
      <span aria-hidden="true" className={`block h-0.5 w-7 lg:w-11 ${rule}`} />
      {children}
    </p>
  );
}

type ButtonVariant =
  | "gold"
  | "forest"
  | "dark"
  | "outlineCream"
  | "outlineForest"
  | "outlineDark";

const buttonVariants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-forest-900",
  forest: "bg-forest-800 text-cream",
  dark: "bg-forest-900 text-cream",
  outlineCream: "border-2 border-cream text-cream",
  outlineForest: "border-2 border-forest-800 text-forest-800",
  outlineDark: "border-2 border-forest-900 text-forest-900",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  /** Fills its container at every width, for a lone button under a card. */
  block?: boolean;
};

/** Pill link. Uses next/link for internal routes, <a> for tel/mail/WhatsApp. */
export function ButtonLink({
  href,
  children,
  variant = "forest",
  size = "md",
  className = "",
  external,
  block = false,
}: ButtonLinkProps) {
  const outlined = variant.startsWith("outline");
  // Outlined buttons carry a 2px border, so they lose 2px of padding to keep
  // every pill in a row the same height.
  const padding =
    size === "lg"
      ? outlined
        ? "px-6 py-3.5 lg:px-[30px] lg:py-4"
        : "px-6 py-4 lg:px-[30px] lg:py-[18px]"
      : outlined
        ? "px-6 py-3.5"
        : "px-6 py-4";
  const text = size === "lg" ? "text-[17px]" : "text-base";
  const width = block ? "flex w-full" : "inline-flex";
  const classes = `btn-lift font-display ${width} items-center justify-center gap-2.5 rounded-full text-center font-bold ${padding} ${text} ${buttonVariants[variant]} ${className}`;

  const isExternal = external ?? /^(https?:|tel:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/**
 * Row of calls to action. On phones the buttons stack and run the full width,
 * which is what the mobile artboards specify and what thumbs expect; from the
 * `sm` breakpoint up they sit side by side as pills.
 */
export function ButtonRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5 [&>*]:w-full sm:[&>*]:w-auto">
      {children}
    </div>
  );
}

/** Feature list with the brand tick. */
export function CheckList({
  items,
  tone = "light",
  className = "",
}: {
  items: readonly string[];
  tone?: "light" | "gold";
  className?: string;
}) {
  const stroke = tone === "gold" ? "stroke-forest-900" : "stroke-forest-600";
  return (
    <ul
      className={`flex flex-col gap-2 text-base leading-snug lg:gap-2.5 lg:text-[17px] ${className}`}
    >
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 lg:gap-3">
          <TickIcon
            size={20}
            className={`mt-0.5 shrink-0 lg:size-[22px] ${stroke}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Band that closes most pages. Gold with dark text by default; pass `backdrop`
 * to put a photograph or video behind it, which flips the type to cream.
 */
export function CtaBand({
  heading,
  body,
  actions,
  backdrop,
}: {
  heading: string;
  body?: string;
  actions: ReactNode;
  backdrop?: ReactNode;
}) {
  return (
    <section
      className={`py-12 lg:py-21 ${
        backdrop
          ? "photo-zoom text-cream relative overflow-hidden"
          : "bg-gold text-forest-900"
      }`}
    >
      {backdrop}
      <Container className="relative flex flex-wrap items-center justify-between gap-x-12 gap-y-6 lg:gap-y-7">
        <div className="max-w-[700px]">
          <h2 className="text-[clamp(32px,4.6vw,60px)] leading-[1.06] text-balance">
            {heading}
          </h2>
          {body && (
            <p
              className={`mt-3 text-[17px] leading-normal lg:mt-3.5 lg:text-xl ${
                backdrop ? "text-on-dark" : ""
              }`}
            >
              {body}
            </p>
          )}
        </div>
        <div className="w-full sm:w-auto">{actions}</div>
      </Container>
    </section>
  );
}
