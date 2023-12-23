function Results({ searchData }) {
  if (searchData.length === 0) {
    return <p className="text-rose-700">Not found</p>;
  }
  return (
    <div>
      <h2 className="mb-2 text-sm font-bold uppercase text-black">Suggested</h2>
      <div className="flex items-center gap-3">
        {searchData.map((d) => (
          <div
            className="flex-1 cursor-pointer rounded-md border border-gray-500 bg-white shadow"
            key={d.id}
          >
            <div className="flex items-center">
              <img
                src={d.image}
                alt={d.firstName}
                className="w-full max-w-[65px]"
              />
              <div className="flex-flex-col">
                <p className="font-semibold text-black">{d.firstName}</p>
                <p className="text-sm font-semibold text-black">{d.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
