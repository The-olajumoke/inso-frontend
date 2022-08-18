import React from "react";
import Image from "next/image";

const CommentBoxHeader = ({ instruction, setActiveCommentBox }) => {
  return (
    <div className=" flex items-center justify-between pb-15 border-b-2 border-blue-inputBlue mb-28">
      <div className=" flex items-center w-9/12">
        <div className="flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/insomaryland/image/upload/v1655333490/info_outline_exdgeh.svg"
            alt="back"
            layout="fixed"
            width="20   "
            height="20  "
            className=" cursor-pointer"
          />
        </div>
        <p className=" text-primary-darkGreen ml-14">{instruction}</p>
      </div>
      <div className="flex items-center">
        <button className=" text-sm text-primary-blue">Save to drafts</button>
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
  );
};

export default CommentBoxHeader;
