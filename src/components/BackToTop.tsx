"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icon";

/**
 * Returns a visitor to the top of a long page in one tap.
 *
 * It stays hidden until there is a screenful behind them, so it never covers
 * content on the short pages where scrolling back costs nothing. The scroll is
 * asked for without a `behavior` of its own, which leaves it to the
 * `scroll-behavior` the stylesheet sets: smooth normally, and instant for a
 * visitor who has asked for reduced motion.
 */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Reads are coalesced into a frame, so dragging a long page does not run
    // this on every scroll event. React drops the render when the answer has
    // not changed, which is most frames.
    let frame = 0;
    const read = () => {
      frame = 0;
      setShow(window.scrollY > window.innerHeight);
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0 });
        // Without this, keyboard focus stays at the foot of the page and the
        // next Tab carries on from where the visitor just left.
        document.getElementById("main")?.focus();
      }}
      className="btn-lift bg-forest-800 fixed right-5 bottom-5 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full shadow-[0_10px_24px_rgb(12_51_32_/_0.3)] lg:right-7 lg:bottom-7 lg:size-13"
    >
      <ArrowUpIcon size={22} className="stroke-cream" strokeWidth={2} />
    </button>
  );
}
