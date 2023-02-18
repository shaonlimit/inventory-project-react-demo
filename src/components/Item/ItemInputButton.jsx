import React from 'react';

const ItemInputButton = ({ labelText, type, textarea }) => {
  return (
    <>
      {textarea ? (
        <>
          <label htmlFor=''>{labelText}</label>
          <textarea
            type={type}
            className='border col-span-2  p-1 focus:outline-1 outline-slate-400'
          />
        </>
      ) : (
        <>
          <>
            <label htmlFor=''>{labelText}</label>
            <input
              type={type}
              className='border col-span-2  p-1 focus:outline-1 outline-slate-400'
            />
          </>
        </>
      )}
    </>
  );
};

export default ItemInputButton;
