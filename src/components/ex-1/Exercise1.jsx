import './ex-1.css';
const Exercise1 = () => {
  return (
    <section className="bg-white text-black">
      <div className="container mx-auto flex justify-center items-center min-h-screen w-full">
        <div className="m-w-[350px] h-[400px] bg-slate-800 rounded-t-xl">
          <header className="flex items-center justify-between px-4 gap-4 rounded-xl bg-header py-5">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-rose-400 border-2 border-white" />
              <div className="w-[40px] h-[40px] rounded-full bg-indigo-400 border-2 border-white -ml-3" />
              <div className="w-[40px] h-[40px] rounded-full bg-teal-400 border-2 border-white -ml-3" />
            </div>
            <div className="flex flex-col">
              <h4 className="text-white font-bold text-sm">
                Elli, Leah, Samantha
              </h4>
              <p className="text-white font-light text-xs">
                We typically reply in a few minutes
              </p>
            </div>
          </header>
          <div className="mt-4 w-full">
            <div className="h-[300px] overflow-y-auto">
              <div className="flex items-start gap-2 px-4 py-2">
                <div className="w-[40px] h-[40px] rounded-full bg-indigo-400 border-2 border-white" />
                <p className="max-w-max p-3 rounded-xl text-white bg-employee-answer text-sm">
                  Hi there! <br />
                  How can I help you?
                </p>
              </div>
            </div>
            <form>
              <div className="w-full h-[80px] bg-input flex items-center rounded-xl px-6 -mt-2">
                <input
                  type="text"
                  className="border-2 border-purple-500 text-purple-500 w-full bg-input rounded-full p-2 placeholder:text-purple-500 placeholder:text-sm focus:outline-none focus:ring focus:ring-violet-300"
                  placeholder="Type here"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise1;
