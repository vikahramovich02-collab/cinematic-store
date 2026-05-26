import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-3 font-medium">ЮРИДИЧЕСКОЕ</p>
        <h1 className="text-2xl font-semibold tracking-tight mb-10">Политика конфиденциальности</h1>

        <div className="prose-custom space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">1. ОБЩИЕ ПОЛОЖЕНИЯ</p>
            <p>Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта CINEMATIC (cinematic-store), расположенного по адресу: <strong>vikahramovich02-collab.github.io/cinematic-store</strong>.</p>
            <p className="mt-3">Оператором персональных данных является ИП / физическое лицо, осуществляющее деятельность под брендом <strong>CINEMATIC</strong>, г. Минск, ул. Комсомольская 18, пом. 205.</p>
            <p className="mt-3">Используя сайт и оформляя заказы, вы соглашаетесь с условиями настоящей Политики.</p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">2. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты (по желанию)</li>
              <li>Адрес доставки (при выборе доставки)</li>
              <li>Содержание заказа (наименования товаров, размеры, количество)</li>
              <li>Технические данные: IP-адрес, тип браузера, файлы cookie (в обезличенном виде)</li>
            </ul>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">3. ЦЕЛИ ОБРАБОТКИ</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Оформление и исполнение заказов</li>
              <li>Связь с покупателем по вопросам заказа</li>
              <li>Информирование об акциях (только при согласии)</li>
              <li>Улучшение качества сервиса</li>
              <li>Соблюдение требований законодательства Республики Беларусь</li>
            </ul>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">4. ХРАНЕНИЕ И ЗАЩИТА</p>
            <p>Данные хранятся на защищённых серверах. Мы не передаём ваши персональные данные третьим лицам, за исключением случаев, необходимых для исполнения заказа (службы доставки), и случаев, предусмотренных законодательством.</p>
            <p className="mt-3">Срок хранения персональных данных — не более 3 лет с момента последнего взаимодействия, если иное не предусмотрено законом.</p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">5. ВАШИ ПРАВА</p>
            <p>В соответствии с Законом Республики Беларусь «О защите персональных данных» вы вправе:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Получить информацию об обрабатываемых данных</li>
              <li>Потребовать исправления неточных данных</li>
              <li>Отозвать согласие на обработку</li>
              <li>Потребовать удаления данных</li>
            </ul>
            <p className="mt-3">Для реализации прав обратитесь: <a href="https://t.me/cinematic_brand" className="underline underline-offset-2">@cinematic_brand</a></p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">6. ФАЙЛЫ COOKIE</p>
            <p>Сайт использует файлы cookie для корректной работы (корзина покупок, настройки). Подробнее — в <Link href="/cookies" className="underline underline-offset-2">Политике использования cookies</Link>.</p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">7. ИЗМЕНЕНИЯ ПОЛИТИКИ</p>
            <p>Мы вправе обновлять настоящую Политику. Актуальная версия всегда доступна на данной странице. Продолжение использования сайта после изменений означает согласие с новой редакцией.</p>
          </section>

          <p className="text-[11px] text-gray-400 pt-4 border-t border-gray-100">Последнее обновление: май 2025</p>
        </div>
      </div>
    </div>
  );
}
