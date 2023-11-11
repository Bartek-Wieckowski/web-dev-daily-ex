import React from 'react';

const FormSignup = () => {
  return (
    <form>
      <div className="flex items-center justify-between w-[80%] gap-4 mx-auto mb-6">
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="block w-[50%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
          placeholder="Firstname"
          required
        ></input>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="block w-[50%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
          placeholder="Lastname"
          required
        ></input>
      </div>
      <input
        type="email"
        id="email"
        name="email"
        className="block w-[80%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
        placeholder="Email"
        required
      ></input>
      <input
        type="password"
        id="password"
        name="password"
        className="block w-[80%] mx-auto mt-6 px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
        placeholder="Password"
        required
      ></input>
      <input
        type="password"
        id="re-password"
        name="re-password"
        className="block w-[80%] mx-auto mt-6 px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
        placeholder="Repeat password"
        required
      ></input>
      <div className="w-[80%] mx-auto mt-6">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Sign Up!
        </button>
      </div>
    </form>
  );
};

export default FormSignup;
