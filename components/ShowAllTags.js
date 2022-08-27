import React from "react";
import Image from "next/image";
const parse = require("html-react-parser");
import cancel from "../public/static/icons/cancel.svg";
const ShowAllTags = ({ setViewAllTags, allTags }) => {
  return (
    <div className="border-l-2 w-252 border-primary-darkGreen">
      <div className=" mb-22 border-b-2 border-other-disabled p-24  flex justify-between items-center">
        <p className="text-primary-darkGreen">Trending tags (6)</p>
        <div
          className="flex justify-center items-center"
          onClick={() => setViewAllTags(false)}
        >
          <Image
            src={cancel.src}
            alt="cancel"
            layout="fixed"
            width="14"
            height="14"
          />
        </div>
      </div>
      <div className="px-24">
        {allTags.map((tag, index) => (
          <div
            className="h-32 mb-10 bg-blue-inputBlue flex mr-10 gap-8 items-center px-15 rounded-xs w-189"
            key={index}
          >
            <p className=" text-gray-text  flex">#{parse(tag.tag)}</p>
            <p className="ml-16 text-primary-blue">{tag.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllTags;
