import { useEffect, useRef, useState } from "react";

/** Scroll-driven word-by-word reading animation. */
export function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.2;
      const p = (start - rect.top) / (start - end + rect.height * 0.6);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const threshold = i / words.length;
        const lit = progress > threshold;
        return (
          <span
            key={`${w}-${i}`}
            style={{
              opacity: lit ? 1 : 0.14,
              transition: "opacity .45s ease",
            }}
          >
            {w}{" "}
          </span>
        );
      })}
    </p>
  );
}