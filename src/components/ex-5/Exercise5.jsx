import { useState } from 'react';
import { gear } from '../../assets/ex-5';
import SettingsForm from './SettingsForm';
const Exercise5 = () => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const handleClickOpen = () => {
    setIsOpenSettings((prev) => !prev);
  };

  return (
    <section className="bg-blue-100 text-black flex flex-col justify-center ">
      <div className="bg-[url('./assets/ex-5/bgex5.jpg')] bg-cover bg-center w-full no_scroll relative">
        <button
          className="absolute right-10 top-10 w-[45px] h-[45px] cursor-pointer"
          onClick={() => handleClickOpen()}
        >
          <img src={gear} alt="" />
        </button>
        {isOpenSettings && <SettingsForm isOpen={isOpenSettings} />}
        <div className="flex items-center justify-center max-w-[800px] mx-auto  h-1/2"></div>
      </div>
    </section>
  );
};

export default Exercise5;
