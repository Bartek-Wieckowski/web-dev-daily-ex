import { HiHeart, HiMiniXMark } from "react-icons/hi2";

function ThanksModal() {
  return (
    <div className="absolute right-32 top-1/2 z-10 w-full max-w-[400px] rounded-lg bg-white shadow-2xl">
      <div className="flex h-full flex-col">
        <div className="ml-auto px-4 py-2">
          <HiMiniXMark className="cursor-pointer text-3xl font-bold text-gray-500" />
        </div>
        <div className="mx-auto p-4">
          <HiHeart className="cursor-pointer text-7xl font-bold text-gray-500" />
        </div>
        <p className="mx-auto mb-6 w-full max-w-[350px] text-center font-bold text-slate-800">
          Thank you!, Sabrina
        </p>
        <p className="mx-auto mb-6 w-full max-w-[350px] text-center font-bold text-slate-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem repellat ab esse
        </p>
        <div className="mx-auto mb-6 flex w-80 justify-between gap-6">
          <button className="font-bold text-gray-300">Write a comment</button>
          <button className="block w-[150px] rounded-md bg-slate-900 px-6 py-3 text-center capitalize text-white transition-colors hover:bg-slate-600">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThanksModal;
