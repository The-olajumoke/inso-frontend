import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";
const Offers = () => {
  return (
    <div className="pl-163 pr-139 py-70 vp-1024:px-46 vp-600:px-20">
      <h2 className=" text-primary-darkGreen font-medium mb-102 vp-600:mb-50 text-center">
        What Inso offers
      </h2>
      <div className="flex  vp-768:flex-col  vp-768:items-start justify-between items-center mb-100 vp-768:mb-80">
        <div className="w-260   ">
          <h3 className="mb-40" style={{ lineHeight: "36.3px" }}>
            Host and join interesting and engaging discussions
          </h3>
          <div className={`${styles.line}`}></div>
        </div>
        <div className="vp-768:w-full vp-768:flex justify-end vp-768:mt-50">
          <Image
            src="/illustrations/host_image.svg"
            alt="host"
            draggable="false"
            layout="intrinsic"
            width="437"
            height="538"
          />
        </div>
      </div>
      <div className="flex justify-between items-center vp-768:flex-col  vp-768:items-start mb-110 vp-768:mb-80">
        <div className="w-350 ">
          <h3 className="mb-40" style={{ lineHeight: "36.3px" }}>
            Experience true freedom of expression with flexible setting and
            numerous messages styles.
          </h3>
          <div className={`${styles.line}`}></div>
        </div>
        <div className="vp-768:w-full vp-768:flex justify-end vp-768:mt-50">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655327414/InsoImages/settings_image_istqqr.svg"
            alt="host"
            draggable="false"
            layout="intrinsic"
            width="601"
            height="422"
          />
        </div>
      </div>
      <div className="flex justify-between items-center vp-768:flex-col  vp-768:items-start vp-768:mb-80  ">
        <div className="w-350 ">
          <h3 className="mb-40" style={{ lineHeight: "36.3px" }}>
            Track how interesting your discussions are with stats and fun
            achievement badges
          </h3>
          <div className={`${styles.line}`}></div>
        </div>
        <div className="vp-768:w-full vp-768:flex justify-end vp-768:mt-50">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655327444/InsoImages/Track_image_cc0sxc.svg"
            alt="host"
            draggable="false"
            layout="intrinsic"
            width="580"
            height="406"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
