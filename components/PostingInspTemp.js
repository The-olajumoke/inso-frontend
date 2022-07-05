import React from "react";
import Image from "next/image";

const PostingInspTemp = ({
  title,
  setActiveViewInspiration,
  setViewInspirations,
}) => {
  return (
    <div
      className="mb-7 flex items-center justify-between h-45 w-full px-20 py-9 bg-blue-lightBlue rounded-lg text-lg
      text-gray-text outline-none cursor-pointer"
    >
      <div className="flex items-center">
        <h6
          className="text-black-analText"
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
