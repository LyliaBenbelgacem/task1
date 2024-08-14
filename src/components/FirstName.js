import React, { useState } from 'react';

const FirstName = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const firstName = e.target.value;
    if (firstName.trim().length === 0) {
      setError('First name is required');
    } else {
      setError('');
    }
    onChange(firstName);
  };

  return (
    <div>
      <label>First Name:</label>
      <input required type="text" value={value} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FirstName;
