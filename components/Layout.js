import Head from "next/head";
import React, { useState, useRef, useContext, useEffect } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/layout.module.css";
import { GlobalContext } from "@/context/Provider";
import { createDiscussion } from "@/context/actions/discussion/createDiscussion";
import { getUserProfile } from "@/context/actions/user/getUserProfile";
import { API_URL } from "@/utils/url";
const Layout = ({ title, children, searchBar, bgColor }) => {
  const [navSize, setNavSize] = useState("small");
  const [openSideBar, setOpenSideBar] = useState(false);
  const [token, setToken] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);
  const {
    userDispatch,
    userState: {
      user: { profileData, updatePasswordSuccess, editProfileSuccess },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (token !== "") {
      getUserProfile(API_URL, token)(userDispatch);
    }
  }, [token, updatePasswordSuccess, editProfileSuccess]);

  useEffect(() => {
    if (profileData !== null) {
      console.log(profileData);
      setUserProfile(profileData);
    }
  }, [profileData]);

  //   data:
  // contact: Array(1)
  // 0: {email: 'jummy@yopmail.com', verified: false, primary: true}
  // length: 1
  // [[Prototype]]: Array(0)
  // f_name: "jumy"
  // l_name: "goody"
  // username: "jumygoody1"
  // _id: "62e2a7c89a0f5c1cdae61cb3"

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
            <Sidebar navSize={navSize} user={userProfile} />
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
                width="24"
                height="24"
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
