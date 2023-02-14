import React from 'react';

const InvoiceTop = ({ invoiceInputList }) => {
  return (
    <form action='' className='mt-4 grid grid-flow-row gap-5'>
      {invoiceInputList.map((item, index) =>
        item.option ? (
          <div>
            <div className=' grid grid-cols-4 gap-10' key={index}>
              <label htmlFor=''>{item.label}</label>
              <select
                name=''
                id=''
                className='border  p-1 focus:outline-1 outline-slate-400'
              >
                {item.option.map((option, index) => (
                  <option key={index}>{option.title}</option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div key={index} className=' grid grid-cols-4 gap-10'>
            <label htmlFor=''>{item.label}</label>
            <input
              type={item.type}
              className='border  p-1 focus:outline-1 outline-slate-400 col-span-2'
            />
          </div>
        )
      )}
    </form>
  );
};

export default InvoiceTop;
