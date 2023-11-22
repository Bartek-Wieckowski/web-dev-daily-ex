// PriceMembership.jsx
import React from 'react';

const PriceMembership = ({ options, onOptionChange }) => {
  const { id, price, term } = options;
  return (
    <div className="flex flex-col gap-2 py-2 px-1">
      <label key={id}>
        <input
          type="radio"
          name={`membershipOption`}
          value={id}
          onChange={() => onOptionChange(id)}
        />
        ${price} / {term} months
      </label>
    </div>
  );
};

export default PriceMembership;
