import { redirect } from "next/navigation";

export default function AdminSearchInput(){

    const formAction = async (formData: FormData)=>{
        "use server"
        const query = formData.get("search-query");
        if (query) {
            redirect(`/admin?q=${encodeURI(query as string)}`);
        }
    }

    return (
        <form
            className="flex flex-row items-center w-2/10 h-full relative p-[.6rem] rounded-full neo-inset"
            action={formAction}
        >
            <input
                className="w-full h-full text-input rounded-full pr-[6rem]"
                type="text"
                name="search-query"
                id="search"
            />
            <button
                className="button header-button absolute right-[.6rem] cursor-pointer"
                type="submit"
            >
                🔎︎
            </button>
        </form>
    );
}