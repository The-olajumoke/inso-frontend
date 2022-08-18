import React from "react";

const Radio = ({ id, checked, name, handleChange, disabled, value }) => {
  return (
    <div className="checkbox-container">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        // disabled={disabled}
        onChange={() => handleChange(id)}
      />
      <label className="flex items-center justify-center" htmlFor={id}>
        <span></span>
      </label>
    </div>
  );
};

export default Radio;
