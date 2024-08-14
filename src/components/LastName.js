import React, { useState } from 'react';

const LastName = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const lastName = e.target.value;
    if (lastName.trim().length === 0) {
      setError('Last name is required');
    } else {
      setError('');
    }
    onChange(lastName);
  };

  return (
    <div>
      <label>Last Name:</label>
      <input required type="text" value={value} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LastName;
