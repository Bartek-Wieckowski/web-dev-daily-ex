import { useState } from 'react';
import { useForm } from './FormContext';

const FormSignup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    rePassword: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    firstname: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { dispatch } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrorsOptions = {
      firstname: formData.firstname === '' ? 'This field is required' : '',
      email:
        formData.email === '' || !formData.email.includes('@')
          ? 'This field is required and must have @'
          : '',
      password: formData.password === '' ? 'This field is required' : '',
      rePassword:
        formData.rePassword === '' || formData.rePassword !== formData.password
          ? 'Passwords do not match'
          : '',
    };

    setValidationErrors(validationErrorsOptions);

    if (Object.values(validationErrorsOptions).some((error) => error !== '')) {
      setIsSubmitting(false);
      return;
    } else {
      setIsSubmitting(true);

      const encodedPassword = btoa(formData.password);
      const encodedRePassword = btoa(formData.rePassword);

      const registerUser = {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: encodedPassword,
        rePassword: encodedRePassword,
      };

      await new Promise((resolve) => setTimeout(resolve, 2000));

      localStorage.setItem('user', JSON.stringify(registerUser));
      dispatch({ type: 'user/registered', payload: registerUser });

      dispatch({ type: 'loginTab/actived' });

      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rePassword: '',
      });
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="flex items-center justify-between w-[80%] gap-4 mx-auto mb-6">
        <input
          type="text"
          id="firstname"
          name="firstname"
          className={`block w-[50%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white ${
            validationErrors.firstname ? 'border-rose-400 border' : ''
          }`}
          placeholder="Firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="block w-[50%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
          placeholder="Lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        ></input>
      </div>
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
        className={`block w-[80%] mx-auto mt-6 px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white ${
          validationErrors.password ? 'border-rose-400 border' : ''
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
      <input
        type="password"
        id="re-password"
        name="rePassword"
        className={`block w-[80%] mx-auto mt-6 px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white ${
          validationErrors.rePassword ? 'border-rose-400 border' : ''
        }`}
        placeholder="Repeat password"
        value={formData.rePassword}
        onChange={handleInputChange}
      ></input>
      {validationErrors.rePassword && (
        <div className="text-rose-400 text-sm text-center">
          {validationErrors.rePassword}
        </div>
      )}

      <div className="w-[80%] mx-auto mt-6">
        <button
          type="submit"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          {!isSubmitting ? 'Sign Up!' : 'Waiting...'}
        </button>
      </div>
    </form>
  );
};

export default FormSignup;
