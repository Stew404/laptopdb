import Sidebar from "./modules/Sidebar";
import Main from "./modules/Main";
import { getLaptopsByFullName } from "../db/laptops";
import { SearchParams } from "next/dist/server/request/search-params";
import { Laptop } from "../types";

export default async function PC({ searchParams }: { searchParams: Promise<SearchParams> }) {
  let params = await searchParams;
  let laptops: Laptop[] = [];
  if (typeof params.vendor === "string" && typeof params.line === "string") {
    if (typeof params.generation === "string") {
      laptops = await getLaptopsByFullName(params.vendor, params.line, params.generation);
    } else {
      laptops = await getLaptopsByFullName(params.vendor, params.line);
    }
  }

  return (
    <div className="flex h-screen max-h-(--main-height) p-[1rem] section-bg main-shadow section-border rounded-[4rem] rounded-b-[2rem] gap-[1rem]">
      <Sidebar params={params} />
      {laptops.length > 0 && <Main laptops={laptops} />}
    </div>
  );
}
