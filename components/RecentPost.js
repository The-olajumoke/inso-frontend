import React from "react";
import Image from "next/image";
const parse = require("html-react-parser");
const RecentPost = ({ notification }) => {
  const { notificationHeader, notificationText } = notification;
  return (
    <div className=" flex pt-10 items-start w-full first:pt-0">
      <div className="mr-25 mt-10 flex items-start  pt-5 vp-980:mr-12">
        <Image
          src="https://res.cloudinary.com/insomaryland/image/upload/v1659963398/disc_inactive_gb4ka8.svg"
          alt="discussion"
          draggable="false"
          layout="intrinsic"
          width="28"
          height="28"
        />
      </div>

      <div className="border-b border-gray-analyticsGray w-full pb-10 ">
        <div className="notif_header "> {parse(notificationHeader)}</div>
        <div className="notif_subHeader "> {parse(notificationText)}</div>
        <p className=" text-xs text-gray-analyticsGray">3 mins ago</p>
      </div>
    </div>
  );
};

export default RecentPost;
