import React from 'react';
import Post from '../components/Post';
import Date from '../components/Date';

const UsedBefore = ({ isChecked, onCheckChange, postValue, onPostChange, dateValue, onDateChange }) => {

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckChange}
        />
        Used Before
      </label>

      {isChecked && (
        <div>
          <Post value={postValue} onChange={onPostChange} />
          <Date value={dateValue} onChange={onDateChange} />
        </div>
      )}
    </div>
  );
};

export default UsedBefore;
