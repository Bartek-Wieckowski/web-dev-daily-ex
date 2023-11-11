import React, { useState } from 'react';
import FormLogin from './FormLogin';

const Form = () => {
  const [activeTabLogIn, setactiveTabLogIn] = useState(true);
  const [activeTabSignUp, setactiveTabSignUp] = useState(false);
  const handleLogIn = () => {
    setactiveTabSignUp(false);
    setactiveTabLogIn(true);
  };
  const handleSignUp = () => {
    setactiveTabLogIn(false);
    setactiveTabSignUp(true);
  };

  return (
    <div className="relative max-w-[500px] pt-10 pb-20 mx-auto bg-slate-700 text-white rounded-3xl">
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-teal-400"></div>
      <div className="flex items-center justify-between max-w-[300px] py-10 mx-auto">
        <button
          onClick={() => handleLogIn()}
          className={`border-b-2 border-gray-500 ${
            activeTabLogIn ? 'border-gray-100' : ''
          }`}
        >
          Log in
        </button>
        <button
          onClick={() => handleSignUp()}
          className={`border-b-2 border-gray-500 ${
            activeTabSignUp ? 'border-gray-100' : ''
          }`}
        >
          Sign up
        </button>
      </div>

      {activeTabLogIn && <FormLogin />}
    </div>
  );
};

export default Form;
