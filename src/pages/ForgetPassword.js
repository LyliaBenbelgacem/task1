import React, { useState } from 'react';
import Email from '../components/Email';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`A new password has been sent to ${email}`);
    } else {
      setMessage('Please enter a valid email address');
    }
  };

  return (
    <div className="forget-password-container">
      <form className="forget-password-card" onSubmit={handleSubmit}>
        <h2>Forget Password</h2>
        <Email value={email} onChange={setEmail} />
        <button type="submit">Send New Password</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ForgetPassword;
