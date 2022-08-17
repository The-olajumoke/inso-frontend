import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";
import React from "react";

const SettingsSuccess = ({ insoCode, setActiveSettings }) => {
  return (
    <div className="w-350   flex flex-col rounded-md shadow-createDiscussion  overflow-hidden">
      <div className=" bg-primary-darkGreen py-4 px-38  flex justify-between items-center "></div>
      <div className="flex flex-col items-center bg-white-white pt-14 px-38">
        <div className="flex items-center justify-center mb-9">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1660216834/savedSuccessfully_wg8hew.svg"
            alt="success"
            layout="fixed"
            width="25"
            height="25"
          />
        </div>
        <h4 className=" text-primary-darkGreen">Saved successfully</h4>
        <span className=" text-xs text-primary-darkGreen">
          Share and enjoy your discussions.
        </span>
        <div className="mt-38 mb-25 flex justify-between items-center gap-3 w-full">
          <button
            className="w-1/2 h-30 bg-gray-background text-primary-darkGreen text-xs rounded "
            onClick={() => {
              location.replace("/discussions");
              // setActiveSettings("updateDisc");
            }}
          >
            Done
          </button>
          <button className="w-1/2 border btn h-30 text-xs " id={insoCode}>
            Share now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSuccess;