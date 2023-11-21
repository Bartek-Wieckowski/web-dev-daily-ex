import React, { useState } from 'react';

const PriceMembership = ({ options }) => {
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handlePriceChange = (e) => {
    setSelectedPrice(Number(e.target.value));
  };

  return (
    <form className="flex flex-col gap-2 py-2 px-1">
      {options.map((o) => (
        <label key={o.id}>
          <input
            type="radio"
            value={o.id.toString()}
            checked={
              selectedPrice === null ? false : selectedPrice === Number(o.id)
            }
            onChange={handlePriceChange}
          />
          ${o.price} / {o.term} months
        </label>
      ))}
    </form>
  );
};

export default PriceMembership;
