import React from 'react';
import { useForm } from './FormContext';

const UserSimplePanel = () => {
  const { dispatch } = useForm();
  const handleLogout = () => {
    dispatch({ type: 'user/logouted' });
  };

  const { user } = useForm();
  return (
    <section className="bg-blue-100 text-black flex flex-col justify-center no_scroll">
      <div className="container bg-slate-700 rounded-md shadow-lg">
        <div className="flex flex-col items-center justify-center gap-4 w-[250px] h-[250px] mx-auto">
          <p className="text-4xl text-teal-400 text-center">
            Welcome {user.firstname.toUpperCase()}
          </p>
          <button
            type="button"
            onClick={() => handleLogout()}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Log Out!
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserSimplePanel;