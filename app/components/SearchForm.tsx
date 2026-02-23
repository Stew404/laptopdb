export default function SearchForm() {
    return (
        <form className="flex flex-row items-center w-2/10 h-full relative" action="">
            <input className="w-full h-full text-input rounded-full" type="text" name="search-query" id="search" />
            <button className="button header-button absolute right-0" type="submit">🔎︎</button>
        </form>
    );
}