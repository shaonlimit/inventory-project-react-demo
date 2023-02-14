import React from 'react';
import ContactPerson from '../Vendor/ContactPerson';
import InvoiceTop from './InvoiceTop';
import TermsConditions from './TermsConditions';
import TotalBill from './TotalBill';

const Invoice = () => {
  const invoiceInputList = [
    { label: 'Customer Name', type: 'text' },
    { label: 'Invoice#', type: 'text' },
    { label: 'Order Number', type: 'text' },
    { label: 'Invoice Date', type: 'date' },
    {
      label: 'Invoice Date',
      type: 'date',
    },
    {
      label: 'Terms',
      option: [
        { title: 'Net 15' },
        { title: 'Net 30' },
        { title: 'Net 45' },
        { title: 'Net 60' },
        { title: 'Due on receipt' },
      ],
    },
    { label: 'Due Date', type: 'date' },
    { label: 'Sales Person', type: 'text' },
  ];
  const tableRowData = [
    { title: 'Item Details' },
    { title: 'Quantity' },
    { title: 'Rate' },
    { title: 'Discount' },
    { title: 'Tax' },
    { title: 'Amount' },
  ];
  return (
    <>
      <div>
        <h1 className='text-3xl shadow font-medium'>New Invoice</h1>
      </div>
      <InvoiceTop invoiceInputList={invoiceInputList} />
      <ContactPerson
        tableRowData={tableRowData}
        buttonText='Add more products'
      />
      <TotalBill />
      <TermsConditions />
      <button className='bg-blue-700 text-white py-1 px-2 rounded'>
        Save and Send
      </button>
    </>
  );
};

export default Invoice;
