import { SearchParams } from "next/dist/server/request/search-params";
import ElementList from "../components/admin/ElementList";
import LaptopForm from "../components/admin/LaptopForm";
import StatusMessage from "../components/admin/StatusMessage";
import add from "../actions/add";
import update from "../actions/update";
import { getLaptopByID, getLaptopsCount } from "../db/laptops";
import AdminSearchInput from "../components/admin/AdminSearchInput";
import Pagination from "../components/admin/Pagination";
import { verifySession } from "../lib/dal";
import { redirect } from "next/navigation";

export default async function AdminPanel({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const {isAuth} = await verifySession()

    if(!isAuth){
        redirect("/login")
    }

    const params = await searchParams;
    const action = params.action;
    const query = params.q;
    const page = parseInt(params.page as string);

    const laptopData = await getLaptopByID(params.id);
    const laptopsCount = await getLaptopsCount(query as string);

    switch (action) {
        case "add":
            return <LaptopForm action={add} />;

        case "edit":
            return <LaptopForm action={update} data={laptopData} />;

        default:
            return (
                <>
                    <StatusMessage />

                    <header className="my-[3rem] flex justify-between items-center">
                        <h2>Ноутбуки</h2>
                        <AdminSearchInput />
                        <a className="button p-[.5rem]" href="?action=add">
                            Добавить ноутбук
                        </a>
                    </header>

                    <Pagination
                        currentPage={page ? page : 1}
                        maxElements={laptopsCount}
                    />
                    <ElementList
                        type="laptop"
                        searchQuery={query as string}
                        page={page ? page : 1}
                    />
                    <Pagination
                        currentPage={page ? page : 1}
                        maxElements={laptopsCount}
                    />
                </>
            );
            break;
    }

    return;
}