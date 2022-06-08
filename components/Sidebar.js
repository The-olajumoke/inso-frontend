import React from "react";
import styles from "@/styles/sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar = ({ navSize, userPicture }) => {
  const router = useRouter();

  return (
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
          <Link href="/discussions" passHref>
            <div
              className={`${
                router.pathname.startsWith("/discussions") &&
                "bg-primary-darkGreen  justify-start text-white-white "
              } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
            >
              <Image
                src={
                  router.pathname.startsWith("/discussions")
                    ? "/icons/dashboard_active.svg"
                    : "/icons/dashboard.svg"
                }
                alt="dashboard"
                draggable="false"
                width="24"
                height="24"
                layout="fixed"
              />
              <h4 className={`${navSize === "small" && "hidden"}  `}>
                Discussions
              </h4>
            </div>
          </Link>
          <Link href="/notifications" passHref>
            <div
              className={`${
                router.pathname.startsWith("/notifications") &&
                "bg-primary-darkGreen  justify-start text-white-white "
              } ' flex items-center gap-x-7  cursor-pointer pl-50  text-gray-text h-70`}
            >
              <Image
                src={
                  router.pathname.startsWith("/notifications")
                    ? "/icons/notification_active.svg"
                    : "/icons/notification.svg"
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
                    ? "/icons/stats.svg"
                    : "/icons/stats_active.svg"
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
                    ? "/icons/analytics_active.svg"
                    : "/icons/analytics.svg"
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
                    ? "/icons/charts.svg"
                    : "/icons/charts.svg"
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
                    ? "/icons/calendar_active.svg"
                    : "/icons/calendar.svg"
                }
                alt="calendar"
                draggable="false"
                width="24"
                height="24"
                layout="fixed"
              />
              <h4 className={`${navSize === "small" && "hidden"}`}>Calendar</h4>
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
                    ? "/icons/contact_active.svg"
                    : "/icons/contact.svg"
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
                    ? "/icons/settings_active.svg"
                    : "/icons/settings.svg"
                }
                alt="settings"
                draggable="false"
                width="24"
                height="24"
                layout="fixed"
              />
              <h4 className={`${navSize === "small" && "hidden"}`}>Settings</h4>
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
            src="/icons/download.svg"
            alt="download"
            draggable="false"
            layout="fixed"
            height="24"
            width="24"
          />
          <p
            className={` ${
              navSize === "small" && " hidden"
            }  ml-17 text-primary-darkGreen border  bg-primary-darkGreen`}
          >
            Upgrade
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
