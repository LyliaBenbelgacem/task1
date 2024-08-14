import React, { useState } from 'react';

const Password = ({ value, onChange }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
    } else {
      setError('');
    }
    onChange(password);
  };

  return (
    <div>
      <label>Password:</label>
      <input required type="password" value={value} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Password;
