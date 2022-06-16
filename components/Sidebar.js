import React from "react";
import styles from "@/styles/sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = ({ navSize, userPicture }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`${styles.sidebarContainer} ${
          navSize === "small" ? "w-109" : "w-333"
        }   flex flex-col justify-between  vp-980:hidden  overflow-y-auto`}
      >
        <div className=" flex  pl-50">
          {userPicture ? (
            <div>picture</div>
          ) : (
            <div className="  h-45 w-45 text-primary-blue bg-other-faintBlue rounded-full text-md flex justify-center items-center font-semibold mr-15">
              PD
            </div>
          )}
          <div className={`${navSize === "small" && "hidden"}`}>
            <h4 className="text-gray-text">Patrick Dempsey</h4>
            <h6 className=" text-primary-darkGreen">@patrick</h6>
            <h5 className=" text-other-success mt-10">Starter</h5>
          </div>
        </div>
        <div className="mt-12">
          <div className="">
            <Link href="/discussions">
              <a
                className={`${
                  router.pathname.startsWith("/discussions") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/discussions")
                      ? "https://res.cloudinary.com/launch-bridge/image/upload/v1655324841/InsoImages/dashboard_active_rafawm.svg"
                      : "https://res.cloudinary.com/launch-bridge/image/upload/v1655324853/InsoImages/dashboard_u86oj5.svg"
                  }
                  alt="discussion"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />

                <h4 className={`${navSize === "small" && "hidden"}  `}>
                  Discussions
                </h4>
              </a>
            </Link>
            <Link passHref href="/notifications">
              <div
                className={`${
                  router.pathname.startsWith("/notifications") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/notifications")
                      ? "https://res.cloudinary.com/launch-bridge/image/upload/v1655325247/InsoImages/notification_active_jlhbuf.svg"
                      : "https://res.cloudinary.com/launch-bridge/image/upload/v1655325243/InsoImages/notification_b9hfpr.svg"
                  }
                  alt="notifications"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className={`${navSize === "small" && "hidden"} `}>
                  Notifications
                </h4>
              </div>
            </Link>
            <Link href="/stats" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/stats") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/stats")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325351/InsoImages/stats_zjldog.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655325354/InsoImages/stats_active_loxtf9.svg"
                  }
                  alt="stats"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className={`${navSize === "small" && "hidden"}`}>Stats</h4>
              </div>
            </Link>
            <Link href="/analytics" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/analytics") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/analytics")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325640/InsoImages/analytics_active_isunzk.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655325638/InsoImages/analytics_kff72r.svg"
                  }
                  alt="analytics"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className={`${navSize === "small" && "hidden"}`}>
                  Analytics
                </h4>
              </div>
            </Link>
            <Link href="/charts" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/charts") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/charts")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325713/InsoImages/charts_bczceq.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655325713/InsoImages/charts_bczceq.svg"
                  }
                  alt="charts"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className={`${navSize === "small" && "hidden"}`}>Charts</h4>
              </div>
            </Link>
            <Link href="/calendar" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/calendar") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/calendar")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326223/InsoImages/calendar_active_ixszvw.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655326223/InsoImages/calendar_ix65zg.svg"
                  }
                  alt="calendar"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className={`${navSize === "small" && "hidden"}`}>
                  Calendar
                </h4>
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/contact") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/contact")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326270/InsoImages/contact_active_e9ipb6.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655326270/InsoImages/contact_hz2oeq.svg"
                  }
                  alt="contact"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className={`${navSize === "small" && "hidden"}`}>
                  Contact us
                </h4>
              </div>
            </Link>
            <Link href="/settings" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/settings") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/settings")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326321/InsoImages/settings_active_efkgp4.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655326321/InsoImages/settings_zspo9l.svg"
                  }
                  alt="settings"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className={`${navSize === "small" && "hidden"}`}>
                  Settings
                </h4>
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
            } w-full h-40 border border-border-line rounded flex items-center  justify-center  `}
          >
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1655326491/InsoImages/download_mbd2hu.svg"
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
        <div className=" flex  pl-25 my-20 vp-600:my-2">
          {userPicture ? (
            <div>picture</div>
          ) : (
            <div className="  h-45 w-45 text-primary-blue bg-other-faintBlue rounded-full text-md flex justify-center items-center font-semibold mr-15">
              PD
            </div>
          )}
          <div className="">
            <h4 className="text-gray-text">Patrick Dempsey</h4>
            <h6 className=" text-primary-darkGreen">@patrick</h6>
            <h5 className=" text-other-success mt-10 vp-768:text-xs">
              Starter
            </h5>
          </div>
        </div>
        <div className="mt-12">
          <div className="">
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
                      ? "https://res.cloudinary.com/launch-bridge/image/upload/v1655324841/InsoImages/dashboard_active_rafawm.svg"
                      : "https://res.cloudinary.com/launch-bridge/image/upload/v1655324853/InsoImages/dashboard_u86oj5.svg"
                  }
                  alt="discussion"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Discussions</h4>
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
                      ? "https://res.cloudinary.com/launch-bridge/image/upload/v1655325247/InsoImages/notification_active_jlhbuf.svg"
                      : "https://res.cloudinary.com/launch-bridge/image/upload/v1655325243/InsoImages/notification_b9hfpr.svg"
                  }
                  alt="notifications"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Notifications</h4>
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
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325351/InsoImages/stats_zjldog.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655325354/InsoImages/stats_active_loxtf9.svg"
                  }
                  alt="stats"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Stats</h4>
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
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325640/InsoImages/analytics_active_isunzk.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655325638/InsoImages/analytics_kff72r.svg"
                  }
                  alt="analytics"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Analytics</h4>
              </div>
            </Link>
            <Link href="/charts" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/charts") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/charts")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655325713/InsoImages/charts_bczceq.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655325713/InsoImages/charts_bczceq.svg"
                  }
                  alt="charts"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Charts</h4>
              </div>
            </Link>
            <Link href="/calendar" passHref>
              <div
                className={`${
                  router.pathname.startsWith("/calendar") &&
                  "bg-primary-darkGreen  justify-start text-white-white "
                } ' flex items-center gap-x-7  cursor-pointer pl-25  text-gray-text  h-73 vp-600:h-53`}
              >
                <Image
                  src={
                    router.pathname.startsWith("/calendar")
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326223/InsoImages/calendar_active_ixszvw.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655326223/InsoImages/calendar_ix65zg.svg"
                  }
                  alt="calendar"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Calendar</h4>
              </div>
            </Link>
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
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326270/InsoImages/contact_active_e9ipb6.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655326270/InsoImages/contact_hz2oeq.svg"
                  }
                  alt="contact"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Contact us</h4>
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
                      ? "https://res.cloudinary.com/insomaryland/image/upload/v1655326321/InsoImages/settings_active_efkgp4.svg"
                      : "https://res.cloudinary.com/insomaryland/image/upload/v1655326321/InsoImages/settings_zspo9l.svg"
                  }
                  alt="settings"
                  draggable="false"
                  width="24"
                  height="24"
                  layout="fixed"
                />
                <h4 className="">Settings</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className=" w-full px-25 mt-42">
          <div
            className={`w-full h-40 border border-border-line rounded flex items-center  justify-center  `}
          >
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1655326491/InsoImages/download_mbd2hu.svg"
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
    </>
  );
};

export default Sidebar;
