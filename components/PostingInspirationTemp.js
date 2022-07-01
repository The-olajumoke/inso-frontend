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
}) => {
  return (
    <div className="">
      <div
        className="px-45 flex items-center cursor-pointer  "
        onClick={() => setViewInspirations(false)}
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
        <h6 className="ml-16 text-gray-faintGray">Back</h6>
      </div>
      <h5 className="px-45 my-17 text-black-analText">{title}</h5>
      <div className=" bg-white-white flex items-center px-45 justify-between"></div>
      <div className=" bg-gray-createDisc py-10 px-45">
        <p className=" text-primary-darkGreen mb-7">Instruction</p>
        <h5 className="  text-black-analText  mb-28">{instruction}</h5>

        <p className=" text-primary-darkGreen mb-7">Headers and prompts</p>
        <h5 className="  text-black-analText ">{firstHeading}</h5>
        <p className="mb-40 text-gray-analyticsGray">{firstValue}</p>
        <h5 className="  text-black-analText  ">{secondHeading}</h5>
        <p className="mb-40 text-gray-analyticsGray">{secondValue}</p>
        <h5 className="  text-black-analText  ">{ThirdHeading}</h5>
        <p className="mb-40 text-gray-analyticsGray">{ThirdValue}</p>
      </div>
    </div>
  );
};

export default PostingInspirationTemp;
