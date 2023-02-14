import React from 'react';
import VendorTop from '../Vendor/VendorTop';
import VendorNavbar from '../Vendor/VendorNavbar';
import OtherDetails from '../Vendor/OtherDetails';
import Address from '../Vendor/Address';
import ContactPerson from '../Vendor/ContactPerson';
import Remarks from '../Vendor/Remarks';

const Customer = () => {
  const tableRowData = [
    { title: 'Salutation' },
    { title: 'First Name' },
    { title: 'Last Name' },
    { title: 'Email Address' },
    { title: 'Work Phone' },
    { title: 'Mobile' },
  ];
  return (
    <div className='Customer'>
      <h3 className='text-4xl font-medium shadow mb-4'>New Customer</h3>
      <form action=''>
        <div className='customer-type-container grid grid-cols-4 mb-4'>
          <label htmlFor=''>Customer Type</label>
          <div className='flex gap-2'>
            <input type='radio' name='customer-type' id='business' />
            <label htmlFor='business' className='mr-2'>
              Business
            </label>
            <input type='radio' name='customer-type' id='individual' />
            <label htmlFor='individual'>Individual</label>
          </div>
        </div>
        <VendorTop />
      </form>
      <VendorNavbar />
      <OtherDetails />
      <Address />
      <ContactPerson
        tableRowData={tableRowData}
        buttonText='+ Add Contact Person'
      />
      <Remarks />
    </div>
  );
};

export default Customer;
