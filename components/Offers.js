import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";
const Offers = () => {
  return (
    <div className="pl-163 pr-139 py-70">
      <h2 className=" text-primary-darkGreen font-medium mb-102 text-center">
        What Inso offers
      </h2>
      <div className="flex justify-between items-center mb-100">
        <div className="w-260 ">
          <h3 className="mb-40" style={{ lineHeight: "36.3px" }}>
            Host and join interesting and engaging discussions
          </h3>
          <div className={`${styles.line}`}></div>
        </div>
        <div className="">
          <Image
            src="/illustrations/host_image.svg"
            alt="host"
            draggable="false"
            layout="fixed"
            width="437"
            height="538"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-110">
        <div className="w-350 ">
          <h3 className="mb-40" style={{ lineHeight: "36.3px" }}>
            Experience true freedom of expression with flexible setting and
            numerous messages styles.
          </h3>
          <div className={`${styles.line}`}></div>
        </div>
        <div className="">
          <Image
            src="/illustrations/settings_image.svg"
            alt="host"
            draggable="false"
            layout="fixed"
            width="601"
            height="422"
          />
        </div>
      </div>
      <div className="flex justify-between items-center  ">
        <div className="w-350 ">
          <h3 className="mb-40" style={{ lineHeight: "36.3px" }}>
            Track how interesting your discussions are with stats and fun
            achievement badges
          </h3>
          <div className={`${styles.line}`}></div>
        </div>
        <div className="">
          <Image
            src="/illustrations/Track_image.svg"
            alt="host"
            draggable="false"
            layout="fixed"
            width="580"
            height="406"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
