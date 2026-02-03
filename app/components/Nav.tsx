export default function NavMenu(){

    const BUTTON_STYLES = "button w-1/3 h-[6rem] rounded-full";
    return (
        // main-border block-bg main-shadow
        <nav className="w-6/10 h-full p-[.3rem] pb-[.3rem] flex items-center mx-[3rem] rounded-full">
            <a className={`${BUTTON_STYLES} rounded-tr-[0]`} href="/pc">
                <h2>PC</h2>
            </a>
            <a className={`${BUTTON_STYLES} rounded-t-[0]`} href="">
                <h2>Components</h2>
            </a>
            <a className={`${BUTTON_STYLES} rounded-tl-[0]`} href="">
                <h2>Mobile</h2>
            </a>
        </nav>
    );
}