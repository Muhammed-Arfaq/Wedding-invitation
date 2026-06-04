import { Particles } from "@/components/wedding/Particles";

export function AmbientLayer({ dense = false }: { dense?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="animated-gradient-bg pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #0F5132 0%, transparent 70%)",
        }}
      />
      <Particles count={dense ? 28 : 18} />
    </>
  );
}
