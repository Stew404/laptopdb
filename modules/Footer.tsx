import Link from "next/link";

const FOOTER_LINKS = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/pc" },
    { label: "Новости", href: "#" },
    { label: "Контакты", href: "#" },
];

const SOCIALS = [
    { label: "Telegram", href: "#" },
    { label: "VK", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "GitHub", href: "#" },
];

export default function Footer() {
    return (
        <footer className="mt-[1.6rem] section-border section-bg main-shadow rounded-[4rem] rounded-t-[2rem] p-[1.6rem] md:p-[2rem]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.4rem]">
                <div className="block-bg main-border soft-shadow rounded-[3rem] p-[2rem]">
                    <h3 className="text-[2.4rem]">Laptop DB</h3>
                    <p className="mt-[1rem] text-[1.5rem] leading-[1.65] text-[var(--text-muted)]">
                        Платформа для поиска ноутбуков, просмотра характеристик и чтения новостей из мира техники.
                    </p>
                </div>

                <div className="block-bg main-border soft-shadow rounded-[3rem] p-[2rem]">
                    <h3 className="text-[2rem]">Навигация</h3>
                    <div className="flex flex-col gap-[.8rem] mt-[1.4rem]">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="button rounded-[2rem] px-[1.4rem] py-[1.2rem] justify-start"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="block-bg main-border soft-shadow rounded-[3rem] p-[2rem]">
                    <h3 className="text-[2rem]">Соцсети</h3>
                    <div className="flex flex-wrap gap-[.8rem] mt-[1.4rem]">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="button rounded-full px-[1.4rem] py-[1.1rem]"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>

                    <p className="mt-[1.8rem] text-[1.4rem] text-[var(--text-muted)]">
                        © 2026 Laptop DB. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
}