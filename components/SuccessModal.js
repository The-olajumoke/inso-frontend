import React from "react";
import Image from "next/image";

const SuccessModal = ({ title, subTitle }) => {
  return (
    <div className="h-62 w-350 px-24 flex items-center shadow-createDiscussion rounded-lg absolute top-10 right-0 bg-white-white z-9999 ">
      <div className="flex justify-center items-center mr-20">
        <Image
          src="/static/icons/success.svg"
          alt="done"
          draggable="false"
          layout="fixed"
          width="30"
          height="30"
        />
      </div>
      <div>
        <p className=" text-black-postInsp">{title}</p>
        <p className=" text-black-postInsp">{subTitle}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
