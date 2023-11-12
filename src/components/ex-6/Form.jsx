import React, { useReducer } from 'react';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import formReducer, { initialState } from './FormReducer';

const Form = () => {
  const [{ loginTab, signupTab }, dispatch] = useReducer(
    formReducer,
    initialState
  );

  return (
    <div className="relative max-w-[500px] pt-10 pb-20 mx-auto bg-slate-700 text-white rounded-3xl">
      <div className="absolute -top-7 left-1/2 w-14 h-14 bg-teal-400 "></div>
      <div className="flex items-center justify-between max-w-[300px] py-10 mx-auto">
        <button
          onClick={() => dispatch({ type: 'loginTab/actived' })}
          className={`border-b-2  ${
            loginTab ? 'border-gray-100' : 'border-gray-500'
          }`}
        >
          Log in
        </button>
        <button
          onClick={() => dispatch({ type: 'signupTab/actived' })}
          className={`border-b-2  ${
            signupTab ? 'border-gray-100' : 'border-gray-500'
          }`}
        >
          Sign up
        </button>
      </div>

      {loginTab && <FormLogin />}
      {signupTab && <FormSignup />}
    </div>
  );
};

export default Form;
