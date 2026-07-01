import Sidebar from "./modules/Sidebar";
import Main from "./modules/Main";
import { getLaptopsByFullName } from "../db/laptops";
import { SearchParams } from "next/dist/server/request/search-params";
import { Laptop } from "../types";

export default async function PC({searchParams}: {searchParams: Promise<SearchParams>}){

    let params = await searchParams;
    let laptops: Laptop[] = []
    if(typeof params.vendor === "string" && typeof params.line === "string"){
        console.log(params)
        if (typeof params.generation === "string"){
            laptops = await getLaptopsByFullName(
                params.vendor,
                params.line,
                params.generation
            );
        } else {
            laptops = await getLaptopsByFullName(
                params.vendor,
                params.line
            );
        }
    }

    return (
        <div className="flex h-screen max-h-(--main-height) p-[3px] pb-[5px] pr-[5px] section-bg main-shadow section-border rounded-t-[50px] rounded-b-[10px]">
            <Sidebar params={params}/>
            {laptops.length > 0 && <Main laptops={laptops}/>}
        </div>
    );
}