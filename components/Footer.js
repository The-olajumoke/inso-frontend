import React from "react";
import Image from "next/image";
import footer_img from "../public/static/illustrations/footer_img.svg";
import styles from "@/styles/Home.module.css";

const Footer = () => {
  return (
    <div className="bg-white-white w-full flex flex-col">
      <div className="h-445  vp-768:h-auto relative flex vp-768:flex-col pl-165 pr-100  vp-768:px-24 vp-600:px-14  justify-between vp-768:py-40">
        <div className="w-1/3 vp-768:w-full   flex items-center">
          <Image
            src={footer_img}
            alt="footer"
            draggable="false"
            layout="intrinsic"
            
          />
        </div>
        <div className=" w-1/2  vp-768:w-full flex flex-col justify-center">
          <div className=" mb-30">
            <h5
              className={`${styles.subHeading} mt-48 font-bold mb-16 vp-768:mb-8`}
            >
              Say something different
            </h5>
            <h4 className=" w-460">Start or join a discussion now.</h4>
          </div>

          <div className="flex items-center vp-600:flex-col vp-600:gap-8">
            <button className=" btn text-xl mr-20 px-42 w-280 h-60">
              Get started for free
            </button>
            <input
              type="text"
              className="w-280 h-60 px-25 flex justify-center items-center text-xl rounded"
              placeholder="Enter inso code"
            />
          </div>
        </div>
      </div>
      <div className="h-93 bg-black-postInsp  pl-123 pr-146 vp-768:px-24 vp-600:px-14 flex flex-col justify-center  items-center">
        <div className="flex items-center justify-between w-full ">
          <div className="">
            <Image
              src="/static/images/inso_logo_yellow.svg"
              alt="Inso Logo"
              draggable="false"
              layout="intrinsic"
              width="116"
              height="53"
              className="hidden"
            />
          </div>
          <h6 className="vp-600:hidden text-white-white">
            Privacy Policy | Terms of Use
          </h6>
          <h6 className=" text-white-white">Copyright 2022 Inso LLC.</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
