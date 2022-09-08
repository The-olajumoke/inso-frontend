import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";
import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

const SettingsSuccess = ({ insoCode, setActiveSettings }) => {
  const [sharedSuccess, setSharedSuccess] = useState(false);
  const copiedToClipboard = () => {
    navigator.clipboard.writeText(insoCode);
    setSharedSuccess(true);
    setTimeout(() => {
      setSharedSuccess(false);
    }, [2000]);
  };
  return (
    <div className="w-350   flex flex-col rounded-md shadow-createDiscussion  overflow-hidden">
      <div className=" bg-primary-darkGreen py-4 px-38  flex justify-between items-center "></div>
      <div className="flex flex-col items-center bg-white-white pt-14 px-38">
        <div className="flex items-center justify-center mb-9">
          <Image
            src="/static/icons/savedSuccessfully.svg"
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
          <Link href="/discussions" passHref>
            <a className="w-1/2">
              <button className="w-full h-30 bg-gray-background text-primary-darkGreen text-xs rounded font-medium ">
                Back
              </button>
            </a>
          </Link>
          <button
            className="w-1/2 border btn h-30 text-xs "
            id={insoCode}
            onClick={copiedToClipboard}
          >
            Share now
          </button>
        </div>
      </div>
      {sharedSuccess && (
        <SuccessModal title="Inso code copied successfully" subTitle="" />
      )}
    </div>
  );
};

export default SettingsSuccess;
