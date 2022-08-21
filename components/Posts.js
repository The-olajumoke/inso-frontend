import React, { useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
const Posts = ({ posts, setReplyingId, discId }) => {
  const { _id, date, post, user, comments } = posts;
  const [openEditDropdown, setOpenEditDropdown] = useState(false);
  return (
    <div className={` py-10 bg-white-white  mb-6`}>
      <div className=" flex justify-between items-center">
        <div className="flex  items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/static/icons/avatar.svg"
              alt="back"
              layout="fixed"
              width="40"
              height="40"
            />
          </div>
          <div className="ml-13">
            <p className=" font-medium capitalize text-black-postInsp">
              {user.f_name} {user.l_name}
              <span className=" text-primary-darkGreen text-xs font-normal ml-3 uppercase">
                @{user.username}
              </span>
            </p>
            <span className="text-xs text-gray-faintGray">
              posted 6 mins ago
            </span>
          </div>
        </div>

        {/* <div className="flex items-center justify-center relative">
            <div
              className="flex items-center justify-center "
              onClick={() => setOpenEditDropdown(true)}
            >
              <Image
                src="https://res.cloudinary.com/insomaryland/image/upload/v1655331924/InsoImages/more_icon_grey_gpknda.svg"
                alt="back"
                layout="fixed"
                width="6"
                height="22"
                className=" cursor-pointer"
              />
            </div>
            {openEditDropdown && (
              <>
                <div
                  className={`fixed h-screen w-screen top-0 left-0 bg-other-overlay animate-fade-in z-50`}
                  onClick={() => setOpenEditDropdown(false)}
                ></div>
                <div
                  className={`w-176   top-6  -right-6 bg-white-white absolute px-16 py-7 z-60  rounded-lg shadow-xs `}
                >
                  <div className="w-full ">
                    <div
                      className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray cursor-pointer flex justify-start "
                      // onClick={}
                    >
                      <div
                        className=" mr-12
                               flex justify-center items-center"
                      >
                        <Image
                          src="https://res.cloudinary.com/insomaryland/image/upload/v1657099297/InsoImages/edit_green_ijlfht.svg"
                          alt="edit"
                          layout="fixed"
                          width="12"
                          height="12"
                        />
                      </div>
                      <p className="text-black-analText ">Edit discussion</p>
                    </div>
                    <div
                      className=" text-black-analText
                  :hover:bg-blue-lightBlue py-8 border-b-2  last:border-none border-gray-analyticsGray  cursor-pointer flex justify-start"
                      // onClick={() => {
                      //   setOpenDropdown(false);
                      // }}
                    >
                      <div
                        className=" mr-12
                               flex justify-center items-center"
                      >
                        <Image
                          src="https://res.cloudinary.com/insomaryland/image/upload/v1657099304/InsoImages/close_green_kjr4pd.svg"
                          alt="edit"
                          layout="fixed"
                          width="12"
                          height="12"
                        />
                      </div>
                      <p className=" text-black-analText">Close discussion</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div> */}
      </div>

      <Link
        passHref
        href={`/discussions/view-discussion/${discId}/post/${_id}/`}
      >
        <a className="text-black-postInsp cursor-pointer">{parse(post)}</a>
      </Link>
      <div className=" mt-24 flex gap-8">
        <div className="flex items-center gap-2">
          <Image
            src="/static/icons/upvote_emoji.svg"
            alt="back"
            layout="fixed"
            width="24"
            height="24"
            className=" cursor-pointer"
          />
          <p className=" text-black-postInsp">12</p>
        </div>
        <div className="flex items-center gap-2">
          <div
            onClick={() =>
              setReplyingId({
                user: user.username,
                id: _id,
              })
            }
          >
            <Image
              src="/static/icons/comment_emoji.svg"
              alt="back"
              layout="fixed"
              width="24"
              height="24"
              className=" cursor-pointer"
            />
          </div>
          <p className=" text-black-postInsp">{comments.length}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/static/icons/love_emoji.svg"
            alt="back"
            layout="fixed"
            width="20"
            height="20"
            className=" cursor-pointer"
          />
          <p className=" text-black-postInsp">12</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
