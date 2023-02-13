import React from 'react';

const OtherDetails = () => {
  const inputList = [
    {
      labelText: 'Currency',
      options: [{ optionText: 'Taka' }, { optionText: 'US Doller' }],
    },
    {
      labelText: 'Payment Terms',
      options: [
        { optionText: 'Net 30' },
        { optionText: 'Due end of the month' },
        { optionText: 'Net 60' },
        { optionText: 'Due on receipt' },
      ],
    },
    {
      labelText: 'Price List',
      options: [
        { optionText: 'Pricebook2 [66% Markdown]' },
        { optionText: 'Pricebook3 [97% Markup]' },
      ],
    },
    {
      labelText: 'Facebook',
      type: 'text',
    },
    {
      labelText: 'Twitter',
      type: 'text',
    },
  ];
  return (
    <form action='' className='grid grid-flow-row gap-5 mt-4'>
      {inputList.map((item, index) =>
        item.options ? (
          <div key={index} className='grid grid-cols-4 gap-10'>
            <label>{item.labelText}</label>
            <select name='' id='' className='col-span-2 border p-1'>
              {item.options.map((subItem, subIndex) => (
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
  );
};

export default OtherDetails;
