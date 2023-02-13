import React from 'react';

const BillingAddress = ({ inputList }) => {
  return (
    <form action='' className='grid grid-flow-row gap-5 mt-4'>
      <p className='text-2xl font-medium'>BILLING ADDRESS</p>
      {inputList.map((item, index) => (
        <div key={index} className='grid grid-cols-4 gap-10'>
          <label htmlFor=''>{item.labelText}</label>
          <input
            type={item.type}
            className='border col-span-2  p-1 focus:outline-1 outline-slate-400'
          />
        </div>
      ))}
    </form>
  );
};

export default BillingAddress;
