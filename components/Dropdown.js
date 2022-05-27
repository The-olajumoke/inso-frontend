import React from "react";
import styles from "@/styles/dropdown.module.css";
import Image from "next/image";
const Dropdown = ({
  value,
  setValue,
  title,
  items,
  openDropdown,
  setOpenDropdown,
  icon,
}) => {
  return (
    <div className="relative">
      <div
        className="cursor-pointer flex items-center mr-43"
        onClick={() => setOpenDropdown(true)}
      >
        {icon && (
          <div className="mr-14 flex justify-center items-center">
            <Image
              src={icon}
              alt={title}
              layout="fixed"
              width="18"
              height="18"
            />
          </div>
        )}
        <p>{title}</p>
      </div>
      {openDropdown && (
        <>
          <div
            className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
            onClick={() => setOpenDropdown(false)}
          ></div>
          <div
            className={`${styles.dropdown} absolute  top-10 bg-white-white w-199  px-20 py-7 z-60  rounded-lg shadow-xs`}
          >
            <div className="w-full ">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="  
                     first:text-primary-darkGreen
                     text-gray-text
                  :hover:bg-other-faintBlue py-14 border-b-2  last:border-none border-border-dropdownLine cursor-pointer flex justify-start"
                  onClick={() => {
                    setValue(item);
                    setOpenDropdown(false);
                  }}
                >
                  <h6 className=" ">{item}</h6>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
