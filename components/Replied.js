import React from "react";
import Image from "next/image";

const Replied = () => {
  return (
    <div className=" flex pt-25 items-start">
      <div className="mr-25 flex items-start  pt-5">
        <Image
          src="/icons/discussion_green.svg"
          alt="reply"
          draggable="false"
          layout="intrinsic"
          width="19"
          height="19"
        />
      </div>
      <div className="border-b border-gray-analyticsGray w-full pb-25 ">
        <div className="">
          <Image
            src="/images/allAvatars.svg"
            alt="avatars"
            draggable="false"
            layout="intrinsic"
            width="95"
            height="30"
          />
        </div>
        <h6 className="mb-7">
          <span className=" text-primary-darkGreen">@patrick </span>
          and 5 others replied to your post in {}
          <span className=" text-primary-blue">Price action</span>
        </h6>
        <p className="  text-gray-text w-613 vp-768:w-auto mb-7">
          Currently, Government agencies are discussing the dangers of dumping
          nuclear water into the ocean.
        </p>
        <span className=" text-xs text-gray-analyticsGray">3 mins ago</span>
      </div>
    </div>
  );
};

export default Replied;
