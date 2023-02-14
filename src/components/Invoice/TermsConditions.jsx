import React from 'react';

const TermsConditions = () => {
  return (
    <div className='terms-conditioins grid grid-cols-2'>
      <div className='terms'>
        <p>Terms & Conditions</p>
        <textarea
          name=''
          id=''
          cols='50'
          rows='10'
          className='border  p-1 focus:outline-1 outline-slate-400'
        ></textarea>
      </div>
      <div className='terms'>
        <p>Attach File(s) to Invoice</p>
        <input type='file' />
      </div>
    </div>
  );
};

export default TermsConditions;
