import React from 'react';

const VendorTop = () => {
  const options = [
    { value: 'Mr.', label: 'Mr.' },
    { value: 'Mrs.', label: 'Mrs.' },
    { value: 'Ms.', label: 'Ms.' },
    { value: 'Miss.', label: 'Miss.' },
    { value: 'Dr.', label: 'Dr.' },
  ];
  const inputList = [
    { labelText: 'Company Name', type: 'text' },
    { labelText: 'Vendor Display Name', type: 'text' },
    { labelText: 'Vendor Email', type: 'email' },
    {
      labelText: 'Vendor Phone',
      type: 'text',
      input1: 'Work Phone',
      input2: 'Mobile',
    },
    { labelText: 'Website', type: 'text' },
  ];
  return (
    <div className='grid grid-flow-row gap-5'>
      <div className='primary-contact grid grid-cols-4 gap-10'>
        <label htmlFor=''>Primary Contact</label>
        <select name='' id=''>
          {options.map((item, index) => (
            <option key={index}>{item.label}</option>
          ))}
        </select>
        <input
          type='text'
          placeholder='First Name'
          className='border  p-1 focus:outline-1 outline-slate-400'
        />
        <input
          type='text'
          placeholder='Last Name'
          className='border   p-1 focus:outline-1 outline-slate-400'
        />
      </div>
      {inputList.map((item, index) =>
        item.input2 ? (
          <div key={index} className='grid grid-cols-4 gap-10'>
            <label htmlFor=''>{item.labelText}</label>
            <input
              type={item.type}
              placeholder={item.input1}
              className='border  p-1 focus:outline-1 outline-slate-400'
            />
            <input
              type={item.type}
              placeholder={item.input2}
              className='border  p-1 focus:outline-1 outline-slate-400'
            />
          </div>
        ) : (
          <div key={index} className='grid grid-cols-4 gap-10'>
            <label htmlFor=''>{item.labelText}</label>
            <input
              type={item.type}
              className='border  p-1 focus:outline-1 outline-slate-400 col-span-2'
            />
          </div>
        )
      )}
    </div>
  );
};

export default VendorTop;
