import { CircleButton } from "../ui/CircleButton";
export default function SearchForm() {
  return (
    <form
      className="flex flex-row items-center w-2/10 h-full relative p-[.6rem] rounded-full neo-inset"
      action=""
    >
      <input
        className="w-full h-full text-input rounded-full pr-[6rem]"
        type="text"
        name="search-query"
        id="search"
      />
      <CircleButton className="absolute right-[.6rem]">🔎︎</CircleButton>
    </form>
  );
}
