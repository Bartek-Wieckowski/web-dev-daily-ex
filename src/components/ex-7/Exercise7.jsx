import React, { useState } from 'react';
import Membership from './Membership';
import { data } from './data';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../helpers';

const Exercise7 = () => {
  const [selectedOptions, setSelectedOptions] = useState(null);

  const onOptionChange = (option) => {
    setSelectedOptions(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notify(true, 'registered-success', `Selected Options: ${selectedOptions}`);
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-stone-100 text-black flex flex-col justify-center items-center mx-auto no_scroll">
        <div className="container px-6">
          <h1 className="text-lg text-center font-bold mb-6">
            Select a gift membership
          </h1>
          <form onSubmit={handleSubmit}>
            {data.map((m) => (
              <Membership
                details={m}
                key={m.id}
                onOptionChange={onOptionChange}
              />
            ))}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
              >
                Order now
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Exercise7;
