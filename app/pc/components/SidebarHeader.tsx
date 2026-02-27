import { CircleButton } from "../../ui/CircleButton";
export function SidebarHeader (){
    return (
        <header className="flex items-center justify-between">
            <CircleButton>☰</CircleButton>
            <CircleButton href="/pc">🏠︎</CircleButton>
        </header>
    );
}