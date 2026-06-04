import { PatternBg } from "@/components/wedding/Particles";

export function ArchOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      aria-hidden
      className={`w-full max-w-md text-[#D4AF37] opacity-70 ${className}`}
    >
      <path
        d="M10 78 Q100 -8 190 78"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M30 76 Q100 12 170 76"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.5"
        strokeLinecap="round"
      />
      <circle cx="100" cy="8" r="3" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function CornerArabesque({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={`text-[#D4AF37] ${className}`}
    >
      <path
        d="M4 36 V14 a10 10 0 0 1 10 -10 H36"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M10 30 V16 a6 6 0 0 1 6 -6 H30"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M4 4 L12 12 M4 4 L12 4 M4 4 L4 12"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.7"
      />
    </svg>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`divider-ornament my-8 ${className}`} aria-hidden>
      <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D4AF37]">
        <path
          d="M12 2l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 7.2l5-.7L12 2z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
    </div>
  );
}

export function IslamicPatternOverlay({ opacity = 0.05 }: { opacity?: number }) {
  return <PatternBg opacity={opacity} size={260} />;
}
