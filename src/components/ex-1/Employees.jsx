const Employees = ({ peopleEmployee }) => {
  return (
    <div className="flex items-center">
      {peopleEmployee.map((p, index) => (
        <img
          key={p.name}
          src={p.photo}
          className={`w-[40px] h-[40px] rounded-full border-2 border-white ${
            index !== 0 ? '-ml-3' : ''
          }`}
        />
      ))}
    </div>
  );
};
export default Employees;
