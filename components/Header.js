import React from "react";
import Image from "next/image";
import styles from "@/styles/layout.module.css";
const Header = ({ navSize, handleNavSize, searchBar }) => {
  return (
    <div className="h-60 flex sticky top-0 bg-white-white z-50 w-full px-50 items-center shadow-sm">
      <div className="mr-64" onClick={handleNavSize}>
        <Image
          src={`${
            navSize === "small"
              ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326909/InsoImages/hamburger_aij9tq.svg"
              : "https://res.cloudinary.com/insomaryland/image/upload/v1655326915/InsoImages/hamburger_open_fxdmt4.svg"
          }`}
          alt="hamburger"
          draggable="false"
          layout="fixed"
          width="25"
          height="15"
        />
      </div>

      <div>
        <Image
          src="https://res.cloudinary.com/insomaryland/image/upload/v1655327110/InsoImages/inso_logo_yi1rgz.svg"
          alt="Inso Logo"
          draggable="false"
          layout="fixed"
          width="98"
          height="46"
        />
      </div>
      {searchBar && (
        <div className="ml-176  ">
          <input
            type="text"
            className={`${styles.searchInput}  border-none`}
            placeholder="Search (Enter discussion name, or Inso code)"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
