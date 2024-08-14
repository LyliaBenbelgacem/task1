import React, { useState } from 'react';
import FirstName from '../components/FirstName';
import LastName from '../components/LastName';
import Email from '../components/Email';
import Password from '../components/Password';
import PhoneNumber from '../components/PhoneNumber';
import Gender from '../components/Gender';
import UsedBefore from '../components/UsedBefore';
import axios from 'axios';
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [isChecked, setIsChecked] = useState(false);
  const [post, setPost] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      gender,
      isChecked,
      post,
      date,
    };
    try {
      const response = await axios.post('http://localhost:9000/signup', formData); // Replace with your server URL
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <FirstName value={firstName} onChange={setFirstName} />
        <LastName value={lastName} onChange={setLastName} />
        <Email value={email} onChange={setEmail} />
        <Password value={password} onChange={setPassword} />
        <PhoneNumber value={phoneNumber} onChange={setPhoneNumber} />
        <Gender value={gender} onChange={setGender} />
        <UsedBefore 
          isChecked={isChecked} 
          onCheckChange={() => setIsChecked(!isChecked)}
          postValue={post}
          onPostChange={(e) => setPost(e.target.value)}
          dateValue={date}
          onDateChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
