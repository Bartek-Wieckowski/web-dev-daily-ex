import { useState } from 'react';
import { aprv, unaprv } from '../../assets/ex-4';

const Card = (card) => {
  const { imgSrc, title, description, verified: status } = card;
  const [isTooltip, setIsTooltip] = useState(false);

  function show() {
    setIsTooltip(true);
  }
  function hide() {
    setIsTooltip(false);
  }

  return (
    <div className="grid grid-col sm:grid-cols-[100px,1fr]">
      <img
        src={imgSrc}
        alt={title}
        className="col-span-1 w-[80px] h-[80px] mx-auto rounded-full"
      />
      <div className="relative flex flex-col gap-y-3 max-w-[80%] mx-auto sm:mr-auto sm:ml-0 text-center sm:text-left items-center sm:items-start">
        <div className="flex gap-x-3 items-center">
          <h4 className="font-medium">{title}</h4>
          {status && (
            <>
              <span
                className="cursor-pointer"
                onMouseEnter={() => show()}
                onMouseLeave={() => hide()}
              >
                <img src={aprv} alt="" width={25} height={25} />
              </span>
              <div
                role="tooltip"
                className={`absolute -top-6 left-28 z-10  inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm  dark:bg-gray-700 ${
                  isTooltip ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                Verified
              </div>
            </>
          )}
          {!status && (
            <>
              <span
                className="cursor-pointer"
                onMouseEnter={() => show()}
                onMouseLeave={() => hide()}
              >
                <img src={unaprv} alt="" width={25} height={25} />
              </span>
              <div
                role="tooltip"
                className={`absolute -top-6 left-28 z-10  inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm  dark:bg-gray-700 ${
                  isTooltip ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                Unconfirmed
              </div>
            </>
          )}
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
