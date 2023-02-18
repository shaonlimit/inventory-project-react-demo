import React from 'react';
import ItemInputButton from './ItemInputButton';
import ItemRadioButton from './ItemRadioButton';

const CreateItemGroup = () => {
  return (
    <div className='item-group'>
      <div className='grid grid-cols-4'>
        <label htmlFor=''>Type</label>

        <ItemRadioButton
          type={'radio'}
          name='sameName'
          id={'goods'}
          htmlFor='goods'
          labelText={'Goods'}
        />
        
        <ItemRadioButton
          type={'radio'}
          name='sameName'
          id={'services'}
          htmlFor='services'
          labelText={'Services'}
        />
      </div>
      <div className='item-group-name grid grid-cols-4'>
        <ItemInputButton labelText={'Item Group Name'} type='text' />
      </div>

      <div className='description grid grid-cols-4'>
        <ItemInputButton labelText={'Description'} type='text' textarea />
      </div>

      <div className='unit-tax grid grid-cols-4'>
        <div className='unit'>
          <ItemInputButton type={'text'} labelText='Unit' />
        </div>

        <div className='tax'>
          <ItemInputButton type={'text'} labelText='Tax' />
        </div>
      </div>

      <div className='unit-tax grid grid-cols-4'>
        <div className='unit'>
          <ItemInputButton type={'text'} labelText='Manufacturer' />
        </div>

        <div className='tax'>
          <ItemInputButton type={'text'} labelText='Brand' />
        </div>
      </div>

      <div className='grid grid-cols-4'>
        <label htmlFor=''>Tax Preference</label>

        <ItemRadioButton
          type={'radio'}
          name='sameName'
          id={'taxable'}
          htmlFor='taxable'
          labelText={'Taxable'}
        />
        <ItemRadioButton
          type={'radio'}
          name='sameName'
          id={'non-taxable'}
          htmlFor='non-taxable'
          labelText={'Non-Taxable'}
        />
      </div>
    </div>
  );
};

export default CreateItemGroup;
