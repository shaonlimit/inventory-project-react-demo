import React, { useState } from 'react';

const ContactPerson = () => {
  const [tableRow, setTableRow] = useState([{}]);
  const handleTableRow = () => {
    setTableRow([...tableRow, {}]);
  };

  const removeRow = (index) => {
    setTableRow(tableRow.filter((_, i) => i !== index));
  };

  return (
    <>
      <table className='w-full'>
        <thead>
          <tr>
            <td>Salutation</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email Address</td>
            <td>Work Phone</td>
            <td>Mobile</td>
          </tr>
        </thead>
        <tbody>
          {tableRow.map((item, index) => (
            <tr>
              <td>
                <input
                  type='text'
                  className='border  p-1 focus:outline-1 outline-slate-400'
                />
              </td>
              <td>
                <input
                  type='text'
                  className='border  p-1 focus:outline-1 outline-slate-400'
                />
              </td>
              <td>
                <input
                  type='text'
                  className='border  p-1 focus:outline-1 outline-slate-400'
                />
              </td>
              <td>
                <input
                  type='text'
                  className='border  p-1 focus:outline-1 outline-slate-400'
                />
              </td>
              <td>
                <input
                  type='text'
                  className='border  p-1 focus:outline-1 outline-slate-400'
                />
              </td>
              <td>
                <input
                  type='text'
                  className='border  p-1 focus:outline-1 outline-slate-400'
                />
              </td>
              <button onClick={() => removeRow(index)}>Remove</button>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleTableRow}>+ Add Contact Person</button>
    </>
  );
};

export default ContactPerson;
