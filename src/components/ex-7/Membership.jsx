import React from 'react';
import PriceMembership from './PriceMembership';

const Membership = ({ details }) => {
  const {
    id,
    title,
    details: detailsText,
    options,
    specialBadge,
    specialBadgeText,
  } = details;
  return (
    <div
      className={`bg-white shadow-2xl rounded-lg my-4 relative ${
        specialBadge ? 'pt-10 pb-4 px-4' : 'p-4'
      }`}
    >
      {specialBadge && (
        <div className="absolute left-0 top-0 max-w-[150px] bg-pink-900 text-white px-4 py-1 rounded-md capitalize">
          {specialBadgeText}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="basis-[600px] flex flex-col">
          <h2 className="text-md text-black">{title}</h2>
          <p className="text-black text-sm max-width">{detailsText}</p>
        </div>
        <div className="bg-teal-200 basis-[200px]">
          <PriceMembership options={options} />
        </div>
      </div>
    </div>
  );
};

export default Membership;
