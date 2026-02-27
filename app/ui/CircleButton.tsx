import Link from "next/link";
import { PropsWithChildren } from "react";

const HEADER_BUTTON_STYLE = "button header-button";

export function CircleButton({href = "", className = "", children}: PropsWithChildren<{href? : string, className?: string}>){

    let style = HEADER_BUTTON_STYLE + " " + className

    if(href){
        return (
            <Link className={style} href={href}>
                {children}
            </Link>
        );
    }

    return <button className={style}>
        {children}
    </button>; 
}