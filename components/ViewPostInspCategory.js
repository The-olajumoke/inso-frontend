import React from "react";
import Image from "next/image";
import PostingInspTemp from "./PostingInspTemp";
import ViewInspTemp from "./ViewInspTemp";
import Link from "next/link";

const ViewPostInspCategory = ({
  inspiration,
  setViewInspirations,
  setActiveCommentBox,
  togglePostInsp,
  setActivePostInspId,
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
              src="/static/icons/arrow_left_blue.svg"
              alt="back"
              layout="fixed"
              width="16"
              height="16"
            />
          </div>
          <p className="ml-16 text-gray-analyticsGray">back</p>
        </div>

        <div
          className="flex justify-center items-center"
          onClick={togglePostInsp}
        >
          <p className=" text-primary-blue mr-10">View in full</p>
          <Image
            src="/static/icons/viewInFull.svg"
            alt="post inspiration in full"
            layout="fixed"
            width="15"
            height="21"
          />
        </div>
      </div>
      <div className=" flex-grow">
        <h6
          className={` mb-14 ${
            (inspiration.category === "Ask Something" ||
              inspiration.category === "Add") &&
            "text-gray-bold"
          }
      ${
        (inspiration.category === "Connect Something" ||
          inspiration.category === "Answer") &&
        " text-green-boldGreen"
      }
      ${
        (inspiration.category === "Create Something" ||
          inspiration.category === "Ask") &&
        "  text-other-boldOrange"
      }
      ${
        (inspiration.category === "Share Something" ||
          inspiration.category === "Evaluate") &&
        " text-other-boldRed"
      }
      ${
        (inspiration.category === "Start Something" ||
          inspiration.category === "React") &&
        " text-primary-darkGreen"
      }`}
        >
          {inspiration.category}:
        </h6>
        {inspiration.inspirations.map((insp, index) => (
          <ViewInspTemp
            key={index}
            title={insp.name}
            icon={insp.icon}
            inspId={insp._id}
            setActiveCommentBox={setActiveCommentBox}
            setActivePostInspId={setActivePostInspId}
            // setActiveViewInspiration={setActiveViewInspiration}
            // setViewInspirations={setViewInspirations}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewPostInspCategory;
