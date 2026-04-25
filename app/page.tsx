import News from "./modules/News";
import Link from "next/link";
import Image from "next/image";
import exampleImg from "@/public/new-example.png";

const FEATURES = [
    {
        title: "Большая база ноутбуков",
        text: "Сравнивай устройства по характеристикам, брендам и модельным линейкам в одном месте.",
    },
    {
        title: "3д визуализация",
        text: "Просмотр моделей устройств в 3д пространстве.",
    },
    {
        title: "Технологические новости",
        text: "Следи за новыми релизами, трендами рынка и важными изменениями в индустрии.",
    },
];


export default async function Home() {
    return (
        <main className="flex flex-col gap-[1.6rem] pb-[2rem]">
            <section className="section-border section-bg main-shadow rounded-[4rem] rounded-b-[2rem] p-[1.6rem] md:p-[2rem]">
                <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_.8fr] gap-[1.6rem] items-stretch">
                    <div className="block-bg main-border soft-shadow rounded-[3.6rem] rounded-bl-[2rem] p-[2rem] md:p-[3rem] flex flex-col justify-between min-h-[34rem]">
                        <div>
                            <span className="inline-flex items-center rounded-full px-[1.4rem] py-[.8rem] neo-inset text-[1.3rem] font-[700] tracking-[0.08em] uppercase">
                                Laptop DB
                            </span>

                            <h1 className="text-[3.6rem] md:text-[5.4rem] leading-[1.02] font-[700] text-[var(--text-strong)] mt-[1.8rem] max-w-[72rem]">
                                Каталог ноутбуков, новости индустрии и удобный просмотр моделей
                            </h1>

                            <p className="mt-[1.6rem] max-w-[62rem] text-[1.7rem] leading-[1.6] text-[var(--text-muted)]">
                                База устройств с 3д визуализацией и актуальными новостями.

                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-[1rem] mt-[2.4rem]">
                            <Link
                                href="#news"
                                className="button rounded-full px-[2rem] py-[1.4rem] min-h-[5.8rem]"
                            >
                                Смотреть новости
                            </Link>
                            <Link
                                href="/pc"
                                className="button rounded-full px-[2rem] py-[1.4rem] min-h-[5.8rem]"
                            >
                                Открыть каталог
                            </Link>
                        </div>
                    </div>

                    <div className="block-bg main-border main-shadow rounded-[3.6rem] rounded-br-[2rem] overflow-hidden">
                        <div className="relative h-[22rem] md:h-[26rem]">
                            <Image
                                src={exampleImg}
                                alt="Laptop news preview"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="p-[1.8rem] md:p-[2.2rem]">
                            <div className="flex items-center justify-between gap-[1rem] mb-[1.2rem]">
                                <span className="neo-inset rounded-full px-[1.2rem] py-[.7rem] text-[1.3rem] font-[700] uppercase tracking-[0.08em]">
                                    Featured
                                </span>
                                <span className="text-[1.3rem] text-[var(--text-muted)]">CES / Hardware / 2026</span>
                            </div>

                            <h2 className="text-[2.4rem] leading-[1.15]">
                                Новые устройства, свежие релизы и быстрый доступ к ключевой информации
                            </h2>


                        </div>
                    </div>
                </div>
            </section>

            <News />

            <section className="section-border section-bg main-shadow rounded-[4rem] rounded-b-[2rem] p-[1.6rem] md:p-[2rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.2rem]">
                    {FEATURES.map((item) => (
                        <article
                            key={item.title}
                            className="block-bg main-border soft-shadow rounded-[3.2rem] p-[2rem] min-h-[22rem] flex flex-col justify-between"
                        >
                            <div className="w-[5.4rem] h-[5.4rem] rounded-full neo-inset flex items-center justify-center text-[2rem]">
                                ✦
                            </div>

                            <div className="mt-[1.6rem]">
                                <h3 className="text-[2.2rem] leading-[1.2]">{item.title}</h3>
                                <p className="mt-[1rem] text-[1.5rem] leading-[1.6] text-[var(--text-muted)]">
                                    {item.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}