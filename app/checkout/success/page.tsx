"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <CheckCircle size={40} strokeWidth={1} className="mx-auto mb-6 text-black" />
        <h1 className="text-xl font-semibold tracking-tight mb-3">Заказ принят</h1>
        <p className="text-sm text-gray-500 leading-relaxed mb-2">
          Спасибо! Мы свяжемся с вами в течение часа для подтверждения.
        </p>
        <p className="text-[11px] text-gray-400 mb-10">
          Вопросы: <a href="https://t.me/cinematic_brand" className="underline underline-offset-2">@cinematic_brand</a>
        </p>
        <Link
          href="/catalog"
          className="inline-block text-[11px] tracking-[0.2em] font-medium border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
        >
          ПРОДОЛЖИТЬ ПОКУПКИ
        </Link>
      </div>
    </div>
  );
}
