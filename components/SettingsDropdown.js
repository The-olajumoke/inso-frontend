import React from "react";
import styles from "@/styles/dropdown.module.css";
import Image from "next/image";
const SettingsDropdown = ({
  value,
  setValue,
  title,
  items,
  openDropdown,
  setOpenDropdown,
  icon,
  placeholder,
  disabled,
}) => {
  return (
    <div
      style={{ width: "416px" }}
      className={`cursor-pointer relative border-2 border-blue-inputBlue rounded-sm ${
        disabled ? " bg-other-disabled !text-other-disabledText" : ""
      }`}
    >
      <div
        className="cursor-pointer px-16  h-36 vp-980:h-45 flex items-center "
        onClick={() => setOpenDropdown(true)}
      >
        {icon && (
          <div className="mr-14 flex justify-center items-center">
            <Image
              src={icon}
              alt={value}
              layout="fixed"
              width="18"
              height="18"
            />
          </div>
        )}
        {value === "" ? (
          <span className="text-sm text-other-disabledText capitalize">
            {placeholder}
          </span>
        ) : (
          <span
            className={`text-sm text-gray-text capitalize ${
              disabled ? "!text-other-disabledText" : ""
            }`}
          >
            {value}
          </span>
        )}
      </div>
      {openDropdown && (
        <>
          <div
            className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
            onClick={() => setOpenDropdown(false)}
          ></div>
          <div
            className={`${styles.dropdown} absolute top-12 !bg-gray-background w-full  px-20 py-7 z-60  rounded-b-lg shadow-lg`}
          >
            <div className="w-full">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="  
                  text-gray-text
                bg-gray-background py-10 border-b-2  last:border-none border-border-dropdownLine cursor-pointer flex justify-start"
                  onClick={() => {
                    setValue(item);
                    setOpenDropdown(false);
                  }}
                >
                  <p className=" capitalize">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsDropdown;
