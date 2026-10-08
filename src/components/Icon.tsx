import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "fill"> & {
  size?: number;
};

/** Shared wrapper so every line icon keeps the same stroke treatment. */
function LineIcon({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </LineIcon>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4 20l1.4-4.2A8 8 0 1 1 8.4 18.8z" />
    </LineIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </LineIcon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </LineIcon>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l3 3 5-6" />
    </LineIcon>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4 20l4-1 11-11-3-3L5 16z" />
      <path d="M14 6l3 3" />
    </LineIcon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9l5 3" />
    </LineIcon>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </LineIcon>
  );
}

export function PaperPlaneIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3 12l18-8-6 17-3-7z" />
    </LineIcon>
  );
}

export function TransferIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3 16l18-6-2-3-6 2-5-4-2 1 3 5-5 2z" />
      <path d="M4 21h16" />
    </LineIcon>
  );
}

export function HotelIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3 20V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13" />
      <path d="M3 20h18M8 20v-5h8v5M8 9h2M14 9h2" />
    </LineIcon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </LineIcon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </LineIcon>
  );
}

export function BoxIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M21 8l-9-5-9 5 9 5z" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" />
    </LineIcon>
  );
}

export function DateRangeIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </LineIcon>
  );
}

export function GroupIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5M17 7h5M17 11h5" />
    </LineIcon>
  );
}

/** The tick used in every feature list. Heavier stroke, no circle. */
export function ArrowUpIcon(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </LineIcon>
  );
}

export function TickIcon({ size = 22, ...rest }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}
