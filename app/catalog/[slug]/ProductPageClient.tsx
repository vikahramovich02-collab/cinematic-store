"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, categoryLabels } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/lib/cart-context";
import { ChevronLeft, Plus, Minus } from "lucide-react";

const categoryColors: Record<string, string> = {
  jacket: "#c8b89a",
  trousers: "#b0bec5",
  shirt: "#d7ccc8",
  outerwear: "#9e9e9e",
  hoodie: "#bcaaa4",
};

export default function ProductPageClient({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [sizeError, setSizeError] = useState(false);

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const bg = categoryColors[product.category] ?? "#e0e0e0";

  const handleAdd = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    dispatch({ type: "ADD", product, size: selectedSize });
  };

  return (
    <>
      <div className="pt-20 max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 tracking-wide">
          <Link href="/catalog" className="hover:text-black transition-colors flex items-center gap-1">
            <ChevronLeft size={13} /> Коллекции
          </Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-2">
            <div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ background: `linear-gradient(160deg, ${bg} 0%, #f0ede8 100%)` }}
            >
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-black text-white text-[9px] tracking-[0.15em] px-2 py-1 font-medium">
                  {product.badge}
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-xs tracking-[0.3em] font-medium">ФОТО СКОРО</span>
              </div>
              <div className="absolute bottom-4 left-4 text-white/30 text-[10px] tracking-[0.2em]">
                {product.name.toUpperCase()}
              </div>
            </div>
            <div className="flex gap-2">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-[3/4] w-16 overflow-hidden border transition-colors ${
                    activeImg === i ? "border-black" : "border-transparent"
                  }`}
                  style={{ background: `linear-gradient(${i === 0 ? "160deg" : "340deg"}, ${bg} 0%, #f0ede8 100%)` }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col md:pt-4">
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-1 font-medium">{product.collection}</p>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">{product.name}</h1>
            <p className="text-xl font-medium mb-8">{product.price} BYN</p>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <p className="text-[11px] tracking-[0.15em] font-semibold">РАЗМЕР</p>
                <button className="text-[11px] text-gray-400 underline underline-offset-2 hover:text-black transition-colors">
                  Таблица размеров
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSize(s); setSizeError(false); }}
                    className={`w-12 h-12 border text-[12px] font-medium transition-colors ${
                      selectedSize === s
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-200 hover:border-black"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {sizeError && <p className="text-[11px] text-red-500 mt-2">Выберите размер</p>}
            </div>

            <button
              onClick={handleAdd}
              className="btn-glitch w-full justify-center bg-black text-white text-[11px] tracking-[0.25em] font-medium py-4 hover:bg-gray-900 transition-colors mb-4"
            >
              ДОБАВИТЬ В КОРЗИНУ
            </button>

            <a
              href="https://t.me/cinematic_brand"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glitch w-full justify-center border border-gray-200 text-black text-[11px] tracking-[0.2em] font-medium py-4 text-center hover:border-black transition-colors mb-8 block"
            >
              НАПИСАТЬ В TELEGRAM
            </a>

            <div className="space-y-5 border-t border-gray-100 pt-6">
              <div>
                <p className="text-[11px] tracking-[0.15em] font-semibold mb-2">ОПИСАНИЕ</p>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.15em] font-semibold mb-2">СОСТАВ</p>
                <p className="text-sm text-gray-600 leading-relaxed">{product.composition}</p>
              </div>
              <div className="border-t border-gray-100 pt-5">
                <p className="text-[11px] tracking-[0.15em] font-semibold mb-2">ДОСТАВКА</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Доставка по всей Беларуси. Самовывоз: Минск, Комсомольская 18, пом.&nbsp;205.
                </p>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-2 font-medium">ПОХОЖИЕ ВЕЩИ</p>
            <h2 className="text-xl font-semibold tracking-tight mb-8">С этим носят</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
