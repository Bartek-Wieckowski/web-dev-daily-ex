import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import { useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";
import Results from "./Results";
function Exercise12() {
  const BASE_URL = "https://dummyjson.com/user";
  const [isOpen, setIsOpen] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");
  const decodedQuery = decodeURIComponent(query);

  const { data, loading, error } = useFetch(
    `${BASE_URL}/search?q=${decodedQuery}`,
  );

  function handleCloseWindow() {
    setIsOpen(false);
  }
  return (
    <section className="no_scroll grid place-items-center bg-white">
      {isOpen && (
        <div className="flex w-full max-w-[500px] flex-col gap-4 rounded-3xl bg-stone-200 p-4 shadow">
          <div className="ml-auto">
            <HiMiniXMark
              className="cursor-pointer text-3xl font-bold text-gray-500"
              onClick={handleCloseWindow}
            />
          </div>
          <h1 className="text-lg font-bold text-black">
            Share document with your friends
          </h1>
          <SearchBar />
          {loading && <span>Loading...</span>}
          {error && <span>Something went wrong</span>}
          {data && <Results searchData={data} />}
        </div>
      )}
    </section>
  );
}

export default Exercise12;
