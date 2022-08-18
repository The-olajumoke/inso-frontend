import React from "react";

const CreateDiscInput = ({
  label,
  type,
  value,
  setValue,
  placeholder,
  required,
  disabled,
  handleKeyUp,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder || "Enter"}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        required={required}
        disabled={disabled}
        onKeyUp={handleKeyUp}
        className="h-36 w-full px-20 py-9 bg-green-lighterGreen rounded-lg text-sm text-gray-text outline-none border-none"
      />
    </div>
  );
};

export default CreateDiscInput;
