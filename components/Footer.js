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
        <div className="absolute bg-transparent top-0 bottom-0 right-0 left-0 pt-144 text-center flex flex-col items-center">
          <h2
            style={{ fontSize: "36px" }}
            className="font-medium text-gray-text mb-60"
          >
            Say something different
          </h2>

          <div className="flex items-center">
            <button className="btn text-xl mr-20 px-42 w-262 h-60">
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
      <div className="h-93 bg-gray-footerGrey pl-123 pr-146 flex justify-between items-center">
        <Image
          src="/images/inso_logo_grey.svg"
          alt="Inso Logo"
          draggable="false"
          layout="intrinsic"
          width="116"
          height="53"
        />
        <h6 className=" text-gray-text">Privacy Policy | Terms of Use</h6>
        <h6 className=" text-gray-text">Copyright 2022 Inso LLC.</h6>
      </div>
    </div>
  );
};

export default Footer;
