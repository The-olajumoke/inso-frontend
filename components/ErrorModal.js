import React from "react";
import Image from "next/image";
const ErrorModal = ({ title, subTitle }) => {
  return (
    <div className="h-62 w-auto px-24 flex items-center shadow-createDiscussion rounded-lg absolute top-10 right-0 bg-white-white z-9999 ">
      <div className="flex justify-center items-center mr-20">
        <Image
          src="/static/icons/error.svg"
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

export default ErrorModal;
