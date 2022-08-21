import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";
import styles from "@/styles/layout.module.css";

import Layout from "@/components/Layout";
import RecentPost from "@/components/RecentPost";
import Mention from "@/components/Mention";
import Upvotes from "@/components/Upvotes";
import Replied from "@/components/Replied";
import ActionNotiTemp from "@/components/ActionNotiTemp";
import PerfectScoreNotiTemp from "@/components/PerfectScoreNotiTemp";
import { GlobalContext } from "@/context/Provider";
import BadgeNotiTemp from "@/components/BadgeNotiTemp";
import { API_URL } from "@/utils/url";
import { getNotifications } from "@/context/actions/notification/getNotifications";
import LargeSpinner from "@/components/LargeSpinner";
import Link from "next/link";
const Notifications = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [notificationData, setNotificationData] = useState([]);

  const {
    userDispatch,
    userState: {
      user: { profileData },
    },
  } = useContext(GlobalContext);
  const {
    notificationDispatch,
    notificationState: {
      notification: { loading, data },
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
    }
  }, [profileData]);
  useEffect(() => {
    if (userId !== null && token !== "") {
      getNotifications(API_URL, token, userId)(notificationDispatch);
    }
  }, [userId, token]);
  useEffect(() => {
    if (data !== null) {
      setNotificationData(data);
    }
  }, [data]);
  return (
    <Layout title="Inso | Notifications" bgColor="bg-gray-background">
      <div
        className={`${styles.hiddenScrollbar} pt-40 pb-25 px-40 vp-600:p-23 vp-980:p-46 h-full`}
      >
        <div className="flex items-center justify-between vp-980:hidden">
          <h4 className=" text-primary-darkGreen mb-35">Notifications</h4>
          <Image
            src="/icons/more_icon_grey.svg"
            alt=" Discussion dropdown "
            draggable="false"
            layout="fixed"
            width="5"
            height="20"
          />
        </div>
        <div className="items-center  h-50 mb-12 hidden vp-980:flex">
          <Link href="/discussions" passHref>
            <div className="flex justify-center items-center mr-23">
              <Image
                src="/static/icons/arrow_back_blue.svg"
                alt=" Discussion dropdown "
                draggable="false"
                layout="fixed"
                width="30"
                height="30"
              />
            </div>
          </Link>
          <h4 className=" text-black-analText">Notifications</h4>
        </div>

        {/* <div className="hidden">
          <ActionNotiTemp />
          <PerfectScoreNotiTemp />
          <BadgeNotiTemp />
          <Replied />
          <Mention />
          <Replied />
          <Upvotes />
        </div> */}

        {loading ? (
          <div className="flex items-center justify-center h-[40vh] mt-40">
            <LargeSpinner />
          </div>
        ) : notificationData.length ? (
          <div className="flex justify-start flex-wrap">
            {notificationData.map((notif, index) => (
              <RecentPost notification={notif} key={index} />
            ))}
          </div>
        ) : (
          <div className=" flex flex-col items-center justify-end h-400 ">
            <Image
              src="/static/illustrations/no_discussion.svg"
              alt="no discussion"
              layout="fixed"
              width="128"
              height="128"
            />
            <h6 className=" text-gray-illustrationText">No notifications</h6>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Notifications;
