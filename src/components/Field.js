import React from 'react';

const Field = ({ id, label, onChange, onKeyDown, placeholder, type, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input className="form-control" id={id} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} type={type} required={required} />
      {/* <span>{errorMessage}</span> */}
    </div>
  );
};

export default Field;
