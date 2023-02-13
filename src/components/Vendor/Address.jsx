import React from 'react';
import BillingAddress from './BillingAddress';
import ShippingAddress from './ShippingAddress';

const Address = () => {
  const inputList = [
    { labelText: 'Attention', type: 'text' },
    { labelText: 'Country', type: 'text' },
    { labelText: 'City', type: 'text' },
    { labelText: 'State', type: 'text' },
    { labelText: 'Zipcode', type: 'text' },
    { labelText: 'Phone', type: 'text' },
    { labelText: 'Fax', type: 'text' },
  ];
  return (
    <div className='address'>
      <BillingAddress inputList={inputList} />
      <ShippingAddress inputList={inputList} />
    </div>
  );
};

export default Address;
