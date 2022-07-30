import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "@/styles/regInput.module.css";

const RegInput = ({
  label,
  type,
  value,
  setValue,
  placeholder,
  tooltip,
  blurHandler,
  errorMessage,
  keyUpHandler,
  disabled,
}) => {
  const [inputType, setInputType] = useState(type);
  const [openPasswordTooltip, setOpenPasswordTooltip] = useState(false);

  useEffect(() => {
    if (!openPasswordTooltip) {
      return;
    }

    function handleOpenTooltip() {
      if (openPasswordTooltip === true) {
        setOpenPasswordTooltip(false);
      }
    }

    window.addEventListener("click", handleOpenTooltip);
    return () => window.removeEventListener("click", handleOpenTooltip);
  }, [openPasswordTooltip]);

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const seePassword = () => {
    if (inputType === "password" && value.length > 0) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const hidePassword = () => {
    if (inputType === "text" && value.length > 0) {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };

  const handlePaste = (e) => {
    if (label === "CONFIRM PASSWORD") {
      e.preventDefault();
      return false;
    }
  };

  return (
    <div className="flex flex-col mb-16 relative" disabled={disabled}>
      {value.length ? (
        <div
          style={{ fontSize: "10px" }}
          className="flex absolute h-30  text-gray-labelGrey  px-5  -top-6  left-8  items-center bg-white-white z-9999"
        >
          <label>{label}</label>
        </div>
      ) : (
        ""
      )}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={handleChange}
          onKeyUp={keyUpHandler}
          placeholder={placeholder}
          required
          onPaste={handlePaste}
          onBlur={blurHandler}
          disabled={disabled}
          className={`${errorMessage && " !ring-none border-other-danger"}`}
        />
        {type === "password" && (
          <div className={styles.eyeIcon}>
            {inputType === "password" && (
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1659026566/closed_eye_si5r61.svg"
                alt="see-password"
                draggable="false"
                layout="intrinsic"
                width="20"
                height="20"
                className="cursor-pointer"
                onClick={seePassword}
              />
            )}
            {inputType === "text" && (
              <Image
                src={
                  value.length
                    ? "https://res.cloudinary.com/insomaryland/image/upload/v1659026613/open_eye_b6by26.svg"
                    : "https://res.cloudinary.com/insomaryland/image/upload/v1659026566/closed_eye_si5r61.svg"
                }
                alt="see-password"
                draggable="false"
                layout="intrinsic"
                width="20"
                height="20"
                className="cursor-pointer"
                onClick={hidePassword}
              />
            )}
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="flex items-start">
          <p className="text-xs text-other-danger text-left">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default RegInput;
