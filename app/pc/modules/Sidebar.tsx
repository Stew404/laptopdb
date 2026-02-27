import { getLinesWithGenerations } from "../../db/lines";
import { getVendorsWithLines } from "../../db/vendors";
import { ChooseMenu } from "../components/ChooseMenu";
import { SidebarHeader } from "../components/SidebarHeader";


export default async function Sidebar() {
    const brandsWithLines = await getVendorsWithLines();
    const linesWithGenerations = await getLinesWithGenerations();

    return (
        <aside className="main-border main-shadow w-1/5 p-[1rem] h-full text-xl rounded-[50px] rounded-bl-[10px]">
            <SidebarHeader/>
            <ChooseMenu brandsWithLines={brandsWithLines} linesWithGenerations={linesWithGenerations}/>
            
        </aside>
    );
}