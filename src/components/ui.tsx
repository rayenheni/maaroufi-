import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export const container = "mx-auto w-full max-w-[1320px] px-5 md:px-10";

export const btnPrimary =
  "group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-[15px] font-bold text-white shadow-[0_14px_30px_-14px_rgba(47,63,143,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700";

export const btnWhite =
  "group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[15px] font-bold text-primary shadow-[0_14px_30px_-14px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-50";

export const btnOutline =
  "group inline-flex items-center justify-center gap-3 rounded-full border border-primary/25 px-7 py-4 text-[15px] font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* Arrow glyph + small blue label used before every section title */
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-[13px] font-bold",
        light ? "text-white/80" : "text-primary",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full",
          light ? "bg-white/15" : "bg-primary/10",
        )}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 rtl:-scale-x-100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  light = false,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "font-heading text-3xl font-bold leading-[1.45] md:text-4xl lg:text-[2.75rem] ltr:leading-[1.2]",
        light ? "text-white" : "text-dark",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
