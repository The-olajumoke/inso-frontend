import React from "react";
import Image from "next/image";
import PostingInspTemp from "./PostingInspTemp";

const PostInspCategory = ({
  inspiration,
  setActiveViewInspiration,
  setViewInspirations,
  setShowDetailedInsp,
}) => {
  console.log(inspiration);
  return (
    <div className=" flex-grow">
      <div
        className="px-45 flex items-center cursor-pointer mb-20 "
        onClick={() => setShowDetailedInsp(false)}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/icons/arrow_left_green.svg"
            alt="back"
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <h6 className="ml-16 text-gray-faintGray">back</h6>
      </div>
      <div className="px-45 flex-grow">
        <h4 className=" text-primary-darkGreen mb-14">
          {inspiration.category}:
        </h4>
        {inspiration.inspirations.map((insp, index) => (
          <PostingInspTemp
            key={index}
            title={insp.title}
            icon={insp.icon}
            setActiveViewInspiration={setActiveViewInspiration}
            setViewInspirations={setViewInspirations}
          />
        ))}
      </div>
    </div>
  );
};

export default PostInspCategory;
