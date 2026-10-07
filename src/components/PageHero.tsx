import Link from "next/link";
import type { ReactNode } from "react";
import { PageHeroScene, type HeroVariant } from "./illustrations/PageHeroScene";
import { Container } from "./ui";

/**
 * Shared banner for every page but Home: breadcrumb, headline with one gold
 * word, and an optional row of actions.
 */
export function PageHero({
  variant,
  crumb,
  headline,
  intro,
  actions,
  /** Extra bottom padding when a card overlaps the band below it. */
  deep = false,
  /**
   * A deeper band that also starts its content lower, so the top of the
   * backdrop photograph is left clear for whatever is in it.
   */
  tall = false,
  /** Replaces the illustrated backdrop, e.g. with a photo or video. */
  media,
}: {
  variant: HeroVariant;
  crumb: string;
  headline: ReactNode;
  intro: string;
  actions?: ReactNode;
  deep?: boolean;
  tall?: boolean;
  media?: ReactNode;
}) {
  return (
    <section className="bg-forest-900 text-cream relative overflow-hidden">
      {media ?? <PageHeroScene variant={variant} />}
      <Container
        className={`relative ${
          tall ? "pt-28 lg:pt-60" : "pt-8.5 lg:pt-17"
        } ${
          deep
            ? "pb-27.5 lg:pb-[150px]"
            : tall
              ? "pb-20 lg:pb-28"
              : "pb-16 lg:pb-25"
        }`}
      >
        <p className="text-on-dark-soft text-[13px] lg:text-sm">
          <Link href="/" className="underline underline-offset-[3px]">
            Home
          </Link>{" "}
          <span aria-hidden="true">/</span> {crumb}
        </p>
        <h1 className="mt-4 max-w-[900px] text-[clamp(40px,6vw,82px)] leading-[1.05] text-balance lg:mt-5.5">
          {headline}
        </h1>
        <p className="text-on-dark mt-3.5 max-w-[620px] text-base leading-relaxed text-pretty lg:mt-5.5 lg:text-[clamp(17px,1.5vw,20px)]">
          {intro}
        </p>
        {actions && <div className="mt-5.5 lg:mt-7.5">{actions}</div>}
      </Container>
    </section>
  );
}
