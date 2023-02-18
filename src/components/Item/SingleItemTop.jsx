import React from 'react';
import ItemInputButton from './ItemInputButton';
import ItemRadioButton from './ItemRadioButton';

const SingleItemTop = ({ inputOption }) => {
  return (
    <div>
      <h1>New Item</h1>
      <hr />
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

      <div className=' grid grid-cols-4'>
        <ItemInputButton labelText={'Name'} type='text' />
      </div>

      <div className=' grid grid-cols-4'>
        <ItemInputButton labelText={'SKU'} type='text' />
      </div>
      <div className=' grid grid-cols-4'>
        {inputOption.map((item, index) => (
          <div key={index}>
            <label htmlFor=''>{item.labelText}</label>
            <select name='' id='' className='col-span-2 border p-1'>
              {item.option.map((subItem, subIndex) => (
                <option key={subIndex}>{subItem.optionText}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className='dimension'>
        <label htmlFor=''>Dimension(cm)</label>
        <div className='grid grid-cols-3'>
          <div className='length'>
            <ItemInputButton labelText={'Length'} type='text' />
          </div>
          <div className='width'>
            <ItemInputButton labelText={'Width'} type='text' />
          </div>
          <div className='height'>
            <ItemInputButton labelText={'Height'} type='text' />
          </div>
        </div>
      </div>
      <div className='menufacturer'>
        <ItemInputButton labelText={'Menugacturer'} type='text' />
      </div>
      <div className='weight'>
        <ItemInputButton labelText={'Weight(kg)'} type='text' />
      </div>
      <div className='upc'>
        <ItemInputButton labelText={'UPC'} type='text' />
      </div>
      <div className='ean'>
        <ItemInputButton labelText={'EAN'} type='text' />
      </div>
      <div className='brand'>
        <ItemInputButton labelText={'Brand'} type='text' />
      </div>
      <div className='mpn'>
        <ItemInputButton labelText={'MPN'} type='text' />
      </div>
      <div className='isbn'>
        <ItemInputButton labelText={'ISBN'} type='text' />
      </div>
    </div>
  );
};

export default SingleItemTop;
