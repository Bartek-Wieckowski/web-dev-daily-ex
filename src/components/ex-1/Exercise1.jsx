import { useEffect, useState } from 'react';
import './ex-1.css';
import people from './people';
import { msgIcon } from '../../assets/ex-1/images/index';

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

const EmployeesAnswer = ({ peopleAnswer }) => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const delay = 2000; // 2 sekundy

    const delayFunction = async () => {
      // Utwórz obiekt Promise, który rozwiązuje się po upływie określonego opóźnienia
      const delayPromise = () =>
        new Promise((resolve) => setTimeout(resolve, delay));

      // Oczekaj na rozwiązanie obietnicy przed ustawieniem showContent na true
      await delayPromise();

      // Po rozwiązaniu obietnicy ustaw showContent na true, aby wyświetlić treść komponentu
      setShowContent(true);
    };

    // Wywołanie funkcji opóźnienia
    delayFunction();
  }, []);
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

const Form = ({ onAddItem }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const lastAnswer = value;
    onAddItem(lastAnswer);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-[80px] bg-input flex items-center rounded-xl px-6 -mt-2">
        <input
          type="text"
          className="border-2 border-purple-500 text-purple-500 w-full bg-input rounded-full p-2 placeholder:text-purple-500 placeholder:text-sm focus:outline-none focus:ring focus:ring-violet-300"
          placeholder="Type here"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    </form>
  );
};

const Exercise1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userAnsw, setUserAnsw] = useState([]);

  const handleAddAnswer = (ans) => {
    setUserAnsw((userAnsw) => [...userAnsw, ans]);
  };

  return (
    <section className="bg-white text-black">
      <div className="container mx-auto flex justify-center items-center min-h-screen w-full gap-x-2">
        {isOpen && (
          <div className="m-w-[350px] h-[400px] bg-slate-800 rounded-t-xl">
            <header className="flex items-center justify-between px-4 gap-4 rounded-xl bg-header py-5">
              <Employees peopleEmployee={people} />
              <div className="flex flex-col">
                <h4 className="text-white font-bold text-sm">
                  {people.map((p) => p.name).join(', ')}
                </h4>
                <p className="text-white font-light text-xs">
                  We typically reply in a few minutes
                </p>
              </div>
            </header>
            <div className="mt-4 w-full">
              <div className="h-[300px] overflow-y-auto">
                <EmployeesAnswer peopleAnswer={people} />
                {userAnsw.length > 0 && <UserText userAnsw={userAnsw} />}
              </div>
              <Form onAddItem={handleAddAnswer} />
            </div>
          </div>
        )}
        {isOpen ? (
          <button
            className={`close text-white text-4xl rounded-full w-[60px] h-[60px]  flex items-center justify-center ${
              isOpen ? 'self-end' : ''
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            X
          </button>
        ) : (
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative"
          >
            <img src={msgIcon} alt="icon" />
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">
              1
            </span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Exercise1;
