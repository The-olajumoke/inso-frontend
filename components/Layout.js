import Head from "next/head";
import React, { useState, useContext } from "react";
import Header from ".@/components/Header";
import Sidebar from "@/components/Sidebar";
// import { GlobalContext } from "@/context/Provider";

const Layout = ({ title, children, searchBar, bgColor }) => {
  const [navSize, setNavSize] = useState("small");

  // const {
  //   layoutDispatch,
  //   layoutState: {
  //     layout: { navSize },
  //   },
  // } = useContext(GlobalContext);

  console.log(navSize);
  const handleNavSize = () => {
    if (navSize === "small") {
      console.log(navSize);
      setNavSize("large");
    }
    if (navSize === "large") {
      console.log(navSize);
      setNavSize("small");
    }
  };
  return (
    <div>
      <Head>
        <title>{title || "Custigrow"}</title>
      </Head>

      <div className="  h-screen flex flex-col">
        <Header
          navSize={navSize}
          handleNavSize={handleNavSize}
          searchBar={searchBar}
        />
        <div className="flex flex-grow   ">
          <Sidebar navSize={navSize} />
          <div className={`w-full flex  `}>
            <div
              className={`${
                navSize === "small" ? "w-109" : "w-333"
              }  vp-980:hidden`}
            ></div>
            <div className={`${bgColor} flex-grow  overflow-y-auto`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
