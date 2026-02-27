import { CircleButton } from "../ui/CircleButton";
export default function SearchForm() {
    return (
        <form
            className="flex flex-row items-center w-2/10 h-full relative"
            action=""
        >
            <input
                className="w-full h-full text-input rounded-full"
                type="text"
                name="search-query"
                id="search"
            />
            <CircleButton className="absolute right-0">🔎︎</CircleButton>
        </form>
    );
}