import { useRef, useState } from 'react';
import { useForm } from './FormContext';

const FormSignup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState([]);
  const { dispatch } = useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedPassword = btoa(formData.password);
    const encodedRePassword = btoa(formData.rePassword);

    const registerUser = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: encodedPassword,
      rePassword: encodedRePassword,
    };

    localStorage.setItem('user', JSON.stringify(registerUser));

    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      rePassword: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="flex items-center justify-between w-[80%] gap-4 mx-auto mb-6">
        <input
          type="text"
          id="firstname"
          name="firstname"
          className={`block w-[50%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white`}
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
        className="block w-[80%] mx-auto px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      ></input>
      <input
        type="password"
        id="password"
        name="password"
        className="block w-[80%] mx-auto mt-6 px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      ></input>
      <input
        type="password"
        id="re-password"
        name="rePassword"
        className="block w-[80%] mx-auto mt-6 px-4 py-3 ps-10 text-sm rounded-2xl bg-gray-600 text-white "
        placeholder="Repeat password"
        value={formData.rePassword}
        onChange={handleInputChange}
      ></input>
      <div className="w-[80%] mx-auto mt-6">
        <button
          type="submit"
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Sign Up!
        </button>
      </div>
    </form>
  );
};

export default FormSignup;
