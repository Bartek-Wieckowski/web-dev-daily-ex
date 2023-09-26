const ChatWindow = ({ children }) => {
  return (
    <div className="m-w-[350px] h-[400px] bg-slate-800 rounded-t-xl">
      {children}
    </div>
  );
};

export default ChatWindow;
