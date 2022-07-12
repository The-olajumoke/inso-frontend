import React from "react";
import Image from "next/image";
import PostingInspTemp from "./PostingInspTemp";
import ViewInspTemp from "./ViewInspTemp";
import Link from "next/link";

const ViewPostInspCategory = ({
  inspiration,
  setViewInspirations,
  setActiveCommentBox,
}) => {
  return (
    <div className=" flex-grow ">
      <div
        className="flex items-center justify-between cursor-pointer mb-20 "
        onClick={() => setViewInspirations(false)}
      >
        <div className="flex items-center">
          <div className="flex justify-between w-full items-center">
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1657550652/arrow_left_green_mrrpsi.svg"
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
          <p className="ml-16 text-gray-analyticsGray">back</p>
        </div>

        <Link passHref href="/discussions/view-discussion/post-inspirations">
          <div className="flex justify-center items-center">
            <p className=" text-primary-blue mr-10">View in full</p>
            <Image
              src="https://res.cloudinary.com/insomaryland/image/upload/v1657549596/viewInFull_tw4vq9.svg"
              alt="post inspiration in full"
              layout="fixed"
              width="15"
              height="21"
            />
          </div>
        </Link>
      </div>
      <div className=" flex-grow">
        <h6 className=" text-primary-darkGreen mb-14">
          {inspiration.category}:
        </h6>
        {inspiration.inspirations.map((insp, index) => (
          <ViewInspTemp
            key={index}
            title={insp.title}
            icon={insp.icon}
            setActiveCommentBox={setActiveCommentBox}
            // setActiveViewInspiration={setActiveViewInspiration}
            // setViewInspirations={setViewInspirations}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewPostInspCategory;
