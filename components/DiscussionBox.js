import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const DiscussionBox = ({ discussion }) => {
  const { id, userName, users, title, date, code } = discussion;
  const [dropdown, setOpenDropdown] = useState(false);
  return (
    <Link passHref href={`/discussions/view-discussion/${id}`}>
      <div
        // style={{ width: "320px" }}
        className="vp-600:w-full vp-600:h-110  w-300 vp-980:flex-grow bg-white-white rounded-sm shadow-xs p-14  flex flex-col relative justify-between"
      >
        <div className=" flex items-start justify-between mb-15">
          <div className=" w-210">
            <h5 className=" text-gray-text font-medium p-0 m-0">{title}</h5>
          </div>

          <div className="flex items-center">
            {" "}
            <div className=" flex justify-center items-center mr-10">
              <Image
                src="/icons/notifications_active.svg"
                alt="copy"
                layout="fixed"
                width="14"
                height="14"
              />
            </div>
            <div className=" flex justify-center items-center">
              <Image
                src="/icons/active_disc.svg"
                alt="copy"
                layout="fixed"
                width="12"
                height="12"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span className=" text-xs text-gray-analyticsGray">
            by {userName}
          </span>
          <div className="flex justify-center">
            <Image
              src="/icons/users_icon.svg"
              alt="copy"
              layout="fixed"
              width="20"
              height="20"
            />
            <p className=" text-black-postInsp ml-5">{users}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DiscussionBox;
