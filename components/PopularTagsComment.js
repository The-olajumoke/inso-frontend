import React from "react";
import Image from "next/image";
import ShowInspirations from "./ShowInspirations";
const PopularTagsComment = ({ setActiveCommentBox }) => {
  return (
    <div className="border border-primary-darkGreen rounded-lg  mb-32  ">
      <div className="py-24 px-29 ">
        <div className="  flex items-center mb-12 w-full border-b pb-15 border-green-lightGreen">
          <div className="flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1655333490/info_outline_exdgeh.svg"
              alt="back"
              layout="fixed"
              width="24"
              height="24"
              className=" cursor-pointer"
            />
          </div>
          <h6 className=" text-primary-darkGreen ml-14">
            Analyse this chart to gain insights on how tags are used and how
            frequently they are used.{" "}
          </h6>
        </div>
        <div className="w-full mb-15">
          <p className=" text-primary-darkGreen mb-1">charts</p>
          <div className="">
            <div className="flex gap-8 items-center mb-23">
              <p className="w-100 text-black-analText">Tag 1</p>
              <p className="w-100 text-black-analText">Trending Up</p>
              <div className="flex items-center justify-center  w-100">
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1655328351/InsoImages/trendingUp_bab0vs.svg"
                  alt="trendingUp Chart"
                  layout="fixed"
                  width="81"
                  height="28"
                />
              </div>
              <p className="w-100 text-black-analText">
                {" "}
                <span className=" text-primary-darkGreen font-medium">32</span>
                {} times
              </p>
            </div>
            <div className="flex gap-8 items-center mb-23">
              <p className="w-100 text-black-analText">Tag 2</p>
              <p className="w-100 text-black-analText">Trending Down</p>
              <div className="flex items-center justify-center w-100">
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1655328351/InsoImages/trendingDown_l5cxcj.svg"
                  alt="trendingUp Chart"
                  layout="fixed"
                  width="81"
                  height="28"
                />
              </div>
              <p className="w-100 text-black-analText">
                {" "}
                <span className=" text-primary-darkGreen font-medium">15</span>
                {} times
              </p>
            </div>
            <div className="flex gap-8 items-center mb-23">
              <p className="w-100 text-black-analText">Tag 3</p>
              <p className="w-100 text-black-analText">Random</p>
              <div className="flex items-center justify-center w-100">
                <Image
                  src="https://res.cloudinary.com/insomaryland/image/upload/v1655328653/InsoImages/random_mqp02j.svg"
                  alt="trendingUp Chart"
                  layout="fixed"
                  width="81"
                  height="28"
                />
              </div>
              <p className="w-100 text-black-analText">
                {" "}
                <span className=" text-primary-darkGreen font-medium">
                  20
                </span>{" "}
                {}times
              </p>
            </div>
          </div>
        </div>

        <div className=" mb-32">
          <h6 className=" text-black-analText">Summary</h6>
          <input
            type="text"
            className="h-35 bg-transparent outline-none w-full text-sm border-none focus:ring-0 px-0 "
            placeholder="Summarize your synthesis from the chart above"
          />
        </div>
      </div>
      <ShowInspirations setActiveCommentBox={setActiveCommentBox} />
    </div>
  );
};

export default PopularTagsComment;
