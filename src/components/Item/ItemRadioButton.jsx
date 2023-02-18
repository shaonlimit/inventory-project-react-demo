import React from 'react';

const ItemRadioButton = ({ type, name, id, htmlFor, labelText }) => {
  return (
    <div>
      <input type={type} name={name} id={id} />
      <label htmlFor={htmlFor}>{labelText}</label>
    </div>
  );
};

export default ItemRadioButton;
