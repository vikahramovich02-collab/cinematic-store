"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-[320px] bg-white border border-gray-200 shadow-lg p-5">
      <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
        Мы используем cookie для корректной работы корзины и улучшения сервиса. Подробнее в{" "}
        <Link href="/cookies" className="underline underline-offset-2 hover:text-black transition-colors">
          политике cookie
        </Link>.
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="flex-1 bg-black text-white text-[10px] tracking-[0.2em] font-medium py-2.5 hover:bg-gray-900 transition-colors"
        >
          ПРИНЯТЬ
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-[10px] tracking-wide text-gray-400 hover:text-black transition-colors px-2"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
