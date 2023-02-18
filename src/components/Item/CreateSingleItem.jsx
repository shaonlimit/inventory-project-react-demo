import React from 'react';

import SalesPurchaseInformation from './SalesPurchaseInformation';
import SingleItemTop from './SingleItemTop';

const CreateSingleItem = () => {
  const inputOption = [
    {
      labelText: 'Unit',
      option: [
        { optionText: 'DOZEN' },
        { optionText: 'BOX' },
        { optionText: 'GRAMS' },
        { optionText: 'KILOGRAMS' },
        { optionText: 'METERS' },
        { optionText: 'TABLETS' },
        { optionText: 'UNITS' },
        { optionText: 'PIECES' },
        { optionText: 'PAIRS' },
      ],
    },
  ];

  const salesInformation = [
    { labelText: 'Selling Price', type: 'number' },
    {
      labelText: 'Account',
      option: [
        { optionText: 'Sales' },
        { optionText: 'Discount' },
        { optionText: 'General Income' },
        { optionText: 'Interest Income' },
        { optionText: 'Late Fee Income' },
        { optionText: 'Other Charges' },
        { optionText: 'Shipping Charge' },
      ],
    },
    { labelText: 'Description', type: 'text' },
    {
      labelText: 'Tax',
      option: [
        { optionText: 'Tax 1 [5%]' },
        { optionText: 'Tax 2 [10%]' },
        { optionText: 'Overseas tax 1 [10%]' },
        { optionText: 'Overseas tax 2 [15%]' },
        { optionText: 'Compund tax 1 [10%]' },
        { optionText: 'Compund tax 1 [15%]' },
      ],
    },
  ];
  const purchaseInformation = [
    { labelText: 'Cost Price', type: 'number' },
    {
      labelText: 'Account',
      option: [
        { optionText: 'Cost of Goods Sold' },
        { optionText: 'Advertising and Marketing' },
        { optionText: 'Automobile Expense' },
        { optionText: 'Bad Debt' },
        { optionText: 'Bank Fees and Charges' },
        { optionText: 'Consultant Expense' },
        { optionText: 'Credit Card Charges' },
        { optionText: 'Depriciation Expense' },
        { optionText: 'Depriciation Expense' },
        { optionText: 'IT and Internet Expenses' },
        { optionText: 'Janitorial Expense' },
        { optionText: 'Lodging' },
        { optionText: 'Meals and Entertainment' },
        { optionText: 'Office Supplies' },
        { optionText: 'Other Expenses' },
        { optionText: 'Postage' },
        { optionText: 'Printing and Stationery' },
        { optionText: 'Rent Expense' },
        { optionText: 'Repairs and Maintenance' },
        { optionText: 'Salaries and Employee Wages' },
        { optionText: 'Travel Expense' },
        { optionText: 'Uncategorized' },
        { optionText: 'Cost of Goods Sold' },
        { optionText: 'Furtinure and Equipment' },
      ],
    },
    { labelText: 'Description', type: 'text' },
  ];

  const trackInventory = [
    {
      labelText: 'Inventory Account',
      option: [{ optionText: 'Inventory Asset' }],
    },
    { labelText: 'Opening Stock', type: 'number' },

    { labelText: 'Reorder Point', type: 'number' },
    { labelText: 'Opening Stock Rate per Unit', type: 'number' },
    {
      labelText: 'Preferred Vendor',
      option: [
        { optionText: 'Vendor1' },
        { optionText: 'Vendor2' },
        { optionText: 'Vendor3' },
        { optionText: 'Vendor4' },
      ],
    },
  ];

  return (
    <div className='single-item'>
      <SingleItemTop inputOption={inputOption} />

      <hr />
      <div className='grid grid-col-2'>
        <SalesPurchaseInformation
          heading={'Sales Information'}
          endpoint={salesInformation}
        />
        <SalesPurchaseInformation
          heading='Purchase Information'
          endpoint={purchaseInformation}
        />
      </div>
      <hr />
      <div className='grid grid-col-2'>
        <SalesPurchaseInformation
          heading={'Track Inventory for this item'}
          endpoint={trackInventory}
        />
      </div>
    </div>
  );
};

export default CreateSingleItem;
