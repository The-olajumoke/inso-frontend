import React from "react";
import Image from "next/image";

const PostingInspirationTemp = ({
  setViewInspirations,
  instruction,
  title,
  firstHeading,
  firstValue,
  secondHeading,
  secondValue,
  ThirdHeading,
  ThirdValue,
  moveBack,
}) => {
  return (
    <div className="">
      <div
        className="px-16 vp-min-601:px-30 flex items-center cursor-pointer h-30 "
        // onClick={() => setViewInspirations(false)}
        onClick={moveBack}
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
        <p className="ml-16 text-gray-faintGray">Back</p>
      </div>
      <p className="px-16 vp-min-601:px-30 mt-17 mb-13 text-black-analText">
        {title}
      </p>
      <div className=" bg-white-white flex items-center px-16 vp-min-601:px-30 justify-between"></div>
      <div className=" bg-gray-createDisc py-10 px-16 vp-min-601:px-30 pr-10 ">
        <span className=" text-primary-darkGreen mb-4 text-xs">
          Instruction
        </span>
        <p className=" text-xs vp-600:text-sm  text-black-analText  mb-25">
          {instruction}
        </p>

        <span className=" text-primary-darkGreen mb-4 text-xs">
          Headers and prompts
        </span>
        <p className="  text-black-analText ">{firstHeading}</p>
        <span className=" text-gray-analyticsGray text-xs">{firstValue}</span>
        <p className="mt-25 text-black-analText  ">{secondHeading}</p>
        <span className="text-gray-analyticsGray text-xs">{secondValue}</span>
        <p className="mt-25  text-black-analText  ">{ThirdHeading}</p>
        <span className=" text-gray-analyticsGray text-xs">{ThirdValue}</span>
      </div>
    </div>
  );
};

export default PostingInspirationTemp;
