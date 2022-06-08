import React from "react";
import Image from "next/image";
import styles from "@/styles/layout.module.css";
const Header = ({ navSize, handleNavSize, searchBar }) => {
  return (
    <div className="h-75 flex sticky top-0 bg-white-white z-50 w-full px-50 items-center shadow-sm">
      <div className="mr-64" onClick={handleNavSize}>
        <Image
          src={`${
            navSize === "small"
              ? "/icons/hamburger.svg"
              : "/icons/hamburger_open.svg"
          }`}
          alt="hamburger"
          draggable="false"
          layout="fixed"
          width="33"
          height="20"
        />
      </div>

      <div>
        <Image
          src="/images/inso_logo.svg"
          alt="Inso Logo"
          draggable="false"
          layout="fixed"
          width="129"
          height="60"
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
