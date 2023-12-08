const Exercise8 = () => {
  return (
    <section className="bg-stone-100 text-black flex flex-col justify-center items-center mx-auto no_scroll">
      <div className="max-w-[500px] w-full mx-auto relative">
        <div className=" bg-blue-300 max-w-[400px] w-full h-[400px] mx-auto rounded-full"></div>
        <button className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-indigo-800 text-white rounded-xl  px-6 py-4 hover:bg-indigo-950 transition-colors">
          Click to share
        </button>
      </div>
    </section>
  );
};

export default Exercise8;
