import React, { useState } from 'react';
import { notify } from '../../helpers';
import { useForm } from './FormContext';

const FormLogin = () => {
  const { dispatch } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShowPass = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { password, email } = JSON.parse(storedUser);
      const decodedStoredPassword = atob(password);
      notify(
        true,
        'password-forgot',
        `Your actual password:
        ${decodedStoredPassword} and you pass this e-mail 
        ${email} `
      );
    }
  };

  const handleInputCheck = () => {
    setRememberMe((prev) => !prev);
  };

  const rememberMeActive = () => {
    const storedUserString = localStorage.getItem('user');
    if (storedUserString) {
      const storedUser = JSON.parse(storedUserString);
      storedUser.rememberMe = rememberMe;
      localStorage.setItem('user', JSON.stringify(storedUser));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');

    const validationErrorsOptions = {
      email:
        formData.email === '' || !formData.email.includes('@')
          ? 'This field is required and must have @'
          : '',
      password: formData.password === '' ? 'This field is required' : '',
    };

    setValidationErrors(validationErrorsOptions);

    if (Object.values(validationErrorsOptions).some((error) => error !== '')) {
      setIsSubmitting(false);
      notify(true, 'registered-reject', 'Something went wrong!');
      return;
    } else {
      setIsSubmitting(true);
      if (storedUser) {
        const { email, password: storedPassword } = JSON.parse(storedUser);
        if (email === formData.email) {
          const decodedStoredPassword = atob(storedPassword);
          if (decodedStoredPassword === formData.password) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch({ type: 'user/logged' });
            dispatch({ type: 'user/remembered', payload: rememberMe });
            rememberMeActive();
            notify(true, 'login-success', "You're logged!");

            setFormData({
              email: '',
              password: '',
            });
            setIsSubmitting(false);
          } else {
            notify(true, 'login-reject', 'Wrong password');
          }
        } else {
          notify(
            true,
            'login-reject',
            "This email don't exist in our Database"
          );
        }
      } else {
        notify(true, 'login-reject', "We don't have user in our Database");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <input
        type="email"
        id="email"
        name="email"
        className={`block w-[80%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white ${
          validationErrors.email ? 'border-rose-400 border' : ''
        }`}
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      ></input>
      {validationErrors.email && (
        <div className="text-rose-400 text-sm text-center">
          {validationErrors.email}
        </div>
      )}
      <input
        type="password"
        id="password"
        name="password"
        className={`block w-[80%] mx-auto mt-6 px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white  ${
          validationErrors.email ? 'border-rose-400 border' : ''
        }`}
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      ></input>
      {validationErrors.password && (
        <div className="text-rose-400 text-sm text-center">
          {validationErrors.password}
        </div>
      )}
      <div className="flex items-center justify-between max-w-[300px] mx-auto mt-6">
        <label htmlFor="remember">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="inline-block mr-6"
            checked={rememberMe}
            onChange={handleInputCheck}
          ></input>
          Remember Me
        </label>
        <button
          type="button"
          className="text-purple-400"
          onClick={() => handleShowPass()}
        >
          Forgot Password
        </button>
      </div>
      <div className="w-[80%] mx-auto mt-6">
        <button
          type="submit"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {!isSubmitting ? 'Log In!' : 'Checking...'}
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
