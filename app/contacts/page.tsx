import { MapPin, Clock, ExternalLink, Send } from "lucide-react";

export default function ContactsPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-12 max-w-screen-xl mx-auto px-6">
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-3 font-medium">
          МАГАЗИН
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Контакты
        </h1>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Info */}
          <div className="space-y-10">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin size={16} className="shrink-0 mt-0.5 text-gray-400" />
              <div>
                <p className="text-[10px] tracking-[0.2em] font-semibold mb-2">АДРЕС</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Минск, ул. Комсомольская 18, пом. 205
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  (исторический центр города)
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock size={16} className="shrink-0 mt-0.5 text-gray-400" />
              <div>
                <p className="text-[10px] tracking-[0.2em] font-semibold mb-2">ЧАСЫ РАБОТЫ</p>
                <div className="space-y-1">
                  <div className="flex justify-between max-w-[200px]">
                    <span className="text-sm text-gray-600">Пн – Пт</span>
                    <span className="text-sm font-medium">13:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between max-w-[200px]">
                    <span className="text-sm text-gray-600">Сб – Вс</span>
                    <span className="text-sm font-medium">12:00 – 19:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[10px] tracking-[0.2em] font-semibold mb-4">
                СВЯЗАТЬСЯ С НАМИ
              </p>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/cinematic_brand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                    <ExternalLink size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.15em] font-medium">INSTAGRAM</p>
                    <p className="text-[11px] text-gray-400">@cinematic_brand</p>
                  </div>
                </a>

                <a
                  href="https://t.me/cinematic_brand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors">
                    <Send size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.15em] font-medium">TELEGRAM</p>
                    <p className="text-[11px] text-gray-400">@cinematic_brand</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Individual fitting */}
            <div className="bg-gray-50 p-6">
              <p className="text-[10px] tracking-[0.2em] font-semibold mb-2">
                ИНДИВИДУАЛЬНАЯ ПРИМЕРКА
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Запись на примерку — по предварительной записи в Telegram.
                Поможем подобрать размер и собрать образ.
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <div
              className="w-full aspect-square md:aspect-auto md:h-[480px] bg-gray-100 relative overflow-hidden flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%)",
              }}
            >
              <div className="text-center">
                <MapPin size={24} className="text-gray-400 mx-auto mb-3" />
                <p className="text-[11px] text-gray-400 tracking-[0.15em]">
                  КАРТА
                </p>
                <p className="text-[10px] text-gray-300 mt-1 tracking-wide">
                  Комсомольская 18, Минск
                </p>
              </div>
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-gray-500" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Delivery section */}
        <div id="delivery" className="mt-20 pt-12 border-t border-gray-100">
          <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-6 font-medium">
            ДОСТАВКА И ОПЛАТА
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Доставка по Минску",
                text: "Курьером в день заказа или на следующий день. Стоимость уточняется при оформлении.",
              },
              {
                title: "Доставка по Беларуси",
                text: "Белпочта или СДЭК. Сроки: 2–4 рабочих дня. Оплата при получении или онлайн.",
              },
              {
                title: "Самовывоз",
                text: "Бесплатно. Минск, Комсомольская 18, пом. 205. В часы работы магазина.",
              },
            ].map(({ title, text }) => (
              <div key={title} className="border border-gray-100 p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-sm font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
