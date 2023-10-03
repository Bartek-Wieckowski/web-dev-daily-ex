import { useState } from 'react';

const SettingsForm = ({ onSettingsUserSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (date && time) {
      onSettingsUserSubmit([date, time]);
      localStorage.removeItem('countDownDate');
    } else {
      alert('Both date and time fields are required.');
    }
  };

  return (
    <div className="bg-transparent max-w-md rounded-3xl p-6 fixed top-40  right-10 border border-1">
      <form>
        <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Date
          </label>
          <input
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Time
          </label>
          <input
            type="time"
            id="time"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <button
            onClick={() => handleSubmit()}
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Set your countdown!
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;
