import React, { useState } from "react";
import Link from "next/link";
import WhiteLoader from "./whiteLoader";
import Image from "next/image";
const UpdateDiscussion = ({
  discName,
  setDiscName,
  createLoading,
  createData,
  handleCreateDisc,
  setActiveSettings,
}) => {
  return (
    <div className=" w-450  bg-gray-background shadow-lg">
      <div className=" bg-primary-darkGreen h-60 px-38 vp-600:px-16 py-13  rounded-t-md">
        <h4 className=" text-white-white">Discussion Name</h4>
      </div>
      <div className=" bg-white-white px-38 vp-600:px-16 py-16 rounded-b-md">
        <form onSubmit={handleCreateDisc}>
          <div className="border rounded-xs border-border-dropdownLine p-2 mb-12">
            <textarea
              name=""
              id=""
              value={discName}
              onChange={(e) => setDiscName(e.target.value)}
              // onKeyDown={handleKeyDown}
              placeholder="Input discussion title"
              className=" text-xl outline-none
              ring-0   h-150  border-none placeholder:text-gray-analyticsGray text-black-postInsp"
            ></textarea>
          </div>
        </form>

        <div className="  flex justify-end items-center relative h-40">
          {createLoading ? (
            <button className="btn w-90 h-32 text-sm">
              <WhiteLoader />
            </button>
          ) : (
            <button
              className="btn w-90 h-32 text-sm"
              onClick={() => {
                handleCreateDisc();
                setActiveSettings("starterPrompt");
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateDiscussion;
