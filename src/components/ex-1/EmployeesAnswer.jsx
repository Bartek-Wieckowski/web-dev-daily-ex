import { useEffect, useState } from 'react';

const EmployeesAnswer = ({ peopleAnswer, clickNum }) => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (clickNum <= 1) {
      const delay = 2000;

      const delayFunction = async () => {
        const delayPromise = () =>
          new Promise((resolve) => setTimeout(resolve, delay));

        await delayPromise();

        setShowContent(true);
      };

      delayFunction();
    } else {
      setShowContent(true);
    }
  }, [clickNum]);
  return (
    <>
      {showContent &&
        peopleAnswer.map(
          (p, index) =>
            index === 2 && (
              <div
                className="flex items-start gap-2 px-4 py-2"
                key={p.name + index}
              >
                <img
                  src={p.photo}
                  className="w-[40px] h-[40px] rounded-full border-2 border-white"
                />
                <p className="max-w-max p-3 rounded-xl text-white bg-employee-answer text-sm">
                  {p.message}
                </p>
              </div>
            )
        )}
    </>
  );
};
export default EmployeesAnswer;
