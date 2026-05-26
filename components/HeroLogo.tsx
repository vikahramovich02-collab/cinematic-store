"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { asset } from "@/lib/assets";

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function HeroLogo() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const NAVBAR_H = 56;
    const NAVBAR_LOGO_W = 80; // px — размер в навбаре

    const update = () => {
      if (!ref.current) return;

      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.55;
      const raw = Math.min(1, Math.max(0, scrollY / threshold));
      const p = easeInOut(raw);

      // Width: большой на герое → размер навбара
      const startW = Math.min(window.innerWidth * 0.68, 560);
      const width = lerp(startW, NAVBAR_LOGO_W, p);

      // Вертикальная позиция: центр экрана → центр навбара
      const startTop = window.innerHeight * 0.5;
      const endTop = NAVBAR_H / 2;
      const top = lerp(startTop, endTop, p);

      const el = ref.current;
      el.style.width = `${width}px`;
      el.style.top = `${top}px`;
      el.style.opacity = "1";

      // Белый фон навбара — инвертируем лого в чёрный
      const onWhiteBg = scrollY > window.innerHeight * 0.95;
      if (onWhiteBg) {
        el.style.filter = "invert(1)";
      } else {
        const blur = lerp(4, 0.5, p);
        el.style.filter = `blur(${blur}px) brightness(${lerp(1.2, 1, p)})`;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <Link
      ref={ref}
      href="/"
      className="fixed left-1/2 select-none"
      style={{
        zIndex: 45,
        transform: "translate(-50%, -50%)",
        top: "50vh",
        width: "520px",
        willChange: "top, width, opacity",
        transition: "none",
      }}
    >
      <img
        src={asset("/cinematic.svg")}
        alt="CINEMATIC"
        className="w-full h-auto"
        draggable={false}
      />
    </Link>
  );
}
