import Sidebar from "./modules/Sidebar";
import Main from "./modules/Main";
import { getLaptopsByFullName } from "../db/laptops";
import { SearchParams } from "next/dist/server/request/search-params";
import { Laptop } from "../types";

export default async function PC({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  let laptops: Laptop[] = [];

  if (typeof params.vendor === "string" && typeof params.line === "string") {
    laptops =
      typeof params.generation === "string"
        ? await getLaptopsByFullName(params.vendor, params.line, params.generation)
        : await getLaptopsByFullName(params.vendor, params.line);
  }

  return (
    <main className="flex flex-col gap-[1.6rem] pb-[2rem]">
      <section className="section-bg section-border main-shadow rounded-[4rem] rounded-b-[2rem] p-[1.6rem]">
        <div className="block-bg main-border soft-shadow rounded-[3.4rem] rounded-b-[2rem] p-[2.4rem]">
          <h1 className="text-[3.8rem] md:text-[5rem] leading-[1.05] font-[700]">
            Каталог Устройств
          </h1>

          <p className="mt-[1.2rem] text-[1.6rem] leading-[1.6] text-[var(--text-muted)]">
            Выбери производителя, линейку и поколение.
          </p>
        </div>
      </section>

      <section className="section-bg section-border main-shadow rounded-[4rem] rounded-b-[2rem] p-[1rem]">
        <div className="flex gap-[1rem] min-h-[68rem]">
          <div className="w-[32rem] min-w-[32rem]">
            <Sidebar params={params} />
          </div>

          <div className="flex-1 min-w-0">
            {laptops.length > 0 ? (
              <Main laptops={laptops} />
            ) : (
              <div className="h-full block-bg main-border soft-shadow rounded-[3.4rem] rounded-b-[2rem] flex items-center justify-center text-center p-[3rem]">
                <div>
                  <div className="mx-auto w-[7rem] h-[7rem] rounded-full neo-inset flex items-center justify-center text-[3rem]">
                    💻
                  </div>

                  <h2 className="mt-[2rem] text-[3rem]">
                    Выбери параметры слева
                  </h2>

                  <p className="mt-[1rem] text-[1.6rem] text-[var(--text-muted)]">
                    После выбора производителя и линейки здесь появятся модель.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}