import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const DiscussionBox = ({ discussion }) => {
  const { id, userName, users, title, date, code } = discussion;
  const [dropdown, setOpenDropdown] = useState(false);
  return (
    <div
      // style={{ width: "320px" }}
      className="vp-600:w-full vp-600:h-160  w-320 vp-980:flex-grow bg-white-white rounded-sm shadow-xs py-13 px-15  flex flex-col relative justify-between"
    >
      <div className="border-b border-border-green flex items-center justify-between pb-10 mb-12">
        <div className="flex items-center">
          <div className="flex justify-center items-end  mr-12">
            <Image
              src="/icons/discussion_icon.svg"
              alt="create discussion"
              layout="fixed"
              width="20"
              height="20"
            />
          </div>
          <p className=" text-gray-text">{userName}</p>
        </div>
        <div className=" flex items-center">
          <div className="flex justify-center items-center  ">
            <Image
              src="/icons/users_icon.svg"
              alt="users"
              layout="fixed"
              width="20"
              height="20"
            />
            <h6 className="ml-5 text-gray-text">{users}</h6>
          </div>
          <button className="flex justify-center items-center ml-20">
            <Image
              src="/icons/muted_icon.svg"
              alt="muted"
              layout="fixed"
              width="20"
              height="20"
            />
          </button>
          <div className="flex justify-center items-center ml-18">
            <div onClick={() => setOpenDropdown(true)}>
              <Image
                src="/icons/more_icon.svg"
                alt="more"
                layout="fixed"
                width="20"
                height="20"
              />
            </div>
            {dropdown && (
              <>
                <div
                  className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
                  onClick={() => setOpenDropdown(false)}
                ></div>
                <div
                  className={`w-176   top-6  -right-6 bg-white-white absolute z-60  rounded-lg shadow-xs`}
                >
                  <div className="w-full ">
                    <div
                      className="text-gray-text
                  hover:bg-blue-lightBlue py-8 px-20 border-b-2  last:border-none border-border-dropdownLine cursor-pointer flex justify-start"
                      onClick={() => {
                        setOpenDropdown(false);
                      }}
                    >
                      <div className=" mr-12 flex justify-center items-center">
                        <Image
                          src="/icons/edit.svg"
                          alt="edit"
                          layout="fixed"
                          width="16"
                          height="16"
                        />
                      </div>
                      <p className=" ">Edit</p>
                    </div>
                    <div
                      className="text-gray-text
                  hover:bg-blue-lightBlue py-8 px-20 border-b-2  last:border-none border-border-dropdownLine cursor-pointer flex justify-start"
                      onClick={() => {
                        setOpenDropdown(false);
                      }}
                    >
                      <div className=" mr-12 flex justify-center items-center">
                        <Image
                          src="/icons/archive.svg"
                          alt="archive"
                          layout="fixed"
                          width="16"
                          height="16"
                        />
                      </div>
                      <p className=" ">Archive</p>
                    </div>
                    {/* <div
                      className="text-gray-text
                  hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-border-dropdownLine cursor-pointer flex justify-start"
                      onClick={() => {
                        setOpenDropdown(false);
                      }}
                    >
                      <div className=" mr-12 flex justify-center items-center">
                        <Image
                          src="/icons/duplicate.svg"
                          alt="duplicate"
                          layout="fixed"
                          width="16"
                          height="16"
                        />
                      </div>
                      <p className=" ">Duplicate</p>
                    </div>
                    <div
                      className="text-gray-text
                  hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-border-dropdownLine cursor-pointer flex justify-start"
                      onClick={() => {
                        setOpenDropdown(false);
                      }}
                    >
                      <div className=" mr-12 flex justify-center items-center">
                        <Image
                          src="/icons/facilitator.svg"
                          alt="facilitator"
                          layout="fixed"
                          width="16"
                          height="16"
                        />
                      </div>
                      <p className=" ">Add Facilitator</p>
                    </div> */}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between mb-15">
        <div className=" w-210">
          <h4 className=" text-gray-text font-medium">{title}</h4>
        </div>
        <div className=" text-gray-text py-2 px-8 bg-other-disabled text-xs font-normal rounded">
          {date}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center items-end  mr-12">
          <h6 className=" text-gray-text mr-10">{code}</h6>
          <Image
            src="/icons/copy_icon.svg"
            alt="copy"
            layout="fixed"
            width="20"
            height="20"
          />
        </div>
        <Link href={`/discussions/view-discussion/${id}`}>
          <a className="h-34 bg-other-disabled py-7 px-25 rounded text-primary-darkGreen text-sm text-center">
            Open
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DiscussionBox;
