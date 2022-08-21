import React, { useEffect, useState } from "react";
import styles from "@/styles/sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = ({ navSize, userPicture, user, showHeader }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [initials, setInitials] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      const { f_name, l_name, username } = user;
      setFirstName(f_name);
      setLastName(l_name);
      setUserName(username);
      const firstInit = f_name?.split("")[0];
      const lastInit = l_name?.split("")[0];
      setInitials(`${firstInit} ${lastInit}`);
    }
  }, [user]);

  return (
    <>
      <div
        className={`${styles.sidebarContainer} ${
          navSize === "small" ? "w-109" : "w-333"
        }   flex flex-col justify-between ${
          showHeader === false ? "!pt-8" : "p-9"
        }  h-full  vp-980:hidden`}
      >
        {showHeader === false && (
          <div className="pl-45 mb-25">
            <Image
              src="/static/images/logo_without_text.svg"
              alt="inso"
              draggable="false"
              width="40"
              height="40"
              layout="fixed"
            />
          </div>
        )}
        <div className=" flex  pl-50">
          {userPicture ? (
            <div>picture</div>
          ) : (
            <div className="h-37 w-37 text-xs flex justify-center items-center font-semibold mr-15 border overflow-hidden p-0 rounded-full bg-primary-darkGreen">
              <span className="flex-grow h-full w-full text-white-white bg-primary-darkGreen flex justify-center items-center border-2 rounded-full border-white-white m-0 capitalize ">
                {initials}
              </span>
            </div>
          )}
          <div className={`${navSize === "small" && "hidden"}`}>
            <h6 className="text-gray-text">
              {firstName} {lastName}
            </h6>
            <span className=" text-xs text-primary-darkGreen">@{userName}</span>
            <h6 className=" text-other-success mt-10">Starter</h6>
          </div>
        </div>
        <div className="mt-12 flex-grow">
          <div className="">
            <Link href="/home">
              <a
                className={`${
                  router.pathname.startsWith("/home") &&
                  " bg-primary-blue  justify-start text-white-white"
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/home")
                      ? "/static/icons/home.svg"
                      : "/static/new_icons/home.svg"
                  }
                  alt="discussion"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />

                <h6 className={`${navSize === "small" && "hidden"}  `}>Home</h6>
              </a>
            </Link>
            <Link href="/discussions">
              <a
                className={`${
                  router.pathname.startsWith("/discussions") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/discussions")
                      ? "/static/icons/dashboard_active.svg"
                      : "/static/new_icons/disc_inactive.svg"
                  }
                  alt="discussion"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />

                <h6 className={`${navSize === "small" && "hidden"}  `}>
                  Discussions
                </h6>
              </a>
            </Link>
            <Link passHref href="/notifications">
              <div
                className={`${
                  router.pathname.startsWith("/notifications") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/notifications")
                      ? "/static/icons/notification_active.svg"
                      : "/static/new_icons/notifications_inactive.svg"
                  }
                  alt="notifications"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className={`${navSize === "small" && "hidden"} `}>
                  Notifications
                </h6>
              </div>
            </Link>
            <Link href="/stats" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/stats") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/stats")
                      ? "/static/icons/stats.svg"
                      : "/static/new_icons/stats_inactive.svg"
                  }
                  alt="stats"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className={`${navSize === "small" && "hidden"}`}>Stats</h6>
              </div>
            </Link>
            <Link href="/analytics" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/analytics") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/analytics")
                      ? "/static/icons/analytics_active.svg"
                      : "/static/new_icons/analytics_inactive.svg"
                  }
                  alt="analytics"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className={`${navSize === "small" && "hidden"}`}>
                  Analytics
                </h6>
              </div>
            </Link>
            {/* <Link href="/charts" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/charts") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                
                <h6 className={`${navSize === "small" && "hidden"}`}>Charts</h6>
              </div>
            </Link> */}
            {/* <Link href="/calendar" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/calendar") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >

                <h6 className={`${navSize === "small" && "hidden"}`}>
                  Calendar
                </h6>
              </div>
            </Link> */}
            <Link href="/contact" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/contact") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/contact")
                      ? "/static/icons/contact_active.svg"
                      : "/static/new_icons/contact_inactive.svg"
                  }
                  alt="contact"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className={`${navSize === "small" && "hidden"}`}>
                  Contact us
                </h6>
              </div>
            </Link>
            <Link href="/settings" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/settings") &&
                  " bg-primary-blue  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-60`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/settings")
                      ? "/static/icons/settings_active.svg"
                      : "/static/new_icons/settings_inactive.svg"
                  }
                  alt="settings"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className={`${navSize === "small" && "hidden"}`}>
                  Settings
                </h6>
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`${
            navSize === "small" && "pr-0 pl-50"
          } w-full px-50 mt-60  `}
        >
          <div
            className={`${
              navSize === "small" && " rounded-full w-40 "
            } w-full h-40 border border-primary-blue   rounded flex items-center  justify-center  `}
          >
            <Image
              src="/static/new_icons/download_inactive.svg"
              alt="download"
              draggable="false"
              layout="fixed"
              height="24"
              width="24"
            />
            <p
              className={` ${
                navSize === "small" && " hidden"
              }  ml-17 text-primary-darkGreen`}
            >
              Upgrade
            </p>
          </div>
        </div>
      </div>
      <div
        className={`pt-80 py-25  w-300 absolute left-0 top-0 bottom-0 vp-980:flex flex-col justify-start vp-600:justify-between hidden   overflow-y-auto bg-white-white  z-9999`}
      >
        <div className=" flex  pl-25 my-16 vp-600:my-2">
          {userPicture ? (
            <div>picture</div>
          ) : (
            <div className="h-37 w-37 text-xs flex justify-center items-center font-semibold mr-15 border overflow-hidden p-0 rounded-full bg-primary-darkGreen">
              <span className="flex-grow h-full w-full text-white-white bg-primary-darkGreen flex justify-center items-center border-2 rounded-full border-white-white m-0 capitalize ">
                {initials}
              </span>
            </div>
          )}
          <div className="">
            <h6 className="text-gray-text ">
              {firstName} {lastName}
            </h6>
            <p className=" text-primary-darkGreen">@{userName}</p>
            <h6 className=" text-other-success mt-10 vp-768:text-xs">
              Starter
            </h6>
          </div>
        </div>
        <div className="mt-10">
          <div className="">
            <Link href="/home" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/home") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-texth h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/home")
                      ? "/static/icons/home.svg"
                      : "/static/new_icons/home.svg"
                  }
                  alt="home"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Home</h6>
              </div>
            </Link>
            <Link href="/discussions" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/discussions") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-texth h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/discussions")
                      ? "/static/icons/dashboard_active.svg"
                      : "/static/new_icons/disc_inactive.svg"
                  }
                  alt="discussion"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Discussions</h6>
              </div>
            </Link>
            <Link href="/notifications" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/notifications") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/notifications")
                      ? "/static/icons/notification_active.svg"
                      : "/static/new_icons/notifications_inactive.svg"
                  }
                  alt="notifications"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Notifications</h6>
              </div>
            </Link>
            <Link href="/stats" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/stats") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/stats")
                      ? "/static/icons/stats.svg"
                      : "/static/new_icons/stats_inactive.svg"
                  }
                  alt="stats"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Stats</h6>
              </div>
            </Link>
            <Link href="/analytics" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/analytics") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/analytics")
                      ? "/static/icons/analytics_active.svg"
                      : "/static/new_icons/analytics_inactive.svg"
                  }
                  alt="analytics"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Analytics</h6>
              </div>
            </Link>
            {/* <Link href="/charts" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/charts") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
              
                <h6 className="">Charts</h6>
              </div>
            </Link> */}
            {/* <Link href="/calendar" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/calendar") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >

                <h6 className="">Calendar</h6>
              </div>
            </Link> */}
            <Link href="/contact" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/contact") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/contact")
                      ? "/static/icons/contact_active.svg"
                      : "/static/new_icons/contact_inactive.svg"
                  }
                  alt="contact"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Contact us</h6>
              </div>
            </Link>
            <Link href="/settings" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/settings") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/settings")
                      ? "/static/icons/settings_active.svg"
                      : "/static/new_icons/settings_inactive.svg"
                  }
                  alt="settings"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h6 className="">Settings</h6>
              </div>
            </Link>
          </div>
        </div>
        <div className=" w-full px-25 mt-42">
          <div
            className={`w-full h-40 border border-primary-blue rounded flex items-center  justify-center  `}
          >
            <Image
              src="/static/new_icons/download_inactive.svg"
              alt="download"
              draggable="false"
              layout="fixed"
              height="24"
              width="24"
            />
            <p className={`  ml-17 text-primary-darkGreen `}>Upgrade</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Sidebar;
