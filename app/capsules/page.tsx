import { capsules, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CapsulesPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-12 max-w-screen-xl mx-auto px-6">
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-3 font-medium">
          ГОТОВЫЕ ОБРАЗЫ
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Капсульные коллекции
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
          4–5 образов из 5–6 вещей. Каждая вещь сочетается с остальными —
          это про разумное потребление и бесконечные сочетания.
        </p>
      </div>

      {/* Capsules */}
      <div className="max-w-screen-xl mx-auto px-6 pb-20 space-y-24">
        {capsules.map((cap, idx) => {
          const capProducts = cap.productIds
            .map((id) => products.find((p) => p.id === id))
            .filter(Boolean) as typeof products;

          const bgs = [
            "linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)",
            "linear-gradient(160deg, #2d1a00 0%, #1a0d00 100%)",
            "linear-gradient(160deg, #0d1a0a 0%, #162b12 100%)",
          ];

          return (
            <div key={cap.id} id={cap.slug}>
              {/* Capsule hero */}
              <div
                className="relative aspect-[21/9] min-h-[280px] flex items-end overflow-hidden mb-10"
              >
                <div
                  className="absolute inset-0"
                  style={{ background: bgs[idx % 3] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="relative z-10 p-8 md:p-12 text-white">
                  <p className="text-white/40 text-[10px] tracking-[0.3em] mb-2 font-medium">
                    {cap.occasion}
                  </p>
                  <h2
                    className="font-semibold leading-none mb-2"
                    style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
                  >
                    {cap.title}
                  </h2>
                  <p className="text-white/60 text-sm mt-2">{cap.subtitle}</p>
                </div>

                {/* Item count */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] px-3 py-1.5 border border-white/20">
                  {capProducts.length} ВЕЩИ
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                {capProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              {/* Tip */}
              <div className="mt-8 p-6 bg-gray-50 border-l-2 border-black">
                <p className="text-[10px] tracking-[0.2em] font-semibold mb-2">
                  КАК НОСИТЬ
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {idx === 0 &&
                    "Костюм двойка — основа образа. Жилет добавляет многослойность. Рубашка может носиться навыпуск или заправленной. Все вещи легко менять местами."}
                  {idx === 1 &&
                    "Пиджак оверсайз — ключевая вещь. Носится с широкими брюками и рубашкой навыпуск. Можно убрать пиджак — образ останется цельным."}
                  {idx === 2 &&
                    "Худи + широкие брюки — базовый образ на каждый день. Добавь рубашку как верхний слой. Пиджак трансформирует образ в более формальный."}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="border-t border-gray-100 py-16 text-center">
        <div className="max-w-md mx-auto px-6">
          <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-4">
            НУЖНА ПОМОЩЬ С ОБРАЗОМ?
          </p>
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            Подберём для вас
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Напишите нам в Telegram — стилист поможет собрать образ под
            ваше мероприятие или задачу.
          </p>
          <a
            href="https://t.me/cinematic_brand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white text-[11px] tracking-[0.2em] font-medium px-7 py-4 hover:bg-gray-900 transition-colors"
          >
            НАПИСАТЬ В TELEGRAM <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
