import { useState } from 'react';

const Button = ({ onExpanded }) => {
  const [isAll, setIsAll] = useState(false);

  function showOrHide() {
    onExpanded(true);
    setIsAll((prev) => !prev);
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <button
        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => showOrHide()}
      >
        {isAll ? 'Collapse' : 'View all'}
      </button>
    </div>
  );
};

export default Button;
