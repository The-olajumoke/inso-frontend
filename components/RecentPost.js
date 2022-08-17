import React from "react";
import Image from "next/image";
import { parse } from "postcss";
const RecentPost = ({ notification }) => {
  const { notificationHeader, notificationText } = notification;
  return (
    <div className=" flex pt-25 items-start ">
      <div className="mr-25 flex items-start  pt-5">
        <Image
          src="/icons/discussion_green.svg"
          alt="discussion"
          draggable="false"
          layout="intrinsic"
          width="19"
          height="19"
        />
      </div>
      <div className="border-b border-gray-analyticsGray w-full pb-25 ">
        {/* <h6 className="mb-7">
          Recent post from{" "}
          <span className=" text-primary-darkGreen">@dante</span> in{" "}
          <span className=" text-primary-blue">Price action</span>
        </h6> */}
        {/* {parse(notificationHeader)} */}
        {/* <p className=" text-gray-text w-613  mb-7 vp-768:w-auto ">
          Currently, Government agencies are discussing the dangers of dumping
          nuclear water into the ocean.
        </p> */}
        {/* {notificationText} */}
        {/* {parse(notificationText)} */}
        <p className=" text-xs text-gray-analyticsGray">3 mins ago</p>
      </div>
    </div>
  );
};

export default RecentPost;
