"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import CartDrawer from "./CartDrawer";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { itemCount, dispatch } = useCart();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [logoVisible, setLogoVisible] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // На главной — белый фон только после выхода за герой (100vh)
      // На остальных страницах — после 40px
      if (!isHome) return;
      setScrolled(y > window.innerHeight * 0.95);

      if (!isHome) return;
      // Лого появляется когда HeroLogo заканчивает анимацию
      const logoThreshold = window.innerHeight * 0.55;
      const raw = Math.min(1, y / logoThreshold);
      setLogoVisible(raw > 0.82);
    };

    if (!isHome) {
      setLogoVisible(true);
      setScrolled(true);
    } else {
      setLogoVisible(false);
      setScrolled(window.scrollY > window.innerHeight * 0.95);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const leftLinks = [
    { href: "/catalog", label: "КОЛЛЕКЦИИ" },
    { href: "/capsules", label: "КАПСУЛЫ" },
  ];
  const rightLinks = [
    { href: "/about", label: "О НАС" },
    { href: "/contacts", label: "КОНТАКТЫ" },
  ];
  const allLinks = [...leftLinks, ...rightLinks];

  const linkCls = `nav-link text-[11px] tracking-[0.15em] font-medium transition-colors ${
    scrolled ? "text-black" : "text-white"
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-14 grid grid-cols-3 items-center">

          {/* LEFT: nav links (desktop) | hamburger (mobile) */}
          <div className="flex items-center gap-7">
            <nav className="hidden md:flex items-center gap-7">
              {leftLinks.map((l) => (
                <Link key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden transition-colors ${scrolled ? "text-black" : "text-white"}`}
              aria-label="Меню"
            >
              {mobileOpen
                ? <X size={20} strokeWidth={1.5} />
                : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>

          {/* CENTER: logo — только на не-главных страницах (на главной живёт HeroLogo) */}
          <div className="flex justify-center">
            {!isHome && (
              <Link href="/" className="no-underline" style={{ textDecoration: "none" }}>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/cinematic.svg`}
                  alt="CINEMATIC"
                  className="w-40 h-auto transition-all duration-300"
                  style={{ filter: "invert(1)" }}
                  draggable={false}
                />
              </Link>
            )}
          </div>

          {/* RIGHT: nav links + cart */}
          <div className="flex items-center justify-end gap-7">
            <nav className="hidden md:flex items-center gap-7">
              {rightLinks.map((l) => (
                <Link key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => dispatch({ type: "OPEN" })}
              className={`relative flex items-center transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
              aria-label="Корзина"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5"
            style={{ zIndex: 46 }}
          >
            {allLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-[12px] tracking-[0.2em] font-medium text-black"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
