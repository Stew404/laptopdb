import Link from "next/link";
import { MouseEventHandler, PropsWithChildren } from "react";

const HEADER_BUTTON_STYLE = "button header-button";

type ButtonProps = PropsWithChildren<{href? : string, className?: string, onClick?: MouseEventHandler | undefined }>

export function CircleButton({href = "", className = "", onClick = undefined, children}: ButtonProps){

    let style = HEADER_BUTTON_STYLE + " " + className

    if(href){
        return (
            <Link className={style} href={href} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button className={style} onClick={onClick}>
            {children}
        </button>
    ); 
}