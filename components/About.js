import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import new_level_image from "../public/images/new_level_image.svg";

const About = () => {
  return (
    <div className=" bg-white-white  h-748 vp-768:h-auto   relative overflow-hidden flex vp-768:flex-col  justify-between items-center vp-768:items-end pt-70 vp-768:px-24 vp-768:py-40 vp-600:px-14  px-165 gap-y-20 ">
      <div className=" vp-768:w-full vp-768:flex vp-768:flex-col vp-768:items-start">
        <div className=" flex justify-center">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1660074394/new_level_w8pmlf.svg"
            alt="Inso Logo"
            draggable="false"
            layout="intrinsic"
            width="103"
            height="103"
            priority
          />
        </div>
        <h5 className={`${styles.subHeading} mt-48 vp-768:mt-0 mb-16`}>
          A whole new level
        </h5>
        <h4 className=" w-460 break-words vp-768:w-auto">
          Now you can experience discussions on a whole new level, with amazing
          new features.
        </h4>
      </div>
      <div className="">
        <Image
          src={new_level_image}
          alt="host"
          draggable="false"
          layout="intrinsic"
          // width="437"
          // height="538"
          priority
        />
      </div>
    </div>
  );
};

export default About;
