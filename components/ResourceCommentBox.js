import React, { useState } from "react";
import Image from "next/image";
import ShowInspirations from "./ShowInspirations";

const ResourceCommentBox = ({ setActiveCommentBox }) => {
  const { title, setTitle } = useState("");
  return (
    <div className="border border-primary-darkGreen rounded-lg  mb-32 ">
      <div className=" bg-gray-createDisc  py-24 px-29 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="  flex items-center mb-12">
            <div className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655333490/info_outline_exdgeh.svg"
                alt="back"
                layout="fixed"
                width="24"
                height="24"
                className=" cursor-pointer"
              />
            </div>
            <h6 className=" text-primary-darkGreen ml-14">
              Create a poll that encourages further discussion about a specific
              concept related to this topic{" "}
            </h6>
          </div>
          <div className=" flex items-center">
            <button className=" text-sm text-primary-darkGreen">
              Save to drafts
            </button>
            <button
              className="ml-47 flex justify-center items-center"
              onClick={() => setActiveCommentBox("noInspiration")}
            >
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655455953/InsoImages/cancel_zcyobf.svg"
                alt="cancel"
                layout="fixed"
                width="16"
                height="16"
              />
            </button>
          </div>
        </div>
        <input
          type="text"
          className="h-45 bg-transparent outline-none w-full text-xl border-none mt-0 focus:ring-0 px-0 mb-13"
          placeholder="Add a title"
        />
        <div className=" mb-32">
          <h6 className=" text-black-analText">Resource</h6>
          <input
            type="text"
            className="h-35 bg-transparent outline-none w-full text-sm border-none focus:ring-0 px-0 "
            placeholder="Paste a link to the resource"
          />
        </div>
        <div className=" mb-32">
          <h6 className=" text-black-analText">Summary</h6>
          <input
            type="text"
            className="h-35 bg-transparent outline-none w-full text-sm border-none focus:ring-0 px-0 "
            placeholder="Identify specific course concept in the resource"
          />
        </div>
        <div className="">
          <h6 className=" text-black-analText">Connections</h6>
          <input
            type="text"
            className="h-35 bg-transparent outline-none w-full text-sm border-none focus:ring-0 px-0 "
            placeholder="Identify specific course concept in the resource"
          />
        </div>
      </div>
      <div className="bg-white-white   py-15 px-29">
        <textarea
          name=""
          id=""
          className="h-50 border-none"
          placeholder="Say something different"
        ></textarea>
      </div>
      <ShowInspirations
        setActiveCommentBox={setActiveCommentBox}
        title="Resources"
      />
    </div>
  );
};

export default ResourceCommentBox;
