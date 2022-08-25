import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import notifications_active from "../public/static/icons/notifications_active.svg";
import active_disc from "../public/static/icons/active_disc.svg";
import more_icon_grey from "../public/static/icons/more_icon_grey.svg";
import edit_grey from "../public/static/icons/edit_grey.svg";
import archive_grey from "../public/static/icons/archive_grey.svg";
import copy_grey from "../public/static/icons/copy_grey.svg";
import users_icon from "../public/static/icons/users_icon.svg";
const DasbboardDiscBox = ({ discussion, createArchived }) => {
  const { _id, poster, participants, name, date, insoCode } = discussion;
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      // style={{ minHeight: "110px" }}
      className="vp-600:w-full vp-1024:w-280 w-300 h-110  vp-980:flex-grow bg-white-white rounded-sm shadow-xs p-14 px-12  flex flex-col relative justify-between "
    >
      <div className=" flex items-start justify-between mb-15 h-50">
        <Link passHref href={`/discussions/view-discussion/${_id}`}>
          <div className=" w-210 cursor-pointer h-full overflow-hidden">
            <h6 className=" text-gray-text font-medium p-0 m-0">{name}</h6>
          </div>
        </Link>

        <div className="flex items-center  gap-4">
          {" "}
          <div className=" flex justify-center items-center ">
            <Image
              src={notifications_active.src}
              alt="copy"
              layout="fixed"
              width="14"
              height="14"
            />
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src={active_disc.src}
              alt="copy"
              layout="fixed"
              width="12"
              height="12"
            />
          </div>
          <div className="relative ">
            <div
              className=" flex justify-center items-center "
              onClick={() => setOpenDropdown(true)}
            >
              <Image
                src={more_icon_grey.src}
                alt="copy"
                layout="fixed"
                width="12"
                height="16"
              />
            </div>
            {openDropdown && (
              <>
                <div
                  className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
                  onClick={() => setOpenDropdown(false)}
                ></div>
                <div
                  className={`w-150   top-6 -right-40 bg-white-white absolute px-14 py-7 z-60  rounded-lg shadow-md `}
                >
                  <div className="w-full ">
                    <Link passHref href={`/discussions/edit-discussion/${_id}`}>
                      <div
                        className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none  border-gray-background cursor-pointer flex justify-start "
                      >
                        <div
                          className=" mr-10
                               flex justify-center items-center"
                        >
                          <Image
                            src={edit_grey.src}
                            alt="edit"
                            layout="fixed"
                            width="20"
                            height="20"
                          />
                        </div>
                        <span className=" text-xs text-black-postInsp ">
                          Edit
                        </span>
                      </div>
                    </Link>
                    <div
                      className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none  border-gray-background   cursor-pointer flex justify-start"
                      onClick={() => {
                        setOpenDropdown(false);
                        createArchived(_id);
                      }}
                    >
                      <div
                        className=" mr-10
                               flex justify-center items-center"
                      >
                        <Image
                          src={archive_grey.src}
                          alt="archive"
                          layout="fixed"
                          width="20"
                          height="20"
                        />
                      </div>
                      <span className=" text-xs text-black-postInsp ">
                        Archive
                      </span>
                    </div>
                    <div
                      className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none  border-gray-background   cursor-pointer flex justify-start"
                      // onClick={() => {
                      //   setOpenDropdown(false);
                      // }}
                    >
                      <div className=" mr-10 flex justify-center items-center">
                        <Image
                          src={copy_grey.src}
                          alt="edit"
                          layout="fixed"
                          width="20"
                          height="20"
                        />
                      </div>
                      <span className=" text-xs text-black-postInsp ">
                        Share :{" "}
                        <span className=" text-primary-darkGreen">
                          {insoCode}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <span className=" text-xs text-gray-analyticsGray">
          by {poster.username}
        </span>
        <div className="flex justify-center">
          <Image
            src={users_icon.src}
            alt="copy"
            layout="fixed"
            width="20"
            height="20"
          />
          <p className=" text-black-postInsp ml-5">{participants.length}</p>
        </div>
      </div>
    </div>
  );
};

export default DasbboardDiscBox;
