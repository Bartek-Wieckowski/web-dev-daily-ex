const UserText = ({ userAnsw }) => {
  return (
    <>
      {userAnsw.map((ua, index) => (
        <div
          className="flex flex-row-reverse items-start gap-2 px-4 py-2"
          key={ua + index}
        >
          <div className="w-[40px] h-[40px] rounded-full border-2 border-white bg-teal-300 flex items-center justify-center">
            🤠
          </div>
          <p className="max-w-max p-3 rounded-xl text-white bg-employee-answer text-sm">
            {ua}
          </p>
        </div>
      ))}
    </>
  );
};
export default UserText;
