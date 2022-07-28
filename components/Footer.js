import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-white-white">
      <div className="h-460 relative">
        <div className="flex justify-center">
          <Image
            src="/illustrations/footer_image.svg"
            alt="left overlay"
            draggable="false"
            layout="fixed"
            width="1440"
            height="460"
          />
        </div>
        <div className="absolute bg-transparent top-0 bottom-0 right-0 left-0 pt-144 text-center flex flex-col items-center  vp-600:pt-96 vp-600:items-start vp-600:px-20">
          <div className="">
            <h2
              // style={{ fontSize: "32px" }}
              className="font-medium text-black-postInsp mb-60 mx-0 text-left"
            >
              Say something different
            </h2>
          </div>

          <div className="flex items-center vp-600:flex-col vp-600:gap-8">
            <button className="btn text-xl mr-20 px-42 w-280 h-60">
              Get started
            </button>
            <input
              type="text"
              className="w-280 h-60 px-25 flex justify-center items-center text-xl rounded"
              placeholder="Enter inso code"
            />
          </div>
        </div>
      </div>
      <div
        className="h-93 bg-gray-footerGrey pl-123 pr-146 vp-600:px-20 flex flex-col justify-between 
      items-center"
      >
        <div className="hidden vp-600:flex justify-between items-center w-full">
          <h6 className=" text-black-postInsp">Privacy Policy</h6>
          <h6 className=" text-black-postInsp"> Terms of Use</h6>
        </div>
        <div className="flex items-center justify-between w-full">
          <Image
            src="/images/inso_logo_grey.svg"
            alt="Inso Logo"
            draggable="false"
            layout="intrinsic"
            width="116"
            height="53"
          />
          <h6 className="vp-600:hidden text-black-postInsp">
            Privacy Policy | Terms of Use
          </h6>
          <h6 className=" text-black-postInsp">Copyright 2022 Inso LLC.</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
