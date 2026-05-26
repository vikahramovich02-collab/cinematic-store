import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-3 font-medium">ЮРИДИЧЕСКОЕ</p>
        <h1 className="text-2xl font-semibold tracking-tight mb-10">Политика использования cookies</h1>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">ЧТО ТАКОЕ COOKIE</p>
            <p>Cookie — это небольшие текстовые файлы, сохраняемые браузером на вашем устройстве при посещении сайта. Они позволяют сайту «запоминать» ваши действия и предпочтения на определённый период времени.</p>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">КАКИЕ COOKIE МЫ ИСПОЛЬЗУЕМ</p>
            <div className="space-y-4">
              <div className="border border-gray-100 p-4">
                <p className="text-[11px] font-semibold tracking-wide mb-1">Необходимые</p>
                <p className="text-[11px] text-gray-500">Обеспечивают базовую работу сайта: корзина покупок, сессия пользователя. Без них сайт не может нормально функционировать. Не требуют согласия.</p>
              </div>
              <div className="border border-gray-100 p-4">
                <p className="text-[11px] font-semibold tracking-wide mb-1">Аналитические</p>
                <p className="text-[11px] text-gray-500">Помогают понять, как посетители используют сайт (например, Google Analytics в обезличенном виде). Используются только при вашем согласии.</p>
              </div>
              <div className="border border-gray-100 p-4">
                <p className="text-[11px] font-semibold tracking-wide mb-1">Функциональные</p>
                <p className="text-[11px] text-gray-500">Запоминают ваши предпочтения (например, согласие с cookie-баннером). Используются только при вашем согласии.</p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">КАК УПРАВЛЯТЬ COOKIE</p>
            <p>Вы можете отключить cookie в настройках браузера. Обратите внимание: отключение необходимых cookie может нарушить работу сайта (например, корзина перестанет сохраняться).</p>
            <p className="mt-3">Инструкции для популярных браузеров:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie</li>
              <li>Safari: Настройки → Конфиденциальность → Управление данными сайтов</li>
              <li>Firefox: Настройки → Приватность и защита → Куки и данные сайтов</li>
            </ul>
          </section>

          <section>
            <p className="text-[10px] tracking-[0.15em] font-semibold text-gray-400 mb-3">СТОРОННИЕ СЕРВИСЫ</p>
            <p>Сайт может использовать встроенные карты Google Maps. Эти сервисы могут устанавливать собственные cookie согласно их политикам конфиденциальности.</p>
          </section>

          <p className="text-[11px] text-gray-400 pt-4 border-t border-gray-100">
            Подробнее о работе с данными — в <Link href="/privacy" className="underline underline-offset-2">Политике конфиденциальности</Link>. Последнее обновление: май 2025
          </p>
        </div>
      </div>
    </div>
  );
}
