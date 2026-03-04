import { CircleButton } from "../../ui/CircleButton";
import BlockStyle from "../../ui/BlockStyle";
export function SidebarHeader (){
    return (
        <header className="flex items-center justify-between">
            <BlockStyle additionalClasses="shadow-padding rounded-full">
                <div>
                    <CircleButton>☰</CircleButton>
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