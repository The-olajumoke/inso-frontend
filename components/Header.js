import React from "react";
import Image from "next/image";
import styles from "@/styles/layout.module.css";
import inso_logo from "../public/static/images/inso_logo.svg";
const Header = ({
  navSize,
  handleNavSize,
  searchBar,
  searchItem,
  setSearchItem,
  handleSearch,
}) => {
  return (
    <div className="h-60 flex sticky top-0 bg-white-white z-50 w-full px-50 items-center shadow-sm ">
      <div>
        <Image
          src={inso_logo.src}
          alt="Inso Logo"
          draggable="false"
          layout="fixed"
          width="98"
          height="46"
        />
      </div>
      {searchBar && (
        <div className="ml-176">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              className={`${styles.searchInput}  border-none `}
              placeholder="Search (Enter discussion name, or Inso code)"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
