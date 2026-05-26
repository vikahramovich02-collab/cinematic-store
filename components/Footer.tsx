import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-sm font-semibold tracking-[0.25em] mb-3">CINEMATIC</p>
            <p className="text-[11px] text-gray-500 leading-relaxed tracking-wide">
              For Movie Stars Only
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 mb-4">
              КАТАЛОГ
            </p>
            <ul className="space-y-2.5">
              {[
                ["Все коллекции", "/catalog"],
                ["Капсулы", "/capsules"],
                ["LETO 2025", "/catalog?collection=LETO+2025"],
                ["WEDDING", "/catalog?collection=WEDDING"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[11px] text-gray-600 hover:text-black transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 mb-4">
              ИНФОРМАЦИЯ
            </p>
            <ul className="space-y-2.5">
              {[
                ["О бренде", "/about"],
                ["Контакты", "/contacts"],
                ["Доставка", "/contacts#delivery"],
                ["Гид для женихов", "/capsules#svadba"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[11px] text-gray-600 hover:text-black transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 mb-4">
              МАГАЗИН
            </p>
            <address className="not-italic space-y-2">
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Минск, Комсомольская 18, пом.&nbsp;205
              </p>
              <p className="text-[11px] text-gray-600">пн–пт: 13:00–20:00</p>
              <p className="text-[11px] text-gray-600">сб–вс: 12:00–19:00</p>
            </address>

            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com/cinematic_brand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wide text-gray-600 hover:text-black transition-colors nav-link"
              >
                Instagram
              </a>
              <a
                href="https://t.me/cinematic_brand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-wide text-gray-600 hover:text-black transition-colors nav-link"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-[10px] text-gray-400 tracking-wide">
            © 2025 CINEMATIC. Все права защищены.
          </p>
          <p className="text-[10px] text-gray-400 tracking-wide">
            Минск, Беларусь
          </p>
        </div>
      </div>
    </footer>
  );
}
