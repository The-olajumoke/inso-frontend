import React from "react";
import Image from "next/image";
import styles from "@/styles/layout.module.css";
const Header = ({ navSize, handleNavSize, searchBar }) => {
  return (
    <div className="h-60 flex sticky top-0 bg-white-white z-50 w-full px-50 items-center shadow-sm ">
      <div>
        <Image
          src="https://res.cloudinary.com/insomaryland/image/upload/v1660169006/inso_logo_x1kgxc.svg"
          alt="Inso Logo"
          draggable="false"
          layout="fixed"
          width="98"
          height="46"
        />
      </div>
      {searchBar && (
        <div className="ml-176">
          <input
            type="text"
            className={`${styles.searchInput}  border-none `}
            placeholder="Search (Enter discussion name, or Inso code)"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
