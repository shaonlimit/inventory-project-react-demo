import React from 'react';

const SalesPurchaseInformation = ({ endpoint, heading }) => {
  return (
    <div>
      <h2>{heading}</h2>
      <form action='' className='grid grid-flow-row gap-5 mt-4'>
        {endpoint.map((item, index) =>
          item.option ? (
            <div key={index} className='grid grid-cols-4 gap-10'>
              <label>{item.labelText}</label>
              <select name='' id='' className='col-span-2 border p-1'>
                {item.option.map((subItem, subIndex) => (
                  <option key={subIndex}>{subItem.optionText}</option>
                ))}
              </select>
            </div>
          ) : (
            <div key={index} className='grid grid-cols-4 gap-10'>
              <label htmlFor=''>{item.labelText}</label>
              <input
                type={item.type}
                className='border col-span-2  p-1 focus:outline-1 outline-slate-400'
              />
            </div>
          )
        )}
      </form>
    </div>
  );
};

export default SalesPurchaseInformation;
