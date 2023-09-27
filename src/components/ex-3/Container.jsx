const Container = ({ children }) => {
  return (
    <div className="container px-6 py-3 mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-0">
      {children}
    </div>
  );
};

export default Container;
