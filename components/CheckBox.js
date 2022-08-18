import React from "react";

const CheckBox = ({ id, checked, handleChange, disabled, value }) => {
  return (
    <div className="checkbox-container">
      {handleChange ? (
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={(evt) => handleChange(id)}
        />
      ) : (
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          value={value}
        />
      )}
      <label className="flex items-center justify-center" htmlFor={id}>
        <span></span>
      </label>
    </div>
  );
};

export default CheckBox;
