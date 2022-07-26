import Head from "next/head";
import React, { useState, useRef, useContext, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/layout.module.css";
import { GlobalContext } from "@/context/Provider";
import { createDiscussion } from "@/context/actions/discussion/createDiscussion";
const Layout = ({ title, children, searchBar, bgColor, API_URL }) => {
  console.log(API_URL);
  const [navSize, setNavSize] = useState("small");
  const [openSideBar, setOpenSideBar] = useState(false);
  const [token, setToken] = useState(false);

  // const {
  //   discussionDispatch,
  //   dicussionState: {
  //     discussion: { createLoading, createSuccess, createError },
  //   },
  // } = useContext(GlobalContext);
  console.log(GlobalContext);

  // useEffect(() => {
  //   createDiscussion(API_URL, token)(discussionDispatch);
  // }, [token]);
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

      <div className=" flex flex-col vp-980:hidden  h-screen">
        <Header
          navSize={navSize}
          handleNavSize={handleNavSize}
          searchBar={searchBar}
        />
        <div
          className={` ${styles.hiddenScrollbar}   justify-between flex h-full`}
        >
          <div
            style={{ minHeight: "109px" }}
            className={`${styles.hiddenScrollbar} border-r  border-other-disabled `}
          >
            <Sidebar navSize={navSize} />
          </div>
          <div className={`${bgColor} w-full`}>{children}</div>
        </div>
      </div>

      <div className="bg-gray-background py-10 hidden vp-980:flex  flex-col  h-screen ">
        <div className="flex h-55 w-full bg-white-white justify-between items-center  vp-600:px-23 vp-980:px-46 shadow-sm fixed left-0 right-0 top-3 z-99999 ">
          <div
            className="flex justify-center items-center"
            onClick={() => setOpenSideBar(!openSideBar)}
          >
            <Image
              src={
                openSideBar
                  ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326915/InsoImages/hamburger_open_fxdmt4.svg"
                  : "https://res.cloudinary.com/insomaryland/image/upload/v1655326909/InsoImages/hamburger_aij9tq.svg"
              }
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="25"
              height="15"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1655327110/InsoImages/inso_logo_yi1rgz.svg"
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
                src="https://res.cloudinary.com/insomaryland/image/upload/v1658348798/InsoImages/bell_black_ciri74.svg"
                alt="notifications"
                draggable="false"
                layout="fixed"
                width="30"
                height="30"
              />
            </div>
          </Link>
        </div>
        {openSideBar && <Sidebar />}
        <div className={`${bgColor} pt-35 flex-grow overflow-y-auto relative`}>
          {children}
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const API_URL = process.env.API_URL;
  return {
    props: {
      API_URL,
    },
  };
}

export default Layout;
