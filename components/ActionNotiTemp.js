import React from "react";
import Image from "next/image";

const ActionNotiTemp = () => {
  return (
    <>
      <div className="bg-white-white h-66  w-full vp-600:hidden grid grid-cols-3 rounded-xs shadow-xs px-24 items-center mb-28">
        <div className="col-span-2 flex items-center ">
          <div className="mr-20 flex items-center justify-center ">
            <Image
              src="/illustrations/action.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="30"
              height="30"
            />
          </div>
          <h6>
            Get in on the action as{" "}
            <span className=" text-primary-blue">“Price action”</span> is about
            come to an end.
          </h6>
        </div>
        <div className=" border-l-2 border-green-lightGreen flex items-center justify-center">
          <div className=" w-203 bg-other-lightRed h-34 rounded px-14 flex items-center justify-center">
            <Image
              src="/icons/clock.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="16"
              height="16"
            />
            <p className="ml-14">
              <span className=" text-other-danger font-medium">14</span> days to
              close date
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white-white h-115 w-full hidden vp-600:flex flex-col rounded-xs shadow-xs px-24 items-center py-18 justify-between mb-28">
        <div className="mb-10 flex items-center ">
          <div className="mr-20 flex items-center justify-center ">
            <Image
              src="/illustrations/action.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="30"
              height="30"
            />
          </div>
          <h6>
            Get in on the action as{" "}
            <span className=" text-primary-blue">“Price action”</span> is about
            come to an end.
          </h6>
        </div>
        <div className=" border-l-2 border-green-lightGreen flex items-center justify-center">
          <div className=" w-203 bg-other-lightRed h-34 rounded px-14 flex items-center justify-center">
            <Image
              src="/icons/clock.svg"
              alt=" Discussion dropdown "
              draggable="false"
              layout="fixed"
              width="16"
              height="16"
            />
            <p className="ml-14">
              <span className=" text-other-danger font-medium">14</span> days to
              close date
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionNotiTemp;
