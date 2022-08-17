import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { joinDiscussion } from "@/context/actions/discussion/joinDiscussion";
import { API_URL } from "@/utils/url";
import { GlobalContext } from "@/context/Provider";
import { getUserProfile } from "@/context/actions/user/getUserProfile";
import WhiteLoader from "./whiteLoader";

const HeroPage = () => {
  const [insoCode, setInsoCode] = useState("");
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState("");
  const [isCodeUpToFive, setIsCodeUpToFive] = useState(false);
  const {
    userDispatch,
    userState: {
      user: { profileData },
    },
  } = useContext(GlobalContext);
  const {
    discussionDispatch,
    discussionState: {
      discussion: {
        loading,
        error,
        discussionData,
        joinLoading,
        joinSuccess,
        joinError,
      },
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);
  useEffect(() => {
    if (token !== "") {
      getUserProfile(API_URL, token)(userDispatch);
    }
  }, [token]);

  useEffect(() => {
    if (insoCode.length > 4) {
      setIsCodeUpToFive(true);
    }
  }, [insoCode]);
  useEffect(() => {
    if (profileData !== null) {
      const { _id } = profileData;
      setUserId(_id);
    }
  }, [profileData]);
  const handleJoinDiscussion = () => {
    if (!token) {
      location.replace(`/auth/sign-in/${insoCode}`);
    } else {
      joinDiscussion(API_URL, token, userId, insoCode)(discussionDispatch);
    }
  };
  return (
    <div className="bg-primary-darkGreen  relative overflow-hidden">
      <div className="pt-32 bg-hero-img h-850 vp-768:h-auto w-full mb-10 pb-32">
        <div className=" h-61 flex justify-between  px-50 vp-768:px-24 vp-600:px-14 w-full  ">
          <div className="  vp-600:w-87 flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1660382946/inso_logo_yellow_mjtgbl.svg"
              alt="Inso Logo"
              draggable="false"
              layout="intrinsic"
              width="129"
              height="60"
            />
          </div>
          <div className="flex items-center  gap-8 vp-600:gap-4">
            <Link passHref href="/auth/login">
              <button className=" cursor-pointer w-133 vp-600:w-77 vp-600:h-33 h-44 text-md text-white-white">
                Log in
              </button>
            </Link>
            <Link passHref href="/auth/signup">
              <button className=" bg-primary-blue w-133 vp-600:w-119 vp-600:h-33 h-44 text-md rounded">
                Get started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex vp-768:flex-col justify-between  items-center overflow-hidden pl-50 vp-768:px-24 vp-600:px-14 vp-768:mt-50 gap-x-60 gap-y-20 ">
          <div className="  w-561 vp-768:w-full">
            <h1 className={`${styles.heading} vp-768:text-primary-blue`}>
              The easiest
            </h1>
            <h1 className={`${styles.heading} mb-7`}> way to discuss</h1>
            <h4 className=" vp-768:w-8/12 vp-600:w-9/12 text-white-white font-normal">
              Explore new, easy and fun ways to start and review disussions
              among peers.
            </h4>
            <div className="mt-70 vp-768:mt-48 flex vp-768:flex-col items-center vp-768:items-start">
              <button
                className=" bg-primary-blue rounded text-xl vp-768:text-lg vp-600:text-sm mr-20  w-262 h-60 vp-768:h-50  vp-768:mb-20"
                onClick={() => alert(" clicked")}
              >
                Get started for free
              </button>
              <div
                style={{ background: "rgba(255, 255, 255, 0.05)" }}
                className="w-262 h-60 vp-768:h-50 flex justify-between items-center rounded px-20"
              >
                <input
                  type="text"
                  className="text-lg vp-600:text-sm bg-transparent border-none px-0 text-white-white focus:ring-0 "
                  placeholder="Enter inso code"
                  value={insoCode}
                  onChange={(e) => setInsoCode(e.target.value)}
                />
                <button
                  // disabled={isCodeUpToFive}
                  className={` disabled:text-primary-darkGreen text-lg text-primary-blue`}
                  onClick={handleJoinDiscussion}
                >
                  {joinLoading ? <WhiteLoader /> : "Join"}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex relative  vp-600:h-350  h-600  ">
            <div className="absolute vp-768:-right-1/4 vp-768:w-full h-full right-0 flex items-center ">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1660385026/hero-photo_psyazz.svg"
                alt="Inso Logo"
                draggable="false"
                layout="intrinsic"
                width="618"
                height="650"
                priority
              />
            </div>
          </div>
          {/* <div className=" w-660 vp-768:w-full h-600 vp-600:h-450 relative border">
            <div className=" w-full absolute top-0 bottom-0  flex justify-center items-center vp-600:hidden  mt-60">
              <div className="w-800 h-700 ">
                <Image
                  src="1175"
                  alt="Inso Logo"
                  draggable="false"
                  layout="fill"
                  // width="800"
                  // height="700"
                  priority
                />
              </div>
            </div>
            <div className="  hidden vp-600:flex mt-60 absolute -right-10">
              <Image
                src="/images/hero_image_resp.svg"
                alt="Inso Logo"
                draggable="false"
                layout="intrinsic"
                width="800"
                height="800"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
