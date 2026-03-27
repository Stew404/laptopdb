import Link from "next/link";

export default function NavMenu() {
  const BUTTON_STYLES = "button w-1/3 h-[6rem] rounded-full";
  return (
    <nav className="w-6/10 h-full p-[.5rem] flex items-center mx-[3rem] rounded-full neo-inset">
      <Link className={`${BUTTON_STYLES} rounded-tr-[1.8rem] rounded-br-[1.8rem]`} href="/pc">
        <h2>PC</h2>
      </Link>
      <Link className={`${BUTTON_STYLES} mx-[.8rem]`} href="/">
        <h2>Components</h2>
      </Link>
      <Link className={`${BUTTON_STYLES} rounded-tl-[1.8rem] rounded-bl-[1.8rem]`} href="/">
        <h2>Mobile</h2>
      </Link>
    </nav>
  );
}
