import React from "react";
import Image from "next/image";

const BadgeNotiTemp = () => {
  return (
    <>
      <div className="bg-white-white h-66 w-full grid grid-cols-3 vp-600:hidden rounded-xs shadow-xs px-24 items-center mb-28">
        <div className="col-span-2 flex items-center ">
          <div className="mr-20 flex items-center justify-center ">
            <Image
              src="/illustrations/badge.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="33"
              height="45"
            />
          </div>
          <h6>
            You are doing great. Just a few more posts to earn your next badge.
          </h6>
        </div>
        <div className=" border-l-2 border-green-lightGreen flex items-center justify-center">
          <div className=" w-205 bg-blue-inputBlue h-34 rounded px-14 flex items-center justify-center">
            <p className="ml-14">
              <span className=" text-primary-darkGreen font-medium"> 4 </span>
              {}
              posts to go
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white-white h-auto w-full hidden vp-600:flex flex-col rounded-xs shadow-xs px-24 items-center mb-28 py-18 justify-between">
        <div className="mb-10 flex items-center ">
          <div className="mr-20 flex items-center justify-center ">
            <Image
              src="/illustrations/badge.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="33"
              height="45"
            />
          </div>
          <h6>
            You are doing great. Just a few more posts to earn your next badge.
          </h6>
        </div>
        <div className=" border-l-2 border-green-lightGreen flex items-center justify-center">
          <div className=" w-203 bg-blue-inputBlue h-34 rounded px-14 flex items-center justify-center">
            <p className="ml-14">
              <span className=" text-primary-darkGreen font-medium"> 4 </span>
              {}
              posts to go
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNotiTemp;
