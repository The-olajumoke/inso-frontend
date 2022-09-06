import React from "react";
import Image from "next/image";
import post_with_ease from "../public/static/illustrations/post_with_ease.svg";
import post_image from "../public/static/images/post_image.svg";
import styles from "@/styles/Home.module.css";

const PostWithEase = () => {
  return (
    <div className=" bg-white-white h-660  relative overflow-hidden flex vp-768:flex-col justify-between items-center pt-70 vp-768:py-40 vp-768:px-24 vp-600:px-14 px-165 vp-600:items-start w-full">
      <div className="   vp-768:w-full  vp-768:flex vp-768:flex-col vp-768:items-start">
        <div className=" flex justify-center">
          <Image
            src={post_with_ease}
            alt="Inso Logo"
            draggable="false"
            layout="intrinsic"
            width="103"
            height="103"
          />
        </div>
        <h5
          className={`${styles.subHeading} mt-48 vp-768:mt-24 font-bold mb-16 vp-768:mb-4`}
        >
          Post with ease
        </h5>
        <h4 className=" w-460 vp-768:w-auto">
          Post with flexible setting and numerous messages styles.
        </h4>
      </div>
      <div className=" vp-768:w-full  vp-768:flex vp-768:flex-col vp-768:items-end ">
        <Image
          src={post_image}
          alt="host"
          draggable="false"
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default PostWithEase;
