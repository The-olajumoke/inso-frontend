import React from "react";
import Image from "next/image";
const StatsTableRow = ({ stat }) => {
  const { post, set, time, views, upvotes, reply, emojis } = stat;

  return (
    <div className=" h-40 grid grid-cols-10 gap-4 mt-15 ">
      {" "}
      <div className=" col-span-4 flex  items-center ">
        {post ? (
          <p className=" text-gray-text overflow-x-auto">{post}</p>
        ) : (
          <div className=" flex items-center border text-black-analText border-other-disabled rounded-xs h-30 px-8 bg-gray-background  ">
            <p className="mr-10">{set}</p>
            <div className=" flex  items-center justify-center">
              <Image
                src="/icons/arrow_right_green.svg"
                alt=" Discussion set "
                draggable="false"
                layout="fixed"
                width="10"
                height="10"
              />
            </div>
          </div>
        )}
      </div>
      <div className=" col-span-2 flex items-center justify-center">
        <span className="  text-gray-faintGray">{time}</span>
      </div>
      <div className="flex justify-center items-center">
        <p className=" text-primary-darkGreen">{views}</p>
      </div>
      <div className="flex justify-center items-center">
        <p className=" text-primary-darkGreen">{upvotes}</p>
      </div>
      <div className="flex justify-center items-center">
        <p className=" text-primary-darkGreen">{reply}</p>
      </div>
      <div className="flex justify-center items-center">
        <p className=" text-primary-darkGreen">{emojis}</p>
      </div>
    </div>
  );
};

export default StatsTableRow;
