import Image from "next/image";
import React from "react";

const ParticipantsRow = ({ participants, role }) => {
  const { f_name, l_name, username, _id } = participants;

  return (
    <div className="px-24 flex items-center justify-between w-full mb-16">
      <div className="flex items-center">
        <Image
          src="/static/icons/Avatar.svg"
          alt="avatar"
          width={24}
          height={24}
        />
        <div className="flex flex-col ml-8">
          {" "}
          <p className="  text-black-postInsp  text-sm ">
            {f_name}
            {l_name}{" "}
          </p>
          <span className=" text-gray-analyticsGray text-xs">@{username}</span>
        </div>
      </div>
      {role === "facilitator" && (
        <div className="flex items-center">
          <Image
            src="/static/icons/mute.svg"
            alt="avatar"
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <button className="ml-30 text-primary-blue cursor-pointer text-sm hover:text-other-danger">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default ParticipantsRow;
