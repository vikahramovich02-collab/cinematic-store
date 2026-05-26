import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-3 font-medium">ЮРИДИЧЕСКОЕ</p>
        <h1 className="text-2xl font-semibold tracking-tight mb-10">Пользовательское соглашение</h1>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">1. ПРЕДМЕТ СОГЛАШЕНИЯ</p>
            <p>Настоящее Пользовательское соглашение регулирует отношения между брендом <strong>CINEMATIC</strong> (далее — «Продавец») и любым лицом (далее — «Покупатель»), совершающим заказ на сайте.</p>
            <p className="mt-3">Оформление заказа означает полное и безоговорочное принятие условий настоящего соглашения.</p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">2. ЗАКАЗ И ОПЛАТА</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Заказ считается принятым после подтверждения со стороны Продавца (сообщение в Telegram или по телефону).</li>
              <li>Цены указаны в белорусских рублях (BYN) и включают НДС (если применимо).</li>
              <li>Оплата производится одним из способов: наличными при самовывозе, переводом на карту или через ЕРИП.</li>
              <li>Продавец вправе отменить заказ, если оплата не поступила в течение 24 часов после подтверждения.</li>
            </ul>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">3. ДОСТАВКА</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Самовывоз: г. Минск, ул. Комсомольская 18, пом. 205, в часы работы магазина.</li>
              <li>Доставка по Беларуси: Европочта, БелПочта. Стоимость доставки — по тарифам перевозчика.</li>
              <li>Сроки доставки: 1–5 рабочих дней в зависимости от региона.</li>
            </ul>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">4. ВОЗВРАТ И ОБМЕН</p>
            <p>Возврат и обмен товара осуществляются в соответствии с Законом Республики Беларусь «О защите прав потребителей»:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Обмен / возврат качественного товара — в течение 14 дней с момента покупки при сохранении товарного вида, бирок и чека.</li>
              <li>Возврат товара ненадлежащего качества — в любой срок гарантийного периода.</li>
              <li>Для оформления возврата свяжитесь с нами: <a href="https://t.me/cinematic_brand" className="underline underline-offset-2">@cinematic_brand</a></li>
            </ul>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">5. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ</p>
            <p>Все материалы сайта (тексты, фотографии, логотипы, дизайн) являются собственностью бренда CINEMATIC. Копирование без письменного разрешения запрещено.</p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">6. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ</p>
            <p>Продавец не несёт ответственности за задержки доставки, вызванные третьими лицами (службы доставки, форс-мажор). Продавец прилагает все усилия для своевременного исполнения заказов.</p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">7. ПРИМЕНИМОЕ ПРАВО</p>
            <p>Настоящее соглашение регулируется законодательством Республики Беларусь. Все споры разрешаются в досудебном порядке путём переговоров, а при недостижении согласия — в судах Республики Беларусь.</p>
          </section>

          <p className="text-[11px] text-gray-400 pt-4 border-t border-gray-100">
            Связь: <a href="https://t.me/cinematic_brand" className="underline underline-offset-2">@cinematic_brand</a> · Последнее обновление: май 2025
          </p>
        </div>
      </div>
    </div>
  );
}
