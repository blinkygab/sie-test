import React from 'react';

const Person = ({ name, address, thumb }) => {
  return (
    <div className="person-item">
      <img src={thumb} className="person-item-thumb float-left" alt={name} />
      {name}<br />
      {address}
    </div>
  );
};

export default Person;
