const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="w-[90%] bg-white rounded-3xl mx-auto p-8">
        <h3 className="font-medium text-center text-lg">Recently added</h3>
        <p className="font-normal text-center text-sm mt-3">
          The latest tools that help you and your team build software
          better,together.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6  xl:gap-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
