import { useState } from 'react';
import Button from './Button';

const Wrapper = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className="container mx-auto p-3">
      <div className="w-[90%] bg-white rounded-3xl mx-auto p-8 overflow-hidden relative">
        <h3 className="font-medium text-center text-lg">Recently added</h3>
        <p className="font-normal text-center text-sm mt-3">
          The latest tools that help you and your team build software
          better,together.
        </p>
        <div
          className={`pt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6  xl:gap-12 ${
            isExpanded
              ? 'ex4-expand ex4-transition'
              : 'max-h-[252px] ex4-transition overflow-hidden'
          }`}
        >
          {children}
        </div>
        <div className={`${!isExpanded ? 'ex4-blur' : ''}`}></div>
        <Button onExpanded={handleClick} />
      </div>
    </div>
  );
};

export default Wrapper;
