import React from "react";
import Image from "next/image";

const PerfectScoreNotiTemp = () => {
  return (
    <>
      <div className="bg-white-white h-66 w-full vp-600:hidden grid grid-cols-3 rounded-xs shadow-xs px-24 items-center mb-28">
        <div className="col-span-2 flex items-center ">
          <div className="mr-20 flex items-center justify-center ">
            <Image
              src="/illustrations/perfect_score.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="30"
              height="30"
            />
          </div>
          <h6>
            Getting a perfect score in{" "}
            <span className=" text-primary-blue">“Price action”</span> is just a
            few steps away.
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
      <div className="bg-white-white h-115 w-full vp-600:flex flex-col hidden rounded-xs shadow-xs px-12 items-center mb-28  py-18 justify-between">
        <div className="mb-10 flex items-center ">
          <div className="mr-20 flex items-center justify-center ">
            <Image
              src="/illustrations/perfect_score.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="30"
              height="30"
            />
          </div>
          <h6>
            Getting a perfect score in{" "}
            <span className=" text-primary-blue">“Price action”</span> is just a
            few steps away.
          </h6>
        </div>
        <div className=" border-l-2 border-green-lightGreen flex items-center justify-center  vp-600:border-none">
          <div className=" w-203  vp-600:w-210 bg-blue-inputBlue h-34 rounded px-14 flex items-center justify-center">
            <p className="ml-14">
              <span className="mr-2 text-primary-darkGreen font-medium">
                {" "}
                4{" "}
              </span>
              {}
              posts to go
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfectScoreNotiTemp;
