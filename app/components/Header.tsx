import Image from "next/image";
import NavMenu from "./Nav";
import SearchInput from "./SearchInput";
export default function Header(){

    const HEADER_BUTTON_STYLE = "button header-button ml-[1.5rem] first:ml-0";
    return (
        <header className="w-full max-h-[10rem] h-screen p-[1.5rem] mt-[2.5rem] rounded-b-[50px] rounded-t-[10px] flex justify-between items-center section-border section-bg main-shadow">
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