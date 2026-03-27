'use client'
import NavMenu from "../components/Nav";
import SearchForm from "../components/SearchForm";
import ThemeToggle from "../components/ThemeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const HEADER_BUTTON_STYLE = "button header-button ml-[1.5rem] first:ml-0";

  return (
    !pathname.includes("admin") && (
      <header className="w-full max-h-(--header-height) h-screen p-[1.6rem] my-[1rem] rounded-[4rem] rounded-b-[2rem] flex justify-between items-center section-border section-bg main-shadow">
        <div className="flex w-[25%] justify-start p-[.6rem] rounded-full neo-inset">
          <a className={HEADER_BUTTON_STYLE} href="">
            ➜]
          </a>
          <a className={HEADER_BUTTON_STYLE} href="">
            ✮
          </a>
          <a className={HEADER_BUTTON_STYLE} href="">
            ⇄
          </a>
          <ThemeToggle />
        </div>

        <NavMenu />
        <SearchForm />
      </header>
    )
  );
}
