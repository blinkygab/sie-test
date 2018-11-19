import React from 'react';
import { Link } from "react-router-dom";

const Company = ({ id, name, address, revenue, phone }) => {
  return (
    <div className="card company">
      <div className="card-body">
        <div>{name}</div>
        <div>{address}</div>
        <div>{revenue}</div>
        <div>{phone}</div>
        <Link to={`/details/${id}`}>See Details</Link>
      </div>
    </div>
  );
};

export default Company;
