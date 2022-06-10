import Head from "next/head";
import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
// import { GlobalContext } from "@/context/Provider";
import Image from "next/image";
import Link from "next/link";
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

      <div className=" flex flex-col vp-980:hidden">
        <Header
          navSize={navSize}
          handleNavSize={handleNavSize}
          searchBar={searchBar}
        />
        <div className="flex flex-grow   ">
          <Sidebar navSize={navSize} />
          <div className={`w-full flex  `}>
            {/* <div
              className={`${
                navSize === "small" ? "w-109" : "w-333"
              }  vp-980:hidden`}
            ></div> */}
            <div className={`${bgColor}  flex-grow  overflow-y-auto`}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-background py-10 hidden vp-980:flex  flex-col  h-screen ">
        <div className=" flex h-55 w-full bg-white-white justify-between items-center  vp-600:px-23 vp-980:px-46 shadow-sm  ">
          <div className="flex justify-center items-center">
            <Image
              src="/icons/hamburger_black.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="25"
              height="15"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/inso_logo.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="87"
              height="41"
            />
          </div>
          <Link passHref href="/notifications">
            <div className="flex justify-center items-center ">
              <Image
                src="/icons/bell_black.svg"
                alt="notifications"
                draggable="false"
                layout="fixed"
                width="30"
                height="30"
              />
            </div>
          </Link>
        </div>
        <div className={`${bgColor} flex-grow overflow-y-auto relative`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
