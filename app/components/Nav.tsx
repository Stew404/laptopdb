import Link from "next/link";

export default function NavMenu() {
  const BUTTON_STYLES =
    "button flex-1 h-[6rem] rounded-full text-[1.8rem] font-[700] transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0";

  return (
    <nav className="w-full xl:w-[52%] h-full p-[.6rem] flex items-center gap-[.8rem] rounded-full neo-inset">
      <Link className={BUTTON_STYLES} href="/">
        Главная
      </Link>

      <Link className={BUTTON_STYLES} href="/pc">
        Каталог
      </Link>

      <Link className={BUTTON_STYLES} href="#">
        Новости
      </Link>
    </nav>
  );
}