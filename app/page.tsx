import Link from "next/link";
import { products, capsules } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import HeroLogo from "@/components/HeroLogo";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/assets";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}

      {/* Animated logo: starts large + centered, scrolls to navbar */}
      <HeroLogo />

      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">

        {/* ── Split background: two photos side by side ── */}
        <div className="absolute inset-0 flex">
          {/* Left panel */}
          <div className="relative w-1/2 h-full overflow-hidden">
            <img
              src={asset("/hero-1.jpg")}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* Right panel */}
          <div className="relative w-1/2 h-full overflow-hidden">
            <img
              src={asset("/hero-2.jpg")}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />
          </div>
        </div>

        {/* Thin vertical divider line */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/15 z-10" />

        {/* Bottom gradient for text legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" />

        {/* Bottom-left: subtitle + CTA */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 pb-16 md:pb-20">
          <div className="max-w-xs">
<p className="text-white/65 text-sm italic mb-4 leading-relaxed">
              For Movie Stars Only
            </p>
            <p className="text-white/45 text-[12px] leading-relaxed mb-7 max-w-[260px]">
              Креативный бренд мужской одежды для тех, кто осознанно создаёт свой стиль и сценарий жизни
            </p>
            <Link
              href="/catalog"
              className="btn-glitch border border-white/60 text-white text-[11px] tracking-[0.22em] font-medium px-7 py-4 hover:border-white hover:bg-white/10 transition-colors"
            >
              СМОТРЕТЬ КОЛЛЕКЦИЮ
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Marquee — внутри героя, прилипает к низу */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-sm py-3.5 overflow-hidden">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="text-white/80 text-[10px] tracking-[0.3em] font-medium shrink-0 px-8">
                FOR MOVIE STARS ONLY &nbsp;·&nbsp; REPLAY &amp; WEAR IT &nbsp;·&nbsp; ТВОЁ КИНО &nbsp;·&nbsp; CINEMATIC
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-14 right-6 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-8 bg-white/25" />
          <span
            className="text-white/30 text-[9px] tracking-[0.2em]"
            style={{ writingMode: "vertical-rl" }}
          >
            SCROLL
          </span>
        </div>
      </section>


      {/* ─── NEW COLLECTION ─────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-2 font-medium">
              LETO 2025
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Новая коллекция
            </h2>
          </div>
          <Link
            href="/catalog"
            className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium nav-link"
          >
            ВСЕ ВЕЩИ <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium border border-black px-6 py-3"
          >
            ВСЕ ВЕЩИ <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ─── CAPSULES ────────────────────────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-2 font-medium">
              ГОТОВЫЕ ОБРАЗЫ
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Капсульные коллекции
            </h2>
          </div>
          <Link
            href="/capsules"
            className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium nav-link"
          >
            ВСЕ КАПСУЛЫ <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {capsules.map((cap, i) => {
            const bgs = [
              "linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)",
              "linear-gradient(160deg, #2d1a00 0%, #1a0d00 100%)",
              "linear-gradient(160deg, #0d1a0a 0%, #162b12 100%)",
            ];
            const photos: Record<number, string> = {
              0: "/capsule-wedding.jpg",
            };
            return (
              <Link
                key={cap.id}
                href={`/capsules#${cap.slug}`}
                className="group relative aspect-[4/5] overflow-hidden flex items-end"
              >
                {photos[i] ? (
                  <img
                    src={asset(photos[i])}
                    alt={cap.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ background: bgs[i] }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                <div className="relative z-10 p-6 text-white">
                  <p className="text-[10px] tracking-[0.2em] text-white/50 mb-1">
                    {cap.occasion}
                  </p>
                  <p className="text-xl font-semibold tracking-wide">{cap.title}</p>
                  <p className="text-sm text-white/60 mt-1">{cap.subtitle}</p>
                  <div className="flex items-center gap-2 mt-4 text-[11px] tracking-[0.15em] font-medium text-white/60 group-hover:text-white transition-colors">
                    СМОТРЕТЬ ОБРАЗ <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── BRAND STORY ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-5 font-medium">
                О БРЕНДЕ
              </p>
              <h2
                className="font-semibold leading-tight mb-6 tracking-tight"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
              >
                Твоё кино.<br />Твой сценарий.<br />Твой стиль.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                CINEMATIC — это не просто одежда. Это разрешение быть главным
                героем своей жизни. Мы создаём вещи для людей, которые не ждут
                особого повода.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Каждая вещь — результат долгой работы над формой, пропорциями
                и сочетаемостью. Производство в Беларуси, осознанный выбор
                материалов.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-medium nav-link"
              >
                УЗНАТЬ БОЛЬШЕ <ArrowRight size={13} />
              </Link>
            </div>

            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{ height: "400px", background: "linear-gradient(135deg, #111 0%, #2a2a2a 50%, #111 100%)" }}
            >
              <span
                className="text-white/8 font-bold select-none"
                style={{ fontSize: "clamp(3rem, 10vw, 7rem)", letterSpacing: "-0.03em" }}
              >
                CINEMATIC
              </span>
              <p className="absolute bottom-5 left-5 text-white/30 text-[10px] tracking-[0.2em]">
                ФОТО СКОРО
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─────────────────────────────────────────────────────── */}
      <section className="border-y border-gray-100 py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { symbol: "○", text: "Производство\nв Беларуси" },
              { symbol: "◇", text: "Осознанный\nвыбор материалов" },
              { symbol: "△", text: "Индивидуальная\nпримерка" },
              { symbol: "□", text: "Доставка\nпо Беларуси" },
            ].map(({ symbol, text }) => (
              <div key={text} className="flex flex-col items-center text-center gap-3">
                <span className="text-2xl text-gray-200">{symbol}</span>
                <p className="text-[11px] text-gray-500 tracking-wide leading-relaxed whitespace-pre-line">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─────────────────────────────────────────────────── */}
      <section className="bg-black text-white py-20 md:py-28 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <p className="text-white/35 text-[10px] tracking-[0.35em] mb-6">
            СВАДЬБА · МЕРОПРИЯТИЕ · КАЖДЫЙ ДЕНЬ
          </p>
          <h2
            className="font-semibold leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Не жди особого момента.
          </h2>
          <p className="text-white/50 text-sm leading-relaxed mb-10">
            4–5 образов из 5–6 вещей. Капсула — это про свободу,
            а не про ограничения.
          </p>
          <Link
            href="/catalog"
            className="btn-glitch border border-white/50 text-white text-[11px] tracking-[0.2em] font-medium px-8 py-4 hover:border-white hover:bg-white hover:text-black transition-all"
          >
            НАЧАТЬ СБОРКУ ОБРАЗА <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </>
  );
}
