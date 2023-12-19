import { HiMiniXMark } from "react-icons/hi2";
function Exercise9() {
  return (
    <section className="grid h-screen place-items-center bg-stone-100">
      <div className="w-full max-w-[500px] rounded-lg bg-white shadow-lg">
        <div className="flex h-full flex-col">
          <div className="ml-auto p-4">
            <HiMiniXMark className="cursor-pointer text-3xl font-bold text-gray-500" />
          </div>
          <p className="mx-auto mb-6 w-full max-w-[350px] text-center font-bold text-slate-800">
            How satisfied are you with webdevdaily`s customer support
            performance
          </p>
          <div className="flex justify-around">
            <div className="flex cursor-pointer flex-col items-center gap-3 rounded-lg p-3 transition-shadow hover:shadow-xl">
              <div className="text-4xl">😪</div>
              <p className="text-center text-lg text-gray-300">Unhappy</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3 rounded-lg p-3 transition-shadow hover:shadow-xl">
              <div className="text-4xl">😑</div>
              <p className="text-center text-lg text-gray-300">Neutral</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-3 rounded-lg p-3 transition-shadow hover:shadow-xl">
              <div className="text-4xl">😁</div>
              <p className="text-center text-lg text-gray-300">Satisfied</p>
            </div>
          </div>
          <div className="mx-auto my-6 w-full max-w-[150px]">
            <button className="block w-full rounded-md bg-slate-900 px-6 py-3 text-center capitalize text-white transition-colors hover:bg-slate-600">
              Close
            </button>
          </div>
        </div>
        test
      </div>
    </section>
  );
}

export default Exercise9;
