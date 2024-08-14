// PhoneNumber.js
import React from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const PhoneNumber = ({ value, onChange }) => {
  return (
    <div>
      <label>Phone Number:</label>
      <PhoneInput
         required
        defaultCountry="ua"  
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PhoneNumber;
