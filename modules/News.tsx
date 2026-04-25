import Image from "next/image";
import Link from "next/link";
import exampleImg from "@/public/new-example.png";

const NEWS_BLOCKS = [
  {
    title: "MSI представила Prestige 14 и Prestige 16 на CES 2026",
    excerpt:
      "Новые модели ориентированы на профессионалов, которым важны производительность, мобильность и премиальный дизайн.",
    tag: "MSI / CES 2026",
    featured: true,
  },
  {
    title: "ASUS показала ROG Zephyrus Duo с двумя 16-дюймовыми экранами",
    excerpt:
      "Устройство выделяется необычной конструкцией, мощным железом и ориентацией на gaming-сегмент.",
    tag: "ASUS / Gaming",
  },
  {
    title: "Производители сообщают о дефиците SSD и HDD",
    excerpt:
      "Нехватка накопителей у поставщиков и продавцов техники может повлиять на доступность устройств и комплектующих.",
    tag: "Storage / Market",
  },
  {
    title: "Аналитики прогнозируют рост цен на накопители в 2026 году",
    excerpt:
      "Рынок памяти остаётся нестабильным, а дефицит компонентов может продолжиться ещё несколько кварталов.",
    tag: "Analytics",
  },
  {
    title: "Honor представила Power 2 с аккумулятором 10 080 мАч",
    excerpt:
      "Ставка сделана на автономность: большая батарея сочетается с более компактным форм-фактором.",
    tag: "Honor / Mobile",
  },
];

export default function News() {
  const featured = NEWS_BLOCKS[0];
  const secondary = NEWS_BLOCKS.slice(1);

  return (
    <section
      id="news"
      className="section-border section-bg main-shadow rounded-[4rem] rounded-b-[2rem] p-[1.6rem] md:p-[2rem]"
    >
      <div className="flex items-center justify-between gap-[1rem] mb-[1.8rem] flex-wrap">
        <div>
          <span className="inline-flex rounded-full neo-inset px-[1.2rem] py-[.8rem] text-[1.3rem] uppercase tracking-[0.08em] font-[700]">
            News feed
          </span>
          <h2 className="mt-[1rem] text-[3rem] md:text-[3.6rem] leading-[1.1]">
            Последние новости и обновления
          </h2>
        </div>

        <Link
          href="#"
          className="button rounded-full px-[1.8rem] py-[1.2rem] min-h-[5.4rem]"
        >
          Все новости
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-[1.4rem] items-start">
        <article className="xl:col-span-7 block-bg main-border main-shadow rounded-[3.8rem] rounded-bl-[2rem] overflow-hidden self-start">
          <div className="relative h-[24rem] md:h-[32rem] xl:h-[36rem]">
            <Image
              src={exampleImg}
              alt={featured.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-[2rem] md:p-[2.4rem]">
            <span className="inline-flex rounded-full neo-inset px-[1.2rem] py-[.8rem] text-[1.2rem] uppercase tracking-[0.08em] font-[700]">
              {featured.tag}
            </span>

            <h3 className="mt-[1.4rem] text-[2.6rem] md:text-[3.2rem] leading-[1.1] max-w-[80rem]">
              {featured.title}
            </h3>

            <p className="mt-[1.2rem] text-[1.55rem] leading-[1.7] text-[var(--text-muted)] max-w-[72rem]">
              {featured.excerpt}
            </p>

            <div className="mt-[2rem]">
              <Link
                href="#"
                className="button rounded-full px-[1.8rem] py-[1.2rem] inline-flex min-h-[5.4rem]"
              >
                Читать подробнее
              </Link>
            </div>
          </div>
        </article>

        <div className="xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-[1.2rem] self-start">
          {secondary.map((item, index) => (
            <article
              key={item.title}
              className={`block-bg main-border soft-shadow rounded-[3rem] overflow-hidden flex flex-col ${index === 0 ? "xl:translate-y-[1.2rem]" : ""
                }`}
            >
              <div className="relative h-[18rem] md:h-[20rem]">
                <Image
                  src={exampleImg}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-[1.6rem] flex flex-col flex-1">
                <span className="inline-flex self-start rounded-full neo-inset px-[1.1rem] py-[.7rem] text-[1.2rem] uppercase tracking-[0.08em] font-[700]">
                  {item.tag}
                </span>

                <h3 className="mt-[1.2rem] text-[1.9rem] md:text-[2rem] leading-[1.2]">
                  {item.title}
                </h3>

                <p className="mt-[.9rem] text-[1.45rem] leading-[1.65] text-[var(--text-muted)] flex-1">
                  {item.excerpt}
                </p>

                <Link
                  href="#"
                  className="button rounded-full px-[1.4rem] py-[1rem] mt-[1.6rem] min-h-[4.8rem]"
                >
                  Открыть
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}