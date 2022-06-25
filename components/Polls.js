import React from "react";
import Image from "next/image";

const Polls = ({ setViewInspirations }) => {
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
      <h5 className="px-45 my-17 text-black-analText">Polls</h5>
      <div className=" bg-gray-createDisc py-10 px-45">
        <p className=" text-primary-darkGreen mb-7">Instruction</p>
        <h5 className=" text-black-analText  mb-28">
          Create a poll that encourages further discussion about a specific
          concept related to this topic
        </h5>

        <p className=" text-primary-darkGreen mb-7">Headers and prompts</p>
        <h5 className=" text-black-analText ">Resource name</h5>
        <p className="mb-40 text-border-dropdownLine">
          Paste a link to the resource
        </p>
        <h5 className=" text-black-analText  ">Summary</h5>
        <p className="mb-40 text-border-dropdownLine">
          Summarize the content of the the resource
        </p>
        <h5 className=" text-black-analText  ">Connections</h5>
        <p className="mb-40 text-border-dropdownLine">
          Identify specific course concept in the resource
        </p>
      </div>
    </div>
  );
};

export default Polls;
