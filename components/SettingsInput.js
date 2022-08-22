import React, { useState } from "react";
import Image from "next/image";
import closed_eye from "../public/static/icons/closed_eye.svg";
import open_eye from "../public/static/icons/open_eye.svg";
const SettingsInput = ({
  type,
  value,
  setValue,
  placeholder,
  disabled,
  editProfile,
  blurHandler,
  keyUpHandler,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [currentType, setCurrentType] = useState(type);
  return (
    <div className="relative" disabled={disabled}>
      <input
        type={currentType}
        placeholder={placeholder || "Enter"}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        disabled={disabled}
        onBlur={blurHandler}
        onKeyUp={keyUpHandler}
        className={`${
          editProfile ? "border-2 border-blue-inputBlue" : "border-none"
        } h-36 vp-980:h-45 px-15   w-414 vp-600:w-full  text-sm text-gray-text`}
      />
      {type === "password" && (
        <div
          className="absolute top-0  right-6 flex justify-center items-center bottom-0 "
          onClick={() => {
            if (currentType === "password") {
              setCurrentType("text");
            } else {
              setCurrentType("password");
            }
          }}
        >
          <Image
            src={`${showPassword ? `/${closed_eye.src}` : `/${open_eye.src}`}`}
            alt=" Discussion dropdown "
            draggable="false"
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
      )}
    </div>
  );
};

export default SettingsInput;
