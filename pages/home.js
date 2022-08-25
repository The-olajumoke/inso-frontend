import Layout from "@/components/Layout";
import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/dashboard.module.css";
import { GlobalContext } from "@/context/Provider";
import DiscussionBox from "@/components/DiscussionBox";
import { getDiscussions } from "@/context/actions/discussion/getDiscussions";
import { API_URL } from "@/utils/url";
import Image from "next/image";
import DasbboardDiscBox from "@/components/DashboardDiscBox";
import BarchartDash from "chart/BarchartDash";
import withAuth from "@/HOC/withAuth";
import dashboard_img from "../public/static/illustrations/dashboard_img.svg";
import big_badge from "../public/static/illustrations/big_badge.svg";
import unlock from "../public/static/illustrations/unlock.svg";
import close from "../public/static/icons/close.svg";
import avatar from "../public/static/images/avatar.svg";
import Link from "next/link";
// import ChordChart from "chart/ChordChart";

const Home = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [allDiscussions, setAllDiscussions] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [initials, setInitials] = useState("");
  const {
    discussionDispatch,
    discussionState: {
      discussion: { loading, error, discussionData },
    },
  } = useContext(GlobalContext);
  const {
    userDispatch,
    userState: {
      user: { profileData },
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);
  useEffect(() => {
    if (profileData !== null) {
      const { _id } = profileData;
      setUserId(_id);
      console.log(profileData);
      setFirstName(profileData?.f_name);
      setLastName(profileData?.l_name);
      const firstInit = profileData?.f_name?.split("")[0];
      const lastInit = profileData?.l_name?.split("")[0];
      setInitials(`${firstInit} ${lastInit}`);
    }
  }, [profileData]);
  useEffect(() => {
    if (userId !== null && token !== "") {
      getDiscussions(API_URL, token, userId)(discussionDispatch);
    }
  }, [userId, token]);

  // useEffect(() => {
  //   if (discussionData !== null && discussionData.length) {
  //     const discArry = [
  //       discussionData[0],
  //       discussionData[1],
  //       discussionData[2],
  //       discussionData[3],
  //     ];
  //     console.log(discArry);
  //     // setAllDiscussions(discArry);
  //   }
  // }, [error, loading, discussionData]);

  return (
    <Layout title="Inso | Home" searchBar={false} bgColor="bg-gray-background">
      <div
        className={`${styles.hiddenScrollbar} relative h-full p-35 vp-600:px-23 vp-980:px-46 w-full`}
      >
        <div className="h-125 vp-600:h-100 hidden vp-768:flex bg-primary-darkGreen rounded-lg w-full mb-40 pl-59 vp-1024:pl-16 pr-16  items-center justify-between py-22 vp-600:py-16">
          <div className="h-full flex items-center">
            <Image src={unlock.src} alt="badge" height={50} width={50} />
            <div className="ml-38 vp-600:ml-16">
              <h3 className=" text-white-white font-bold vp-1024:text-lg vp-600:text-sm">
                New Post Inspiration
              </h3>
              <h3 className=" text-white-white font-bold  vp-1024:text-lg vp-600:text-sm">
                unlocked
              </h3>
            </div>
          </div>
          <div className=" h-full flex ">
            <div className=" h-full flex justify-center items-end mr-48 vp-1024:mr-16 vp-600:mr-0">
              <button className="w-139 vp-600:w-85 vp-1024:w-100 vp-1024:h-46 vp-600:h-32 h-56 bg-other-orange text-primary-darkGreen flex items-center justify-center rounded text-sm">
                View now
              </button>
            </div>
            <div>
              <Image src={close.src} alt="close" width={16} height={16} />
            </div>
          </div>
        </div>
        <div
          style={{ minHeight: "520px" }}
          className=" grid-cols-4 vp-1024:grid-cols-5  grid gap-6  h-520 vp-768:h-auto mb-41 vp-768:flex vp-768:flex-col-reverse"
        >
          <div className="col-span-3 h-full flex-grow">
            <div className="h-125 vp-768:hidden bg-primary-darkGreen rounded-lg w-full mb-40 pl-59 vp-1024:pl-16 pr-16 flex  items-center justify-between py-22">
              <div className="h-full flex items-center">
                <Image src={unlock.src} alt="badge" height={50} width={50} />
                <div className="ml-38">
                  <h3 className=" text-white-white font-bold vp-1024:text-lg">
                    New Post Inspiration
                  </h3>
                  <h3 className=" text-white-white font-bold  vp-1024:text-lg">
                    unlocked
                  </h3>
                </div>
              </div>
              <div className=" h-full flex ">
                <div className=" h-full flex justify-center items-end mr-48 vp-1024:mr-16">
                  <button className="w-139 vp-1024:w-100 vp-1024:h-46 h-56 bg-other-orange text-primary-darkGreen flex items-center justify-center rounded text-sm">
                    View now
                  </button>
                </div>
                <div>
                  <Image src={close.src} alt="close" width={16} height={16} />
                </div>
              </div>
            </div>
            <div className="vp-1024:mt-8">
              <h4 className=" text-primary-darkGreen mb-13 font-medium">
                Discussions
              </h4>

              {allDiscussions.length ? (
                <div className="flex flex-wrap gap-6">
                  {allDiscussions.map((disc, index) => (
                    <DasbboardDiscBox discussion={disc} key={index} />
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <Link href="/discussions/create-discussion" passHref>
                    <div className=" cursor-pointer h-full flex justify-center items-center mt-150">
                      <p className=" font-medium">Create a discussion</p>
                    </div>
                  </Link>{" "}
                </div>
              )}
            </div>
          </div>
          <div className=" flex w-300 vp-1024:w-full vp-1024:justify-center">
            <div className="flex flex-col w-full justify-center items-center vp-1024:w-300">
              <div className="relative w-300 h-125 flex justify-center">
                <Image
                  src={dashboard_img.src}
                  alt="dashboard_img"
                  className=" vp-1024:w-full"
                  layout="fill"
                />
              </div>
              <div className="w-full  relative mb-16 rounded-lg bg-white-white  z-99">
                <div className="absolute w-94 h-94 bg-white-white -bottom-20 left-1/2 right-1/2 -translate-x-1/2 text-5xl flex justify-center items-center rounded-full p-4">
                  <div className=" bg-primary-darkGreen text-white-white h-full w-full flex justify-center items-center  font-semibold  rounded-full capitalize">
                    {initials}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full  shadow-sm  rounded-lg bg-white-white items-center pt-50 flex-grow justify-between">
                <div className="flex items-center gap-1">
                  <h6 className="mb-3 text-primary-darkGreen font-semibold capitalize ">
                    {firstName}
                  </h6>
                  <h6 className="mb-3 text-primary-darkGreen font-semibold capitalize ">
                    {lastName}
                  </h6>
                </div>
                <span className=" text-primary-darkGreen">1050 posts</span>

                <div className="h-full w-full py-27 px-20 flex items-end">
                  <BarchartDash
                    thick={10}
                    radius={5}
                    labels={["S", "M", "T", "W", "T", "F", "S"]}
                    barData={[5, 8, 8, 8, 4, 1, 3, 4]}
                  />
                </div>
              </div>
            </div>
            {/* <div className="h-full hidden vp-768:flex vp-768:flex-col vp-600:hidden">
              <h4 className=" text-primary-darkGreen  font-medium mb-28">
                Badges
              </h4>
              <div className=" h-150 gap-6 flex justify-between flex-wrap vp-1024:w-full ">
                <div
                  className={`${styles.badge} px-35 vp-768:px-16 flex items-center justify-between shadow-sm `}
                >
                  <div>
                    <Image
                      src={big_badge}
                      alt="badge"
                      width="77"
                      height="102"
                      layout="intrinsic"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-primary-darkGreen  font-bold">
                      Build an amazing{" "}
                    </h3>
                    <h3 className="text-primary-darkGreen  font-bold mb-11">
                      Collection
                    </h3>
                    <button
                      className={` ${styles.badgeBtn} w-140 h-35 rounded text-sm text-primary-darkGreen`}
                    >
                      View badges
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="">
          <h4 className=" vp-768:hidden vp-600:flex text-primary-darkGreen  font-medium mb-28">
            Badges
          </h4>

          <div className="flex flex-wrap gap-6 ">
            <div
              className={`${styles.badge} px-35 flex items-center justify-between shadow-sm   vp-768:hidden vp-600:flex vp-600:px-16`}
            >
              <div>
                <Image
                  src={big_badge.src}
                  alt="badge"
                  width="77"
                  height="102"
                  layout="intrinsic"
                />
              </div>
              <div className="">
                <h3 className="text-primary-darkGreen  font-bold">
                  Build an amazing{" "}
                </h3>
                <h3 className="text-primary-darkGreen  font-bold mb-11">
                  Collection
                </h3>
                <button
                  className={` ${styles.badgeBtn} w-140 h-35 rounded text-sm text-primary-darkGreen`}
                >
                  View badges
                </button>
              </div>
            </div>
            <div className=" flex-grow rounded-xl bg-white-white py-13 px-15 shadow-sm  w-500">
              <div className="">
                <p className=" text-primary-darkGreen mb-15  font-medium">
                  Badge progress
                </p>
                <div className="">
                  <div className=" flex items-center mb-7">
                    <div className=" bg-other-orange w-250 h-30 rounded px-14  text-xs flex items-center mr-18">
                      Make 10 posts
                    </div>
                    <div className="w-122  bg-other-orange h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                      <progress
                        className={`${styles.progressBarDashb} w-full`}
                        value={65}
                        max={100}
                      />
                      <div className="flex-grow flex items-start">
                        <p> In progress</p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center mb-7">
                    <div className=" bg-other-orange w-250 h-30 rounded px-14  text-xs flex items-center mr-18">
                      Make 10 posts
                    </div>
                    <div className="w-122  bg-other-orange h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                      <progress
                        className={`${styles.progressBarDashb} w-full`}
                        value={65}
                        max={100}
                      />
                      <div className="flex-grow flex items-start">
                        <p> In progress</p>
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center mb-7">
                    <div className=" bg-other-orange w-250 h-30 rounded px-14  text-xs flex items-center mr-18">
                      Make 10 posts
                    </div>
                    <div className="w-122  bg-other-orange h-30 pb-5 text-other-disabledText flex flex-col justify-center items-center text-md  rounded-xs overflow-hidden">
                      <progress
                        className={`${styles.progressBarDashb} w-full`}
                        value={65}
                        max={100}
                      />
                      <div className="flex-grow flex items-start">
                        <p> In progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex-grow rounded-xl bg-white-white shadow-sm p-13  vp-768:px-16">
              <p className=" text-primary-darkGreen   border-blue-inputBlue mb-15 font-medium">
                People you connected with
              </p>
              <div className=" mb-15 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={avatar.src}
                      alt="user"
                      draggable="false"
                      layout="fixed"
                      width="22"
                      height="22"
                    />
                  </div>
                  <p className=" text-black-analText font-medium ml-12">
                    Emily Sanders
                  </p>
                </div>
                <p className=" text-primary-darkGreen">14</p>{" "}
              </div>
              <div className=" mb-15 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={avatar.src}
                      alt="user"
                      draggable="false"
                      layout="fixed"
                      width="22"
                      height="22"
                    />
                  </div>
                  <p className=" text-black-analText font-medium ml-12">
                    Emily Sanders
                  </p>
                </div>
                <p className=" text-primary-darkGreen">14</p>{" "}
              </div>
              <div className=" mb-15 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={avatar.src}
                      alt="user"
                      draggable="false"
                      layout="fixed"
                      width="22"
                      height="22"
                    />
                  </div>
                  <p className=" text-black-analText font-medium ml-12">
                    Emily Sanders
                  </p>
                </div>
                <p className=" text-primary-darkGreen">14</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Home);
