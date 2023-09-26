const Container = ({ children }) => {
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen w-full gap-x-2">
      {children}
    </div>
  );
};

export default Container;
