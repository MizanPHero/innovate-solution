// AgeSelection.jsx
import React from 'react';

const AgeSelection = ({ index, age, onChange }) => {
  const handleAgeChange = (e) => {
    onChange(index, e.target.value);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <label htmlFor={`childAge${index}`} className="text-base font-bold">
        Age of Child {index + 1}:
      </label>
      <select
        id={`childAge${index}`}
        name={`childAge${index}`}
        value={age}
        onChange={handleAgeChange}
        className="p-2 border border-gray-300 outline-none rounded-md focus:ring-2 focus:ring-[#0062e3]"
      >
        <option value="0">Select Age</option>
        <option value="1">1 year old</option>
        <option value="2">2 years old</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default AgeSelection;
