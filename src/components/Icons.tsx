import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Scales = (p: Props) => (
  <Base {...p}>
    <path d="M12 3v17M8 20h8M5 6h14" />
    <path d="M5 6 2 13h6L5 6ZM19 6l-3 7h6l-3-7Z" />
    <path d="M2 13a3 3 0 0 0 6 0M16 13a3 3 0 0 0 6 0" />
  </Base>
);
export const Building = (p: Props) => (
  <Base {...p}>
    <path d="M4 21V9l8-5 8 5v12M2 21h20M8 21v-5h8v5M8 12h.01M12 12h.01M16 12h.01" />
  </Base>
);
export const Briefcase = (p: Props) => (
  <Base {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
  </Base>
);
export const Family = (p: Props) => (
  <Base {...p}>
    <path d="M3 11.5 12 4l9 7.5M5.5 10v10h13V10" />
    <path d="M12 17.5c-2.4-1.6-3-3-2.4-4.1.5-.9 1.7-.9 2.4-.1.7-.8 1.9-.8 2.4.1.6 1.1 0 2.5-2.4 4.1Z" />
  </Base>
);
export const Gavel = (p: Props) => (
  <Base {...p}>
    <path d="m14 4 6 6M12.5 5.5 5 13l6 6 7.5-7.5M8 17l-5 5M11 8l6 6" />
  </Base>
);
export const Users = (p: Props) => (
  <Base {...p}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
    <circle cx="9.5" cy="7.5" r="3.5" />
    <path d="M21 20v-1.5a4 4 0 0 0-3-3.85M16 4.2a3.5 3.5 0 0 1 0 6.6" />
  </Base>
);
export const Landmark = (p: Props) => (
  <Base {...p}>
    <path d="M3 21.5h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2.5 20 7.5H4l8-5Z" />
  </Base>
);
export const Coins = (p: Props) => (
  <Base {...p}>
    <circle cx="9" cy="9" r="5.5" />
    <path d="M16.3 6.9a5.5 5.5 0 1 1-9.4 5.4M7 9h4M9 7v4" />
  </Base>
);
export const FileText = (p: Props) => (
  <Base {...p}>
    <path d="M14.5 2.5H6.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7.5l-5-5Z" />
    <path d="M14 2.5v5h5.5M8.5 12.5h7M8.5 16.5h7" />
  </Base>
);
export const Chat = (p: Props) => (
  <Base {...p}>
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12Z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </Base>
);
export const Handshake = (p: Props) => (
  <Base {...p}>
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" />
  </Base>
);
export const Shield = (p: Props) => (
  <Base {...p}>
    <path d="M12 3 5 6v5.5c0 4.4 3 7.7 7 9.5 4-1.8 7-5.1 7-9.5V6l-7-3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Base>
);
export const Calendar = (p: Props) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4M16 3v4M3 10h18" />
  </Base>
);
export const Badge = (p: Props) => (
  <Base {...p}>
    <path d="M12 2.5 14.6 5h3.6l.3 3.6 2.9 2.2-1.4 3.3 1.4 3.3-2.9 2.2-.3 3.6h-3.6L12 21.5 9.4 23H5.8l-.3-3.6-2.9-2.2 1.4-3.3-1.4-3.3 2.9-2.2L5.8 5h3.6L12 2.5Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);
export const Lock = (p: Props) => (
  <Base {...p}>
    <rect x="3.5" y="11" width="17" height="10" rx="2" />
    <path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11M12 15v2" />
  </Base>
);
export const MapPin = (p: Props) => (
  <Base {...p}>
    <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.8" />
  </Base>
);
export const Phone = (p: Props) => (
  <Base {...p}>
    <path d="M6.2 3h3l1.6 4-2 1.5a12.5 12.5 0 0 0 6.7 6.7L17 13l4 1.6v3a2.4 2.4 0 0 1-2.6 2.4C10.4 19.4 4.6 13.6 3.8 5.6A2.4 2.4 0 0 1 6.2 3Z" />
  </Base>
);
export const Clock = (p: Props) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </Base>
);
export const Mail = (p: Props) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Base>
);
export const ArrowRight = (p: Props) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const ArrowUp = (p: Props) => (
  <Base {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Base>
);
export const ChevronDown = (p: Props) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);
export const Check = (p: Props) => (
  <Base {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Base>
);
export const Close = (p: Props) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);
export const Menu = (p: Props) => (
  <Base {...p}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </Base>
);
export const Globe = (p: Props) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 2.5a14 14 0 0 0 0 19 14 14 0 0 0 0-19M2.5 12h19" />
  </Base>
);
export const Quote = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M9.6 5C6.2 6.6 4 9.6 4 13.4c0 3.2 1.9 5.6 4.6 5.6 2.3 0 4-1.7 4-4 0-2.2-1.6-3.8-3.7-3.8-.4 0-.9.1-1 .1.3-2 1.8-3.9 3.7-4.9L9.6 5zm10 0c-3.4 1.6-5.6 4.6-5.6 8.4 0 3.2 1.9 5.6 4.6 5.6 2.3 0 4-1.7 4-4 0-2.2-1.6-3.8-3.7-3.8-.4 0-.9.1-1 .1.3-2 1.8-3.9 3.7-4.9L19.6 5z" />
  </svg>
);
export const Star = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45l-5.8 3.05 1.1-6.45-4.7-4.6 6.5-.95L12 2.6Z" />
  </svg>
);
export const GoogleG = (p: Props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="#4285F4" d="M21.6 12.23c0-.68-.06-1.33-.17-1.96H12v3.71h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.32 2.98-7.27Z" />
    <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.5c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.58A10 10 0 0 0 12 22Z" />
    <path fill="#FBBC05" d="M6.41 13.9a6 6 0 0 1 0-3.8V7.52H3.07a10 10 0 0 0 0 8.96l3.34-2.58Z" />
    <path fill="#EA4335" d="M12 5.98c1.47 0 2.79.5 3.83 1.5l2.87-2.87A10 10 0 0 0 3.07 7.52l3.34 2.58C7.2 7.74 9.4 5.98 12 5.98Z" />
  </svg>
);
export const WhatsApp = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.52 3.6 1.42 5.08L2 22l5.22-1.58a9.8 9.8 0 0 0 4.82 1.26h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.47 2 12.04 2Zm0 17.9h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.1.94.95-3.02-.2-.31a8.14 8.14 0 0 1-1.25-4.35c0-4.51 3.67-8.17 8.18-8.17 2.19 0 4.24.85 5.78 2.4a8.12 8.12 0 0 1 2.4 5.78c0 4.51-3.68 8.18-8.19 8.18Zm4.49-6.12c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.13-.17.24-.64.79-.78.95-.14.17-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.7-.15-.25-.02-.38.1-.5.12-.12.26-.29.38-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.75-1.81-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.17 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.46-.07 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);

export const Sparkle = (p: Props) => (
  <Base {...p}>
    <path d="M12 3c.6 4.7 2.3 6.4 7 7-4.7.6-6.4 2.3-7 7-.6-4.7-2.3-6.4-7-7 4.7-.6 6.4-2.3 7-7Z" />
    <path d="M19 17c.2 1.7.8 2.3 2.5 2.5-1.7.2-2.3.8-2.5 2.5-.2-1.7-.8-2.3-2.5-2.5 1.7-.2 2.3-.8 2.5-2.5Z" />
  </Base>
);
