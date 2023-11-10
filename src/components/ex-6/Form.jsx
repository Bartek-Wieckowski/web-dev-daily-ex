import React, { useState } from 'react';

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
    <div className="relative max-w-[500px] min-h-[25vh] mx-auto bg-slate-700 text-white">
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

      <form>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        ></input>
      </form>
    </div>
  );
};

export default Form;
