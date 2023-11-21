import React from 'react';
import Membership from './Membership';
import { data } from './data';

const Exercise7 = () => {
  return (
    <section className="bg-stone-100 text-black flex flex-col justify-center items-center mx-auto no_scroll">
      <div className="container px-6">
        <h1 className="text-lg text-center font-bold mb-6">
          Select a gift membership
        </h1>
        {data.map((m) => (
          <Membership details={m} key={m.id} />
        ))}
      </div>
    </section>
  );
};

export default Exercise7;
