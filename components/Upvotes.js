import React from "react";
import Image from "next/image";

const Upvotes = () => {
  return (
    <div className=" flex pt-25 items-start">
      <div className="mr-25 flex items-start  pt-5">
        <Image
          src="/icons/upvote.svg"
          alt="upvote"
          draggable="false"
          layout="intrinsic"
          width="19"
          height="19"
        />
      </div>
      <div className="border-b border-gray-analyticsGray w-full pb-25">
        <h6 className="mb-7">
          <span className=" text-primary-darkGreen">@patrick </span> upvoted
          your post in {}
          <span className=" text-primary-blue">Price action</span>
        </h6>
        <p className="  text-gray-text w-613 mb-7">
          This reply is a reply made by the user to the main post and is
          possibly now a thread.
        </p>
        <span className=" text-xs text-gray-analyticsGray">
          posted 3 mins ago
        </span>
      </div>
    </div>
  );
};

export default Upvotes;
