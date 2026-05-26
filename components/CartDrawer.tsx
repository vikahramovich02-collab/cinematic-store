"use client";

import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { state, dispatch, total, itemCount } = useCart();
  const isOpen = state.open;
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={() => dispatch({ type: "CLOSE" })}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? "open" : ""} flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="text-xs tracking-[0.2em] font-semibold">
            КОРЗИНА {itemCount > 0 && `(${itemCount})`}
          </span>
          <button onClick={() => dispatch({ type: "CLOSE" })}>
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400">
              <span className="text-5xl">○</span>
              <p className="text-xs tracking-[0.15em]">КОРЗИНА ПУСТА</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {state.items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-4 p-6">
                  {/* Image placeholder */}
                  <div className="w-20 h-28 bg-gray-100 shrink-0 shimmer" />

                  {/* Info */}
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <p className="text-xs font-medium tracking-wide leading-snug">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Размер: {item.size}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Qty */}
                      <div className="flex items-center gap-3 border border-gray-200 px-2 py-1">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QTY",
                              productId: item.product.id,
                              size: item.size,
                              qty: item.qty - 1,
                            })
                          }
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs w-4 text-center">{item.qty}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_QTY",
                              productId: item.product.id,
                              size: item.size,
                              qty: item.qty + 1,
                            })
                          }
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium">
                          {(item.product.price * item.qty).toLocaleString("ru-BY")} BYN
                        </span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE",
                              productId: item.product.id,
                              size: item.size,
                            })
                          }
                          className="text-gray-400 hover:text-black transition-colors"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-100 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs tracking-wide text-gray-500">Итого</span>
              <span className="text-sm font-semibold">
                {total.toLocaleString("ru-BY")} BYN
              </span>
            </div>
            <button
              onClick={() => { dispatch({ type: "CLOSE" }); router.push("/checkout"); }}
              className="block w-full bg-black text-white text-center text-xs tracking-[0.2em] py-4 hover:bg-gray-900 transition-colors"
            >
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
