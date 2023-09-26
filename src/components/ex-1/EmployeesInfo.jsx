const EmployeesInfo = ({ peopleEmployee }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-white font-bold text-sm">
        {peopleEmployee.map((p) => p.name).join(', ')}
      </h4>
      <p className="text-white font-light text-xs">
        We typically reply in a few minutes
      </p>
    </div>
  );
};

export default EmployeesInfo;
