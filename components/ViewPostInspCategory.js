import React from "react";
import Image from "next/image";
import PostingInspTemp from "./PostingInspTemp";
import ViewInspTemp from "./ViewInspTemp";

const ViewPostInspCategory = ({ inspiration, setViewInspirations }) => {
  return (
    <div className=" flex-grow">
      <div
        className="px-45 flex items-center cursor-pointer mb-20 "
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
        <h6 className="ml-16 text-gray-analyticsGray">back</h6>
      </div>
      <div className=" flex-grow">
        <h4 className=" text-primary-darkGreen mb-14">
          {inspiration.category}:
        </h4>
        {inspiration.inspirations.map((insp, index) => (
          <ViewInspTemp
            key={index}
            title={insp.title}
            icon={insp.icon}
            // setActiveViewInspiration={setActiveViewInspiration}
            // setViewInspirations={setViewInspirations}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewPostInspCategory;
