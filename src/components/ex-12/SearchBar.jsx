import { useForm } from "react-hook-form";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
function SearchBar() {
  const { register, handleSubmit } = useForm();
  let [searchParams, setSearchParams] = useSearchParams();

  function onSubmit(data) {
    setSearchParams({ search: encodeURIComponent(data.search) });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative flex px-2">
        <label className="relative block w-full">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <HiMagnifyingGlass className="h-5 w-5 fill-slate-300" />
          </span>
          <input
            className="block w-min rounded-full border border-slate-300 bg-white py-2 pl-9 pr-3 text-black shadow-sm transition-all duration-300 placeholder:italic placeholder:text-slate-400 focus:w-full focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Search by name or email"
            type="text"
            {...register("search")}
          />
        </label>
      </div>
    </form>
  );
}

export default SearchBar;
