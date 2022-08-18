import React from "react";
import Image from "next/image";
import track_eng from "../public/illustrations/track_eng.svg";
import track_img from "../public/images/track_img.svg";
import styles from "@/styles/Home.module.css";

const TrackEngagement = () => {
  return (
    <div className=" bg-primary-darkGreen  h-748   relative overflow-hidden flex vp-768:flex-col justify-between items-center pt-70 vp-768:py-40 vp-768:px-24 vp-600:px-14 px-165 vp-600:items-start w-full ">
      <div className=" vp-768:w-full  vp-768:flex vp-768:flex-col vp-768:items-start">
        <div className=" flex justify-center">
          <Image
            src={track_eng}
            alt="Inso Logo"
            draggable="false"
            layout="intrinsic"
            width="103"
            height="103"
          />
        </div>
        <h5
          className={`${styles.subHeading} mt-48 font-bold mb-16 text-white-white`}
        >
          Track engagement
        </h5>
        <h4 className=" w-460">
          Track your discussions are with stats and fun achievement badges
        </h4>
      </div>
      <div className="vp-768:w-full  vp-768:flex vp-768:flex-col vp-768:items-end">
        <Image
          src={track_img}
          alt="host"
          draggable="false"
          layout="intrinsic"
          width="450"
          height="315"
          priority
        />
      </div>
    </div>
  );
};

export default TrackEngagement;
