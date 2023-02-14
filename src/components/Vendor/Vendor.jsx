import React from 'react';
import Address from './Address';
import ContactPerson from './ContactPerson';
import OtherDetails from './OtherDetails';
import Remarks from './Remarks';
import VendorNavbar from './VendorNavbar';
import VendorTop from './VendorTop';

const Vendor = () => {
  const tableRowData = [
    { title: 'Salutation' },
    { title: 'First Name' },
    { title: 'Last Name' },
    { title: 'Email Address' },
    { title: 'Work Phone' },
    { title: 'Mobile' },
  ];
  return (
    <div className='vendor'>
      <h3 className='text-4xl font-medium shadow mb-4'>New Vendor</h3>
      <form action=''>
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

export default Vendor;
