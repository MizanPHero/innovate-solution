// AgeSelection.jsx
import React from 'react';

const AgeSelection = ({ index, age, onChange }) => {
  const handleAgeChange = (e) => {
    onChange(index, e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 px-6 pt-5">
      <label htmlFor={`childAge${index}`} className="block text-base font-bold">
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
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
};

export default AgeSelection;
