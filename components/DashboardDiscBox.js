import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const DasbboardDiscBox = ({ discussion, createArchived }) => {
  const { _id, poster, participants, name, date, insoCode } = discussion;
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      // style={{ minHeight: "110px" }}
      className="vp-600:w-full h-145  w-full vp-980:flex-grow bg-white-white rounded-sm shadow-xs p-14  flex flex-col relative justify-between"
    >
      <div className=" flex items-start justify-between mb-15">
        <Link passHref href={`/discussions/view-discussion/${_id}`}>
          <div className=" w-210 cursor-pointer">
            <h5 className=" text-gray-text font-medium p-0 m-0">{name}</h5>
          </div>
        </Link>

        <div className="flex items-center  gap-4">
          {" "}
          <div className=" flex justify-center items-center ">
            <Image
              src="/icons/notifications_active.svg"
              alt="copy"
              layout="fixed"
              width="14"
              height="14"
            />
          </div>
          <div className=" flex justify-center items-center">
            <Image
              src="/icons/active_disc.svg"
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
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655331924/InsoImages/more_icon_grey_gpknda.svg"
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
                            src="https://res.cloudinary.com/insomaryland/image/upload/v1659170193/edit_grey_ko2542.svg"
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
                          src="https://res.cloudinary.com/insomaryland/image/upload/v1659170193/archive_grey_wgyedn.svg"
                          alt="archived"
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
                          src="https://res.cloudinary.com/insomaryland/image/upload/v1659170193/copy_grey_zvy53b.svg"
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
            src="/icons/users_icon.svg"
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