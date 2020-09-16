import React from 'react';

const Input = ({ name, placeholder, value, onChange }) => {
  return <input name={name} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
