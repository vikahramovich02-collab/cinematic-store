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
    <div className="fixed bottom-16 left-0 right-0 z-50 bg-white border-t border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-6">
      <p className="text-[11px] text-gray-500 leading-relaxed">
        Мы используем cookie для корректной работы сайта. Подробнее в{" "}
        <Link href="/cookies" className="underline underline-offset-2 hover:text-black transition-colors">
          политике cookie
        </Link>.
      </p>
      <div className="flex items-center gap-4 shrink-0">
        <button
          onClick={accept}
          className="bg-black text-white text-[10px] tracking-[0.2em] font-medium px-5 py-2 hover:bg-gray-900 transition-colors"
        >
          ПРИНЯТЬ
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-[10px] text-gray-400 hover:text-black transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
