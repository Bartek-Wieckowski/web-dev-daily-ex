import { useState } from 'react';
import people from './people';

import Employees from './Employees';
import EmployeesAnswer from './EmployeesAnswer';
import UserText from './UserText';
import Form from './Form';
import Button from './Button';
import Container from './Container';
import ChatWindow from './ChatWindow';
import ChatHeader from './ChatHeader';
import EmployeesInfo from './EmployeesInfo';
import ChatMain from './ChatMain';

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
      <Container>
        {isOpen && (
          <ChatWindow>
            <ChatHeader>
              <Employees peopleEmployee={people} />
              <EmployeesInfo peopleEmployee={people} />
            </ChatHeader>

            <ChatMain>
              <EmployeesAnswer peopleAnswer={people} clickNum={clickNum} />
              {userAnsw.length > 0 && <UserText userAnsw={userAnsw} />}
            </ChatMain>
            <Form onAddItem={handleAddAnswer} />
          </ChatWindow>
        )}
        <Button
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleOpenMenuAndCounClick={handleOpenMenuAndCounClick}
          isTooltip={isTooltip}
          setIsTooltip={setIsTooltip}
        />
      </Container>
    </section>
  );
};

export default Exercise1;
