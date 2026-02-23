import { getLinesWithGenerations } from "../../db/lines";
import { getVendorsWithLines } from "../../db/vendors";
import { ChooseMenu } from "../components/ChooseMenu";


export default async function Sidebar() {
    const brandsWithLines = await getVendorsWithLines();
    const linesWithGenerations = await getLinesWithGenerations();

    return (
        <aside className="min-w-fit max-w-1/6 pl-[1rem] h-full flex text-xl relative">
            <ChooseMenu brandsWithLines={brandsWithLines} linesWithGenerations={linesWithGenerations}/>
        </aside>
    );
}