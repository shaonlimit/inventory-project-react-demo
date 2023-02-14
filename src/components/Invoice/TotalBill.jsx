import React from 'react';

const TotalBill = () => {
  return (
    <form action=''>
      <thead>
        <tr>
          <td>Sub Total:</td>
          <td>100</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Shipping Charges:
            <input
              type='text'
              className='border  p-1 focus:outline-1 outline-slate-400'
            />
          </td>
          <td>100</td>
        </tr>
        <tr>
          <td>
            Adjustment:
            <input
              type='text'
              className='border  p-1 focus:outline-1 outline-slate-400'
            />
          </td>
          <td>100</td>
        </tr>
        <tr>
          <td>
            Round Off:
            <input
              type='text'
              className='border  p-1 focus:outline-1 outline-slate-400'
            />
          </td>
          <td>100</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>100</td>
        </tr>
      </tbody>
    </form>
  );
};

export default TotalBill;
