"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";

/**
 * Compact menu for narrow screens. Closes on outside click, on Escape and
 * whenever a link is followed.
 */
export function MobileNav({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
        className="font-display border-forest-800 text-forest-800 cursor-pointer rounded-full border-2 px-5 py-2.5 text-[15px] font-bold"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Main"
          className="font-display border-line absolute top-[calc(100%+10px)] right-0 z-40 flex min-w-[220px] flex-col rounded-2xl border bg-white p-2.5 shadow-[0_20px_40px_rgb(12_51_32_/_0.2)]"
        >
          {nav.map((item) => {
            const active = item.href === currentPath;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-[10px] px-4 py-3.5 font-semibold ${
                  active ? "bg-sand text-forest-800" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
