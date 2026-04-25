import { SearchParams } from "next/dist/server/request/search-params";
import { getLinesWithGenerations } from "../../db/lines";
import { getVendorsWithLines } from "../../db/vendors";
import { ChooseMenu } from "../components/ChooseMenu";
import { SidebarHeader } from "../components/SidebarHeader";
import SidebarLaptopInfo from "../components/SidebarLaptopInfo";

export default async function Sidebar({ params }: { params: SearchParams }) {
    const brandsWithLines = await getVendorsWithLines();
    const linesWithGenerations = await getLinesWithGenerations();

    const { vendor, line, generation } = params;

    const menuState = {
        vendor: "",
        line: "",
        generation: "",
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

    if (generation && typeof generation === "string") {
        menuState.generation = generation;
    }

    return (
        <aside className="w-full h-full block-bg main-border soft-shadow rounded-[3.4rem] rounded-bl-[2rem] p-[1.4rem] overflow-hidden">
            <SidebarHeader />

            <ChooseMenu
                brandsWithLines={brandsWithLines}
                linesWithGenerations={linesWithGenerations}
                selectedState={{ ...menuState }}
            />

            <SidebarLaptopInfo />
        </aside>
    );
}