import React from 'react';

const FormLogin = () => {
  return (
    <form>
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
      <div className="flex items-center justify-between max-w-[300px] mx-auto mt-6">
        <label htmlFor="remember">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="inline-block mr-6"
          ></input>
          Remember Me
        </label>
        <button className="text-purple-400">Forgot Password</button>
      </div>
      <div className="w-[80%] mx-auto mt-6">
        <button
          type="button"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Log In!
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
