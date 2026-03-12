'use client'

import { CircleButton } from "../../ui/CircleButton";
import BlockStyle from "../../ui/BlockStyle";
import { useSidebarTab } from "@/app/hooks/useSidebarTab";
export function SidebarHeader (){

    const {swapSidebarTab} = useSidebarTab()

    return (
        <header className="flex items-center justify-between">
            <BlockStyle additionalClasses="shadow-padding rounded-full">
                <div>
                    <CircleButton onClick={swapSidebarTab}>☰</CircleButton>
                </div>
            </BlockStyle>
            <BlockStyle additionalClasses="shadow-padding rounded-full">
                <div>
                    <CircleButton href="/pc">🏠︎</CircleButton>
                </div>
            </BlockStyle>
        </header>
    );
}