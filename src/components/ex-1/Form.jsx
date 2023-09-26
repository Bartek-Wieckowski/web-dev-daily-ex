import { useState } from 'react';

const Form = ({ onAddItem }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const lastAnswer = value;
    onAddItem(lastAnswer);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-[80px] ex1-bg-input flex items-center rounded-xl px-6 -mt-2">
        <input
          type="text"
          className="border-2 border-purple-500 text-purple-500 w-full ex1-bg-input rounded-full p-2 placeholder:text-purple-500 placeholder:text-sm focus:outline-none focus:ring focus:ring-violet-300"
          placeholder="Type here"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </div>
    </form>
  );
};
export default Form;
