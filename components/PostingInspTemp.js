import React from "react";
import Image from "next/image";

const PostingInspTemp = ({
  title,
  icon,
  setActiveViewInspiration,
  setViewInspirations,
}) => {
  return (
    <div
      className="mb-7 flex items-center justify-between h-45 w-full px-20 py-9 bg-blue-lightBlue rounded-lg text-lg
      text-gray-text outline-none cursor-pointer"
    >
      <div className="flex items-center">
        <div className=" flex items-center justify-center">
          <Image
            src={`${icon}`}
            alt={title}
            layout="fixed"
            width="16"
            height="16"
          />
        </div>
        <h6
          className="ml-16 text-black-analText"
          onClick={() => {
            setViewInspirations(true);
            setActiveViewInspiration(`${title}`);
          }}
        >
          {title}
        </h6>
      </div>
    </div>
  );
};

export default PostingInspTemp;
