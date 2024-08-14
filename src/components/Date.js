import React from 'react';

const Date = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Date;
