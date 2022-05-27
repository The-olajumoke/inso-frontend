import React from "react";
import Image from "next/image";

const Polls = ({ setActiveSection }) => {
  return (
    <div className="">
      <div className=" bg-white-white h-89 flex items-center px-45 justify-between">
        <div className="flex items-center">
          <button
            className="flex items-center justify-center"
            onClick={() => setActiveSection("postInspiration")}
          >
            <Image
              src="/icons/arrow_left_green.svg"
              alt="back"
              layout="fixed"
              width="20"
              height="20"
            />
          </button>
          <h3 className="ml-30  font-medium">Polls</h3>
        </div>
        <button onClick={() => setActiveSection("postInspiration")}>
          <Image
            src="/icons/cancel.svg"
            alt="cancel"
            layout="fixed"
            width="17"
            height="17"
          />
        </button>
      </div>
      <div className=" bg-gray-createDisc py-24 px-45">
        <p className=" text-primary-darkGreen mb-7">Instruction</p>
        <h5 className=" text-gray-text  mb-28">
          Create a poll that encourages further discussion about a specific
          concept related to this topic
        </h5>

        <p className=" text-primary-darkGreen mb-7">Headers and prompts</p>
        <h5 className=" text-gray-text ">Resource name</h5>
        <p className="mb-40 text-border-dropdownLine">
          Paste a link to the resource
        </p>
        <h5 className=" text-gray-text  ">Summary</h5>
        <p className="mb-40 text-border-dropdownLine">
          Summarize the content of the the resource
        </p>
        <h5 className=" text-gray-text  ">Connections</h5>
        <p className="mb-40 text-border-dropdownLine">
          Identify specific course concept in the resource
        </p>
      </div>
    </div>
  );
};

export default Polls;
