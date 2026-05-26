"use client";

import { useState } from "react";
import { products, categoryLabels, collections } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/data";

export default function CatalogPage() {
  const [activeCollection, setActiveCollection] = useState("Все");
  const [activeCategory, setActiveCategory] = useState("Все");

  const categories = ["Все", ...Object.values(categoryLabels)];

  const filtered = products.filter((p) => {
    const matchCol =
      activeCollection === "Все" || p.collection === activeCollection;
    const matchCat =
      activeCategory === "Все" ||
      categoryLabels[p.category] === activeCategory;
    return matchCol && matchCat;
  });

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-10 max-w-screen-xl mx-auto px-6">
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-3 font-medium">
          ВЕСЬ АССОРТИМЕНТ
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Коллекции
        </h1>
      </div>

      {/* Filters */}
      <div className="max-w-screen-xl mx-auto px-6 pb-8 space-y-4">
        {/* Collections */}
        <div className="flex gap-2 flex-wrap">
          {collections.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCollection(c)}
              className={`text-[10px] tracking-[0.2em] font-medium px-4 py-2 border transition-colors ${
                activeCollection === c
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:border-black"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`text-[10px] tracking-[0.15em] font-medium px-4 py-2 transition-colors ${
                activeCategory === c
                  ? "text-black underline underline-offset-4"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div className="max-w-screen-xl mx-auto px-6 pb-6">
        <p className="text-[11px] text-gray-400">
          {filtered.length}{" "}
          {filtered.length === 1
            ? "вещь"
            : filtered.length < 5
            ? "вещи"
            : "вещей"}
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-screen-xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-sm tracking-wide">
              Ничего не найдено
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
