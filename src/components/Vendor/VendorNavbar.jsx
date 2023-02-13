import React from 'react';

const VendorNavbar = () => {
  const buttons = [
    { buttonText: 'Other details' },
    { buttonText: 'Address' },
    { buttonText: 'Contact Persons' },
    { buttonText: 'Custom Fields' },
    { buttonText: 'Reporting Tags' },
    { buttonText: 'Remarks' },
  ];
  return (
    <div className='vendor-navbar mt-4'>
      {buttons.map((item, index) => (
        <button key={index} className='bg-blue-500 text-white p-4 font-medium'>
          {item.buttonText}
        </button>
      ))}
    </div>
  );
};

export default VendorNavbar;
