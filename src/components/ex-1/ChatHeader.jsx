const ChatHeader = ({ children }) => {
  return (
    <header className="flex items-center justify-between px-4 gap-4 rounded-xl ex1-bg-header py-5">
      {children}
    </header>
  );
};

export default ChatHeader;
