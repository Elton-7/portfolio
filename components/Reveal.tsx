"use client";

import { useEffect, useRef, useState } from "react";

// Fades its children in when they scroll into view.
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScreen = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };
    // Already on screen (e.g. page opened at #projects): show right away.
    if (onScreen() || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    // The browser may jump to a #hash after this runs, so check again.
    const recheck = () => onScreen() && setVisible(true);
    const t = setTimeout(recheck, 400);
    window.addEventListener("load", recheck);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(t);
      window.removeEventListener("load", recheck);
    };
  }, []);

  return (
    <div ref={ref} className={visible ? "reveal visible" : "reveal"}>
      {children}
    </div>
  );
}
