import Sidebar from "./modules/Sidebar";
import { getVendorsWithLines } from "../db/vendors";
import { getLinesWithGenerations} from "../db/lines";
import Main from "./components/Main";
import { getLaptopByID } from "../db/laptops";
import { SearchParams } from "next/dist/server/request/search-params";

export default async function PC({searchParams}: {searchParams: Promise<SearchParams>}){

    let laptopId = (await searchParams).laptop;
    let laptop

    if(typeof laptopId === "string"){
        laptop = await getLaptopByID(parseInt(laptopId))
    }

    return (
        <div className="flex h-screen max-h-(--main-height) section-bg main-shadow section-border rounded-t-[50px] rounded-b-[10px]">
            <Sidebar/>
            {laptop && <Main laptopData={laptop}/>}
        </div>
    );
}