import React from "react";
import Image from "next/image";
import add_title from "../public/static/images/add_title.svg";
import write_starter from "../public/static/images/write_starter.svg";
import duration from "../public/static/images/duration.svg";
import styles from "@/styles/Home.module.css";
const InsoCreates = () => {
  return (
    <div className=" h-700 vp-768:h-auto bg-primary-blue pt-157 vp-768:px-24 vp-768:py-45 vp-600:px-14 px-165 flex flex-col items-center ">
      <div className=" flex vp-600:flex-col-reverse vp-600:items-start vp-768:w-full items-center">
        <div className="mr-350 vp-768:mr-60">
          <h4 className={`${styles.subHeading}`}>Create in 3 steps</h4>
          <h4>It only takes a minute.</h4>
        </div>
        <div>
          <Image
            src="/static/illustrations/crooked_arrow.svg"
            alt="arrow"
            draggable="false"
            layout="intrinsic"
            width="108"
            height="97"
          />
        </div>
      </div>
      <div className="mt-90 vp-600:mt-50  flex vp-600:flex-col items-center gap-4 justify-between w-full">
        <div className=" flex flex-col w-330 items-center">
          <h4 className=" text-white-white mb-16">1.{""} Add a title</h4>
          <div className=" flex flex-colder h-140 w-full">
            <Image
              src={add_title}
              alt="host"
              draggable="false"
              layout="intrinsic"
              className=""
            />
          </div>
        </div>
        <div className="w-33 border border-white-white border-r-2"></div>
        <div className=" flex flex-col w-330 items-center">
          <h4 className=" text-white-white mb-16">2.{""} Write a post</h4>
          <div className=" bg-primary-blue flex flex-colder h-140 w-full">
            <Image
              src={write_starter}
              alt="host"
              draggable="false"
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w-33 border border-white-white border-r-2"></div>
        <div className=" flex flex-col w-330 items-center">
          <h4 className=" text-white-white mb-16">3.{""} Set a duration</h4>
          <div className="flex flex-colder h-140 w-full">
            <Image
              src={duration}
              alt="host"
              draggable="false"
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsoCreates;
