import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Email from '../components/Email';
import Password from '../components/Password';
import axios from 'axios';
const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <Email value={email} onChange={setEmail} />
        <Password value={password} onChange={setPassword} />
        <button type="submit">Submit</button>
        <p>
          <Link to="/forget-password">Forget Password?</Link>
        </p>
        <p>
          Don't have an account? <Link to="/signup">Create one</Link>.
        </p>
      </form>
    </div>
  );
};

export default LogIn;
