import React from "react";
import Image from "next/image";

const Resources = ({ setViewInspirations }) => {
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
      <h5 className="px-45 my-17 text-black-analText">Resources</h5>
      <div className=" bg-white-white flex items-center px-45 justify-between"></div>
      <div className=" bg-gray-createDisc py-10 px-45">
        <p className=" text-primary-darkGreen mb-7">Instruction</p>
        <h5 className="  text-black-analText  mb-28">
          Share at least one web-based resource related to specific concepts
          from this topic.
        </h5>

        <p className=" text-primary-darkGreen mb-7">Headers and prompts</p>
        <h5 className="  text-black-analText ">Resource name</h5>
        <p className="mb-40 text-gray-analyticsGray">
          Paste a link to the resource
        </p>
        <h5 className="  text-black-analText  ">Summary</h5>
        <p className="mb-40 text-gray-analyticsGray">
          Summarize the content of the the resource
        </p>
        <h5 className="  text-black-analText  ">Connections</h5>
        <p className="mb-40 text-gray-analyticsGray">
          Identify specific course concept in the resource
        </p>
      </div>
    </div>
  );
};

export default Resources;
