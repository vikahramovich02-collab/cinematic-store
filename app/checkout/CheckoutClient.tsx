"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { ArrowRight, ChevronLeft } from "lucide-react";

type DeliveryMethod = "pickup" | "delivery";
type PaymentMethod = "cash" | "card" | "erip";

type FormData = {
  name: string;
  phone: string;
  email: string;
  delivery: DeliveryMethod;
  address: string;
  comment: string;
  payment: PaymentMethod;
};

const CARD_NUMBER = "1234 5678 9012 3456"; // замените на реальный номер
const ERIP_CODE = "123456789"; // замените на реальный код

export default function CheckoutClient() {
  const { state, total, dispatch } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    delivery: "pickup",
    address: "",
    comment: "",
    payment: "cash",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const set = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validateStep1 = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Укажите имя";
    if (!form.phone.trim()) e.phone = "Укажите телефон";
    if (form.delivery === "delivery" && !form.address.trim()) e.address = "Укажите адрес доставки";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleStep1 = () => {
    if (validateStep1()) setStep(2);
  };

  const handleConfirm = async () => {
    const lines = [
      `🎬 *Новый заказ CINEMATIC*`,
      ``,
      `👤 ${form.name}`,
      `📞 ${form.phone}`,
      form.email ? `✉️ ${form.email}` : null,
      ``,
      `📦 Доставка: ${form.delivery === "pickup" ? "Самовывоз" : `Доставка — ${form.address}`}`,
      `💳 Оплата: ${{ cash: "Наличные", card: "Карта", erip: "ЕРИП" }[form.payment]}`,
      form.comment ? `💬 ${form.comment}` : null,
      ``,
      `🛍 Состав заказа:`,
      ...state.items.map((i) => `• ${i.product.name} (${i.size}) × ${i.qty} — ${(i.product.price * i.qty).toLocaleString("ru-BY")} BYN`),
      ``,
      `💰 Итого: ${total.toLocaleString("ru-BY")} BYN`,
    ].filter(Boolean).join("\n");

    const token = process.env.NEXT_PUBLIC_TG_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TG_CHAT_ID;

    if (token && chatId) {
      try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: lines, parse_mode: "Markdown" }),
        });
      } catch {}
    }

    dispatch({ type: "CLEAR" });
    router.push("/checkout/success");
  };

  if (state.items.length === 0 && step === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-6">Корзина пуста</p>
          <button onClick={() => router.push("/catalog")} className="text-[11px] tracking-[0.2em] font-medium underline underline-offset-2">
            В КАТАЛОГ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-screen-lg mx-auto px-6">

        {/* Stepper */}
        <div className="flex items-center gap-3 mb-12">
          <div className={`flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium ${step === 1 ? "text-black" : "text-gray-400"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${step === 1 ? "border-black bg-black text-white" : "border-gray-300 text-gray-400"}`}>1</span>
            КОНТАКТЫ
          </div>
          <div className="flex-1 h-px bg-gray-200 max-w-[40px]" />
          <div className={`flex items-center gap-2 text-[11px] tracking-[0.15em] font-medium ${step === 2 ? "text-black" : "text-gray-400"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${step === 2 ? "border-black bg-black text-white" : "border-gray-300 text-gray-400"}`}>2</span>
            ОПЛАТА
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12">

          {/* Left: form */}
          <div>
            {step === 1 && (
              <div className="space-y-6">
                <h1 className="text-lg font-semibold tracking-tight mb-8">Контакты и доставка</h1>

                <Field label="Имя *" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Как к вам обращаться"
                    className={inputCls(!!errors.name)}
                  />
                </Field>

                <Field label="Телефон *" error={errors.phone}>
                  <input
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+375 XX XXX-XX-XX"
                    type="tel"
                    className={inputCls(!!errors.phone)}
                  />
                </Field>

                <Field label="Email">
                  <input
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="your@email.com"
                    type="email"
                    className={inputCls(false)}
                  />
                </Field>

                {/* Delivery */}
                <div>
                  <p className="text-[10px] tracking-[0.15em] font-semibold mb-3">СПОСОБ ПОЛУЧЕНИЯ</p>
                  <div className="grid grid-cols-2 gap-3">
                    {([
                      { value: "pickup", label: "Самовывоз", sub: "Минск, Комсомольская 18" },
                      { value: "delivery", label: "Доставка", sub: "Европочта / БелПочта" },
                    ] as const).map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => set("delivery", opt.value)}
                        className={`text-left p-4 border transition-colors ${form.delivery === opt.value ? "border-black bg-black text-white" : "border-gray-200 hover:border-gray-400"}`}
                      >
                        <p className="text-[11px] tracking-[0.1em] font-semibold">{opt.label}</p>
                        <p className={`text-[10px] mt-1 ${form.delivery === opt.value ? "text-white/60" : "text-gray-400"}`}>{opt.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {form.delivery === "delivery" && (
                  <Field label="Адрес доставки *" error={errors.address}>
                    <input
                      value={form.address}
                      onChange={(e) => set("address", e.target.value)}
                      placeholder="Город, улица, дом, квартира"
                      className={inputCls(!!errors.address)}
                    />
                  </Field>
                )}

                <Field label="Комментарий к заказу">
                  <textarea
                    value={form.comment}
                    onChange={(e) => set("comment", e.target.value)}
                    placeholder="Пожелания, вопросы по размеру..."
                    rows={3}
                    className={inputCls(false) + " resize-none"}
                  />
                </Field>

                <button
                  onClick={handleStep1}
                  className="btn-glitch w-full justify-center bg-black text-white text-[11px] tracking-[0.25em] font-medium py-4 hover:bg-gray-900 transition-colors mt-4"
                >
                  ДАЛЕЕ — ОПЛАТА <ArrowRight size={14} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <button onClick={() => setStep(1)} className="text-gray-400 hover:text-black transition-colors">
                    <ChevronLeft size={20} strokeWidth={1.5} />
                  </button>
                  <h1 className="text-lg font-semibold tracking-tight">Способ оплаты</h1>
                </div>

                <div className="space-y-3">
                  {([
                    form.delivery === "pickup"
                      ? { value: "cash", label: "Наличными при самовывозе", sub: "Оплата в магазине" }
                      : null,
                    { value: "card", label: "Перевод на карту", sub: "Беларусбанк / Альфа-Банк" },
                    { value: "erip", label: "ЕРИП", sub: "Через интернет-банкинг" },
                  ] as const).filter(Boolean).map((opt) => opt && (
                    <button
                      key={opt.value}
                      onClick={() => set("payment", opt.value)}
                      className={`w-full text-left p-4 border transition-colors ${form.payment === opt.value ? "border-black" : "border-gray-200 hover:border-gray-400"}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${form.payment === opt.value ? "border-black" : "border-gray-300"}`}>
                          {form.payment === opt.value && <span className="w-2 h-2 rounded-full bg-black" />}
                        </span>
                        <div>
                          <p className="text-[12px] font-medium">{opt.label}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{opt.sub}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Payment details */}
                {form.payment === "card" && (
                  <div className="bg-gray-50 p-5 space-y-2">
                    <p className="text-[10px] tracking-[0.15em] text-gray-500 font-semibold">РЕКВИЗИТЫ</p>
                    <p className="text-sm font-mono tracking-wider">{CARD_NUMBER}</p>
                    <p className="text-[11px] text-gray-500">После перевода пришлите скриншот в Telegram: <span className="font-medium">@cinematic_brand</span></p>
                  </div>
                )}

                {form.payment === "erip" && (
                  <div className="bg-gray-50 p-5 space-y-2">
                    <p className="text-[10px] tracking-[0.15em] text-gray-500 font-semibold">КОД ЕРИП</p>
                    <p className="text-2xl font-mono tracking-[0.2em]">{ERIP_CODE}</p>
                    <p className="text-[11px] text-gray-500">Интернет-банкинг → ЕРИП → Поиск → Введите код</p>
                  </div>
                )}

                <button
                  onClick={handleConfirm}
                  className="btn-glitch w-full justify-center bg-black text-white text-[11px] tracking-[0.25em] font-medium py-4 hover:bg-gray-900 transition-colors mt-4"
                >
                  ПОДТВЕРДИТЬ ЗАКАЗ <ArrowRight size={14} />
                </button>

                <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                  После подтверждения мы свяжемся с вами в течение часа
                </p>
              </div>
            )}
          </div>

          {/* Right: order summary */}
          <div className="md:sticky md:top-24 h-fit">
            <div className="border border-gray-100 p-6">
              <p className="text-[10px] tracking-[0.2em] font-semibold mb-5">ВАШ ЗАКАЗ</p>
              <div className="space-y-4 mb-5">
                {state.items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium leading-snug">{item.product.name}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">Размер {item.size} · {item.qty} шт.</p>
                    </div>
                    <p className="text-xs font-medium shrink-0">{(item.product.price * item.qty).toLocaleString("ru-BY")} BYN</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                {form.delivery === "delivery" && (
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Доставка</span>
                    <span>по тарифу перевозчика</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Итого</span>
                  <span className="text-sm font-semibold">{total.toLocaleString("ru-BY")} BYN</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full border ${hasError ? "border-red-400" : "border-gray-200"} px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white`;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.15em] font-semibold mb-2">{label}</label>
      {children}
      {error && <p className="text-[11px] text-red-500 mt-1">{error}</p>}
    </div>
  );
}
