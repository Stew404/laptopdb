'use client'
import NavMenu from "./Nav";
import SearchInput from "./SearchInput";
import { usePathname } from "next/navigation";
export default function Header(){

    const pathname = usePathname()
    console.log(pathname)
    const HEADER_BUTTON_STYLE = "button header-button ml-[1.5rem] first:ml-0";
    return (
        !pathname.includes("admin") &&
        <header className="w-full max-h-[10rem] h-screen p-[1.5rem] mt-[.5rem] rounded-b-[50px] rounded-t-[10px] flex justify-between items-center section-border section-bg main-shadow">
            <div className="flex w-[25%] justify-start">
                <a className={HEADER_BUTTON_STYLE} href="">
                    ➜]
                </a>
                <a className={HEADER_BUTTON_STYLE} href="">
                    ✮
                </a>
                <a className={HEADER_BUTTON_STYLE} href="">
                    ⇄
                </a>
                <a className={HEADER_BUTTON_STYLE} href="">
                    ◐
                </a>
            </div>

            <NavMenu />
            <SearchInput />
        </header>
    );
}