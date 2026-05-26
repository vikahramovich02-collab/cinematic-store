import Link from "next/link";
import type { Product } from "@/lib/data";

type Props = {
  product: Product;
};

const categoryColors: Record<string, string> = {
  jacket: "#c8b89a",
  trousers: "#b0bec5",
  shirt: "#d7ccc8",
  outerwear: "#9e9e9e",
  hoodie: "#bcaaa4",
};

export default function ProductCard({ product }: Props) {
  const bg = categoryColors[product.category] ?? "#e0e0e0";

  return (
    <Link href={`/catalog/${product.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 product-hover-wrap">
        {/* Primary image placeholder */}
        <div
          className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0"
          style={{ background: `linear-gradient(160deg, ${bg} 0%, #f0ede8 100%)` }}
        >
          <div className="absolute inset-0 flex items-end p-4">
            <span className="text-white/30 text-[10px] tracking-[0.2em] font-medium">
              {product.name.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Secondary image placeholder (hover) */}
        <div
          className="img-secondary absolute inset-0"
          style={{ background: `linear-gradient(160deg, #e0e0e0 0%, ${bg} 100%)` }}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-black text-white text-[9px] tracking-[0.15em] px-2 py-1 font-medium">
            {product.badge}
          </div>
        )}

        {/* Quick add on hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-3 text-center text-[10px] tracking-[0.2em] font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          ДОБАВИТЬ В КОРЗИНУ
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <p className="text-[11px] text-gray-400 tracking-[0.12em] font-medium">
          {product.collection}
        </p>
        <p className="text-[13px] font-medium leading-snug">{product.name}</p>
        <p className="text-[13px] text-gray-700">{product.price} BYN</p>
      </div>
    </Link>
  );
}
