import React, { useState } from 'react';

const Email = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const email = e.target.value;
    if (!validateEmail(email)) {
      setError('Invalid email format');
    } else {
      setError('');
    }
    onChange(email);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div>
      <label>Email:</label>
      <input required type="email" value={value} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Email;
