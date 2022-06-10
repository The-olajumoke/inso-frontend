import React from "react";
import Image from "next/image";
const Mention = () => {
  return (
    <div className="flex pt-25 items-start">
      <div className="mr-25 flex items-start  pt-5">
        <Image
          src="/icons/mention.svg"
          alt="mention"
          draggable="false"
          layout="intrinsic"
          width="19"
          height="19"
        />
      </div>
      <div className="border-b border-gray-analyticsGray w-full pb-25 ">
        {" "}
        <h6 className="mb-7">
          <span className=" text-primary-darkGreen">@patrick</span> mentioned
          you in <span className=" text-primary-blue">Price action</span>
        </h6>
        <p className=" text-gray-text  w-613 vp-768:w-auto mb-7">
          I’m more concerned about the opinions of environmentalists.
        </p>
        <span className=" text-xs text-gray-analyticsGray">3 mins ago</span>
      </div>
    </div>
  );
};

export default Mention;
