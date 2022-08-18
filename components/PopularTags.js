import React from "react";
import styles from "@/styles/viewDiscussion.module.css";
import Image from "next/image";

const PopularTags = () => {
  return (
    <div
      className={`${styles.showValueInsp} absolute px-44 py-34 shadow-lg flex flex-col justify-between  `}
    >
      <div>
        <p className=" text-primary-darkGreen">Instruction</p>
        <h5 className="">
          Analyse this chart to gain insights on how tags are used and how
          frequently they are used.
        </h5>
      </div>
      <div className="w-full">
        <p className=" text-primary-darkGreen mb-1">charts</p>
        <div className="">
          <div className="grid grid-cols-4 items-center mb-23 justify-between">
            <p>Tag 1</p>
            <p>Trending Up</p>
            <div className="flex items-center justify-center">
              

              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655328351/InsoImages/trendingUp_bab0vs.svg"
                alt="trendingUp Chart"
                layout="fixed"
                width="81"
                height="28"
              />
            </div>
            <p className=" text-right">
              {" "}
              <span className=" text-primary-darkGreen">32</span>
              {}times
            </p>
          </div>
          <div className="grid grid-cols-4 items-center mb-23 justify-between">
            <p>Tag 2</p>
            <p>Trending Down</p>
            <div className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655328351/InsoImages/trendingDown_l5cxcj.svg"
                alt="trendingUp Chart"
                layout="fixed"
                width="81"
                height="28"
              />
            </div>
            <p className=" text-right">
              {" "}
              <span className=" text-primary-darkGreen">15</span>
              {}times
            </p>
          </div>
          <div className="grid grid-cols-4 items-center mb-23 justify-between">
            <p>Tag 3</p>
            <p>Random</p>
            <div className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655328653/InsoImages/random_mqp02j.svg"
                alt="trendingUp Chart"
                layout="fixed"
                width="81"
                height="28"
              />
            </div>
            <p className=" text-right">
              {" "}
              <span className=" text-primary-darkGreen">20</span> {}times
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-primary-darkGreen mb-1">Headers and prompts</p>{" "}
        <h5 className=" text-black-analText">Summary</h5>
        <p className=" text-gray-analyticsGray ">
          Summarize your synthesis from the chart above
        </p>
      </div>
    </div>
  );
};

export default PopularTags;
