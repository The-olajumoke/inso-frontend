import { useState } from "react";
import Image from "next/image";

const Input = ({
  label,
  type,
  value,
  setValue,
  placeholder,
  required,
  disabled,
  errorOnRequired,
  handleKeyUp,
}) => {
  return (
    <div className="flex flex-col mb-20 relative" disabled={disabled}>
      {value.length ? (
        <div
          style={{ fontSize: "10px" }}
          className="flex absolute h-30  text-gray-labelGrey  px-5  -top-6  left-8  items-center bg-white-white"
        >
          <label>{label}</label>
        </div>
      ) : (
        ""
      )}
      <div>
        <input
          type={type}
          placeholder={placeholder || "Enter"}
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
          required={required}
          disabled={disabled}
          onKeyUp={handleKeyUp}
          className={`${errorOnRequired && " border-other-danger"}`}
        />

        {errorOnRequired && (
          <p className="text-xs ">This is a required field</p>
        )}
      </div>
    </div>
  );
};
export default Input;
