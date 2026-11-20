import { useLang } from "../i18n";
import { cn } from "../utils/cn";

export function LogoEmblem({
  className = "h-11 w-11",
  glow = true,
  variant = "blue",
}: {
  className?: string;
  glow?: boolean;
  /** "blue": royal-blue tile with white mark (default).
   *  "white": white tile with royal-blue mark — for use on blue backgrounds. */
  variant?: "blue" | "white";
}) {
  const onBlue = variant === "blue";
  const mark = onBlue ? "#ffffff" : "#2f3f8f";
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(
        "shrink-0",
        className,
        glow && "drop-shadow-[0_4px_12px_rgba(47,63,143,0.35)]",
      )}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="شعار مكتب الأستاذ هيثم المعروفي للمحاماة"
    >
      <defs>
        {/* Royal blue tile */}
        <linearGradient id="tileBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a51c0" />
          <stop offset="50%" stopColor="#2f3f8f" />
          <stop offset="100%" stopColor="#1b2870" />
        </linearGradient>

        {/* Soft sheen on the tile */}
        <radialGradient id="tileSheen" cx="50%" cy="34%" r="62%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Pure white linework */}
        <linearGradient id="markWhite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eaf0ff" />
        </linearGradient>
      </defs>

      {/* Blue rounded tile */}
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="22"
        fill={onBlue ? "url(#tileBlue)" : "#ffffff"}
        stroke={mark}
        strokeOpacity="0.35"
        strokeWidth="1.4"
      />
      <circle cx="50" cy="48" r="44" fill={onBlue ? "url(#tileSheen)" : "none"} />

      {/* Inner white filigree frame */}
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx="17"
        fill="none"
        stroke={mark}
        strokeOpacity="0.3"
        strokeWidth="0.8"
      />

      {/* Geometric diamond hint */}
      <path
        d="M50 12 L86 48 L50 84 L14 48 Z"
        fill="none"
        stroke={mark}
        strokeOpacity="0.18"
        strokeWidth="0.6"
      />

      {/* Scales of justice */}
      <path d="M50 15 L52.5 19.5 L50 21 L47.5 19.5 Z" fill={mark} />
      <circle cx="50" cy="23" r="2.2" fill={mark} />
      <path d="M48.7 24 H51.3 V67 H48.7 Z" fill={mark} />

      <path
        d="M22 32.5 C34 31 42 30 50 30 C58 30 66 31 78 32.5"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <line x1="24" y1="33" x2="16" y2="48" stroke={mark} strokeWidth="1" />
      <line x1="24" y1="33" x2="32" y2="48" stroke={mark} strokeWidth="1" />
      <path
        d="M14 48.5 Q24 57 34 48.5 Z"
        fill={mark}
        fillOpacity="0.18"
        stroke={mark}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <line x1="76" y1="33" x2="68" y2="48" stroke={mark} strokeWidth="1" />
      <line x1="76" y1="33" x2="84" y2="48" stroke={mark} strokeWidth="1" />
      <path
        d="M66 48.5 Q76 57 86 48.5 Z"
        fill={mark}
        fillOpacity="0.18"
        stroke={mark}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Open law book */}
      <path
        d="M50 67 C42 63.5 34 64.5 28 66.5 V77.5 C34 75.5 42 74.5 50 78 Z"
        fill="none"
        stroke={mark}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M50 67 C58 63.5 66 64.5 72 66.5 V77.5 C66 75.5 58 74.5 50 78 Z"
        fill="none"
        stroke={mark}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="50" y1="67" x2="50" y2="78" stroke={mark} strokeWidth="1.5" />

      <path d="M33 69.5 Q41 68 47 70" stroke={mark} strokeOpacity="0.75" strokeWidth="0.7" />
      <path d="M33 72.5 Q41 71 47 73" stroke={mark} strokeOpacity="0.75" strokeWidth="0.7" />
      <path d="M67 69.5 Q59 68 53 70" stroke={mark} strokeOpacity="0.75" strokeWidth="0.7" />
      <path d="M67 72.5 Q59 71 53 73" stroke={mark} strokeOpacity="0.75" strokeWidth="0.7" />

      {/* Pedestal */}
      <path d="M36 82 H64" stroke={mark} strokeWidth="2.2" strokeLinecap="round" />

      {/* Laurel leaves */}
      <g fill={mark} opacity="0.72">
        <path d="M12 40 C10 38 10 34 14 34 C14 37 13 39 12 40 Z" />
        <path d="M11 48 C9 46 9 42 13 42 C13 45 12 47 11 48 Z" />
        <path d="M12 56 C10 54 10 50 14 50 C14 53 13 55 12 56 Z" />
        <path d="M88 40 C90 38 90 34 86 34 C86 37 87 39 88 40 Z" />
        <path d="M89 48 C91 46 91 42 87 42 C87 45 88 47 89 48 Z" />
        <path d="M88 56 C90 54 90 50 86 50 C86 53 87 55 88 56 Z" />
      </g>

      {/* Corner accents */}
      <g fill={mark} opacity="0.85">
        <circle cx="15" cy="15" r="1.3" />
        <circle cx="85" cy="15" r="1.3" />
        <circle cx="15" cy="85" r="1.3" />
        <circle cx="85" cy="85" r="1.3" />
      </g>
    </svg>
  );
}

export function Logo({
  variant = "header",
  tone = "dark",
  className,
}: {
  variant?: "header" | "footer" | "hero";
  tone?: "dark" | "light";
  className?: string;
}) {
  const { lang } = useLang();
  const isAr = lang === "ar";

  if (variant === "footer") {
    return (
      <div className={cn("inline-flex items-center gap-4", className)}>
        <LogoEmblem className="h-14 w-14 shrink-0 md:h-16 md:w-16" />
        <div className="flex flex-col text-start">
          {isAr ? (
            <>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
                  المعروفي
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                <span className="text-[13px] font-semibold text-white">
                  الأستاذ هيثم
                </span>
              </div>
              <span className="mt-1 text-[11px] font-medium tracking-wide text-white/70">
                للمحاماة والاستشارات القانونية · الكاف
              </span>
            </>
          ) : (
            <>
              <span className="font-latin text-2xl font-bold tracking-widest text-white md:text-3xl">
                MAAROUFI
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/85">
                Cabinet d'Avocat · Le Kef
              </span>
            </>
          )}
        </div>
      </div>
    );
  }

  // Header lockup
  return (
    <div className={cn("flex items-center gap-3 md:gap-3.5", className)}>
      <LogoEmblem className="h-11 w-11 shrink-0 md:h-12 md:w-12" />
      <div className="flex flex-col text-start leading-tight">
        {isAr ? (
          <>
            <div className="flex items-baseline gap-1.5">
              <span
                className={cn(
                  "font-heading text-[22px] font-bold tracking-tight md:text-[24px]",
                  tone === "light" ? "text-white" : "text-[#2f3f8f]",
                )}
              >
                المعروفي
              </span>
              <span
                className={cn(
                  "text-[11px] font-bold md:text-[12px]",
                  tone === "light" ? "text-white/85" : "text-[#1b2870]",
                )}
              >
                | الأستاذ هيثم
              </span>
            </div>
            <span
              className={cn(
                "mt-0.5 text-[10px] font-semibold tracking-wider md:text-[10.5px]",
                tone === "light" ? "text-white/75" : "text-[#5b6886]",
              )}
            >
              للمحاماة والاستشارات القانونية
            </span>
          </>
        ) : (
          <>
            <span
              className={cn(
                "font-latin text-[19px] font-bold tracking-[0.12em] md:text-[21px]",
                tone === "light" ? "text-white" : "text-[#2f3f8f]",
              )}
            >
              MAAROUFI
            </span>
            <span
              className={cn(
                "mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] md:text-[10px]",
                tone === "light" ? "text-white/85" : "text-[#1b2870]",
              )}
            >
              Avocat · Le Kef
            </span>
          </>
        )}
      </div>
    </div>
  );
}
