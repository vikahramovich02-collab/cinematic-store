import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px",
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <p className="text-white/40 text-[10px] tracking-[0.3em] mb-6 font-medium">
            О БРЕНДЕ
          </p>
          <h1
            className="font-semibold leading-tight text-white mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)", letterSpacing: "-0.02em" }}
          >
            Творец, который<br />проходит непростой<br />путь создания
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg">
            CINEMATIC — глубокий и много анализирующий бренд. Ему есть
            что сказать миру. Целеустремлённый и уверенный в реализации
            своей миссии.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-4 font-medium">
              ВИДЕНИЕ
            </p>
            <h2 className="text-xl font-semibold tracking-tight mb-4">
              Чтобы каждый человек не боялся менять свою жизнь через трансформацию стиля
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Не ждать особого момента, чтобы носить то, что ты хочешь — то,
              что отражает твою историю, твоё кино. Снимать своё кино каждый день.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-4 font-medium">
              МИССИЯ
            </p>
            <h2 className="text-xl font-semibold tracking-tight mb-4">
              Вдохновлять на создание своего кино, своего сценария
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Разрушать правила, создавать свою историю. Быть смелее.
              Разрешаем одеваться смелее.
            </p>
          </div>
        </div>
      </section>

      {/* Brand idea */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-6 font-medium">
              ИДЕЯ БРЕНДА
            </p>
            <h2
              className="font-semibold leading-tight mb-6 tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}
            >
              Креативный бренд одежды для тех, кто пишет собственный сценарий жизни
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Для мужчин, которые осознанно создают свой стиль и сценарий жизни.
              Создавай сценарий, который стоит прожить — смелость быть главным
              героем своего фильма.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-10 font-medium">
          ЦЕННОСТИ БРЕНДА
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {[
            {
              tag: "РАЦИОНАЛЬНОЕ",
              title: "Необычный дизайн",
              text: "Работа с формой и пропорциями. Осознанный выбор материалов: лёгкость в уходе, износостойкость, баланс цены и качества.",
            },
            {
              tag: "РАЦИОНАЛЬНОЕ",
              title: "Капсульность",
              text: "Возможность сочетать вещи между собой. Каждая вещь имеет уникальный характер и удачно сочетается с другими вещами из коллекций.",
            },
            {
              tag: "ЭМОЦИОНАЛЬНОЕ",
              title: "Чувство особенности",
              text: "Ты чувствуешь себя особенным, уникальным. Забота, ощущение «я важен». Чувство свободы и самовыражения.",
            },
            {
              tag: "ЭМОЦИОНАЛЬНОЕ",
              title: "Гордость причастности",
              text: "Статус, чувство значимости и исключительности. Гордость от причастности к бренду с характером и философией.",
            },
          ].map(({ tag, title, text }) => (
            <div key={title} className="border border-gray-100 p-8 hover:border-gray-300 transition-colors">
              <p className="text-[9px] tracking-[0.25em] text-gray-400 mb-3 font-semibold">
                {tag}
              </p>
              <h3 className="text-base font-semibold mb-3">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand archetypes */}
      <section className="bg-black text-white py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-white/40 text-[10px] tracking-[0.3em] mb-10 font-medium">
            АРХЕТИП БРЕНДА
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "ТВОРЕЦ",
                text: "Бренд предлагает переосмыслить комфорт в образе, по-новому взглянуть на форму и пропорции, экспериментировать с сочетаниями.",
              },
              {
                title: "ИСКАТЕЛЬ",
                text: "Бренд создаёт свой мир, непохожий на привычный, где покупатель будет чувствовать себя Movie Star.",
              },
              {
                title: "ЛЮБОВНИК",
                text: "Влюблённые бренды превозносят клиента, заставляют его почувствовать себя особенным и желанным.",
              },
            ].map(({ title, text }) => (
              <div key={title} className="border-t border-white/10 pt-6">
                <h3 className="text-sm font-semibold tracking-[0.15em] mb-3">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-10 max-w-xl">
            <p className="text-[10px] tracking-[0.25em] text-white/40 mb-4 font-medium">
              ХАРАКТЕР CINEMATIC
            </p>
            <ul className="space-y-2">
              {[
                "Постоянно ищет себя",
                "Сторонник экспериментов над внешностью",
                "Ищет эстетику во всём",
                "Принимает себя",
                "Смелый, экспериментатор",
              ].map((item) => (
                <li key={item} className="text-sm text-white/60 flex items-start gap-2">
                  <span className="text-white/20 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-gray-400 mb-4 font-medium">
              ПРОИЗВОДСТВО
            </p>
            <h2 className="text-2xl font-semibold tracking-tight mb-5">
              Процесс создания как искусство
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Над коллекциями трудится целая команда творческих людей.
              Зачастую процесс создания коллекции является результатом долгих
              поисков, анализа и переосмысления.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Клиент приобретает не просто утилитарную вещь, а результат
              большой творческой деятельности. Производство в Беларуси.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-medium nav-link"
            >
              СМОТРЕТЬ КОЛЛЕКЦИЮ <ArrowRight size={13} />
            </Link>
          </div>

          <div
            className="aspect-square flex items-center justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f0ede8 0%, #e8e3dc 100%)" }}
          >
            <span
              className="text-black/8 font-bold select-none text-center"
              style={{ fontSize: "clamp(2rem, 8vw, 6rem)", letterSpacing: "-0.03em" }}
            >
              BY<br />CINEMATIC
            </span>
            <p className="absolute bottom-4 left-4 text-black/20 text-[10px] tracking-[0.2em]">
              МИНСК, БЕЛАРУСЬ
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
