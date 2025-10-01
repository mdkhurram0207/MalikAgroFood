import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delayMs = 0, yOffset = 16, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in the viewport on mount, reveal immediately.
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      setVisible(true);
      return () => setVisible(false);
    }

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.01 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      setVisible(false); // Reset visible state on unmount
    };
  }, []);

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${yOffset}px)`,
    transition: "opacity 700ms ease-out, transform 700ms ease-out",
    transitionDelay: `${delayMs}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}


