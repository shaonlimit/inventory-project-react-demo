import React from 'react';
import Address from './Address';
import ContactPerson from './ContactPerson';
import OtherDetails from './OtherDetails';
import Remarks from './Remarks';
import VendorNavbar from './VendorNavbar';
import VendorTop from './VendorTop';

const Vendor = () => {
  return (
    <div className='vendor'>
      <h3 className='text-4xl font-medium shadow mb-4'>New Vendor</h3>
      <form action=''>
        <VendorTop />
      </form>
      <VendorNavbar />
      <OtherDetails />
      <Address />
      <ContactPerson />
      <Remarks />
    </div>
  );
};

export default Vendor;
