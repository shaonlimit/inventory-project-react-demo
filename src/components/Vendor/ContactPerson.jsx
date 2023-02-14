import React, { useState } from 'react';

const ContactPerson = ({ tableRowData, buttonText }) => {
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
            {tableRowData.map((item, index) => (
              <td key={index}>{item.title}</td>
            ))}
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
      <button onClick={handleTableRow}>{buttonText}</button>
    </>
  );
};

export default ContactPerson;
