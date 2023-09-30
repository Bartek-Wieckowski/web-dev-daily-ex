import { useState } from 'react';
import { gear } from '../../assets/ex-5';
import SettingsForm from './SettingsForm';

const Exercise5 = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [userChoice, setUserChoice] = useState([]);

  const splitDate = userChoice[0] ? userChoice[0].split('-') : [];
  const splitTime = userChoice[1] ? userChoice[1].split(':') : [];

  const userValues = [...splitDate, ...splitTime];

  const handleToggleSettings = () => {
    setIsOpenSettings((prev) => !prev);
  };

  const onSettingsUserSubmit = (value) => {
    setUserChoice(value);
  };

  console.log(userValues);
  return (
    <section className="bg-blue-100 text-black flex flex-col justify-center ">
      <div className="bg-[url('./assets/ex-5/bgex5.jpg')] bg-cover bg-center w-full no_scroll relative">
        <button
          className="absolute right-10 top-10 w-[45px] h-[45px] cursor-pointer"
          onClick={() => handleToggleSettings()}
        >
          <img src={gear} alt="" />
        </button>
        {isOpenSettings && (
          <SettingsForm
            isOpen={isOpenSettings}
            onSettingsUserSubmit={onSettingsUserSubmit}
          />
        )}
        <div className="flex items-center justify-center max-w-[800px] mx-auto  h-1/2 no_scroll">
          <h1 className="text-5xl text-gray-300 font-medium leading-normal">
            Until new beginnings
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Exercise5;
