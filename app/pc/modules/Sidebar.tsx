import { SearchParams } from "next/dist/server/request/search-params";
import { getLinesWithGenerations } from "../../db/lines";
import { getVendorsWithLines } from "../../db/vendors";
import { ChooseMenu } from "../components/ChooseMenu";
import { SidebarHeader } from "../components/SidebarHeader";
import BlockStyle from "@/app/ui/BlockStyle";
import SidebarLaptopInfo from "../components/SidebarLaptopInfo";




export default async function Sidebar({params}: {params: SearchParams}) {
    const brandsWithLines = await getVendorsWithLines();
    const linesWithGenerations = await getLinesWithGenerations();

    
    const {vendor, line, generation} = params
    
    const menuState = {
        vendor: "",
        line: "",
        generation: ""
    }; 
    

    if (
        vendor &&
        typeof vendor === "string" &&
        line &&
        typeof line === "string"
    ) {
        menuState.vendor = vendor;
        menuState.line = line;
    }

    if (generation && typeof generation === "string"){
        menuState.generation = generation
    }

    return (
        <BlockStyle style="blue">
            <aside className="min-w-1/5 w-1/5 p-[1rem] h-full flex flex-col text-xl rounded-[50px] rounded-bl-[10px]">
                <SidebarHeader />
                <ChooseMenu
                    brandsWithLines={brandsWithLines}
                    linesWithGenerations={linesWithGenerations}
                    selectedState={{ ...menuState }}
                />
                <SidebarLaptopInfo/>
            </aside>
        </BlockStyle>
    );
}