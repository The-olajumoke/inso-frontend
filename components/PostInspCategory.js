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
    <div className="">
      <div
        className="px-16 vp-min-601:px-30 flex items-center cursor-pointer mb-12  "
        onClick={() => setShowDetailedInsp(false)}
      >
        <div className="flex justify-center items-center">
          <Image
            src="/icons/arrow_left_green.svg"
            alt="back"
            layout="fixed"
            width="12"
            height="12"
          />
        </div>
        <p className="ml-16 text-gray-faintGray">back</p>
      </div>
      <div className="px-16 vp-min-601:px-30 flex-grow">
        <h6 className=" text-primary-darkGreen mb-10">
          {inspiration.category}:
        </h6>
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
