import { useState } from 'react';
import people from './people';

import Employees from './Employees';
import EmployeesAnswer from './EmployeesAnswer';
import UserText from './UserText';
import Form from './Form';
import Button from './Button';

const Exercise1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userAnsw, setUserAnsw] = useState([]);
  const [clickNum, setClickNum] = useState(0);
  const [isTooltip, setIsTooltip] = useState(false);

  const handleAddAnswer = (ans) => {
    setUserAnsw((userAnsw) => [...userAnsw, ans]);
  };

  const handleOpenMenuAndCounClick = () => {
    setIsOpen((prev) => !prev);
    setClickNum((prev) => prev + 1);
    setIsTooltip(false);
  };

  return (
    <section className="bg-white text-black">
      <div className="container mx-auto flex justify-center items-center min-h-screen w-full gap-x-2">
        {isOpen && (
          <div className="m-w-[350px] h-[400px] bg-slate-800 rounded-t-xl">
            <header className="flex items-center justify-between px-4 gap-4 rounded-xl ex1-bg-header py-5">
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
                <EmployeesAnswer peopleAnswer={people} clickNum={clickNum} />
                {userAnsw.length > 0 && <UserText userAnsw={userAnsw} />}
              </div>
              <Form onAddItem={handleAddAnswer} />
            </div>
          </div>
        )}
        <Button
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleOpenMenuAndCounClick={handleOpenMenuAndCounClick}
          isTooltip={isTooltip}
          setIsTooltip={setIsTooltip}
        />
      </div>
    </section>
  );
};

export default Exercise1;
