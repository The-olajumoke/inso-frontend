import React, { useEffect, useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import avatar from "../public/static/images/avatar_user.svg";
import more_icon_grey from "../public/static/icons/more_icon_grey.svg";
import edit_green from "../public/static/icons/edit_green.svg";
import upvote_emoji_active from "../public/static/icons/upvote_emoji.svg";
import upvote_emoji from "../public/static/icons/upvote_emoji.svg";
import comment_emoji from "../public/static/icons/comment_emoji.svg";
import more_icons from "../public/static/new_icons/more_icons.svg";
import moment from "moment";
const Posts = ({ posts, setReplyingId, discId, userId }) => {
  const { _id, date, post, user, comments, post_inspiration } = posts;
  const [openEditDropdown, setOpenEditDropdown] = useState(false);
  const [activeOutline, setActiveOutline] = useState("first");
  const [outlineArray, setOutlineArray] = useState([]);
  const [poster, setPoster] = useState(true);
  console.log(posts);
  useEffect(() => {
    if (post_inspiration) {
      setOutlineArray(Object.keys(post?.outline));
    }
  }, [post_inspiration, post]);

  useEffect(() => {
    if (userId == user._id) {
      setPoster(true);
    } else {
      setPoster(false);
    }
  }, [userId, user]);

  const updatedDate = new Date(date);
  console.log(updatedDate);
  return (
    <>
      {!post_inspiration ? (
        <div className={` py-10 bg-white-white  mb-6 pl-16 vp-600:pl-0 `}>
          <div className=" flex flex-col items-start ">
            <div className=" flex w-full">
              <div className=" w-full flex items-start">
                <div className="flex items-center justify-center mr-12">
                  <Image
                    src={avatar.src}
                    alt="user"
                    layout="fixed"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="flex  items-center">
                  <div className="">
                    <p className=" font-medium capitalize text-black-postInsp">
                      {user.f_name} {user.l_name}
                      <span className=" text-primary-darkGreen text-xs font-normal ml-3 uppercase">
                        @{user.username}
                      </span>
                    </p>
                    <span className="text-xs text-gray-faintGray">
                      {moment(updatedDate).fromNow()}
                    </span>
                  </div>
                </div>
              </div>
              {poster && (
                <div className="flex items-center justify-center relative">
                  <div
                    className="flex items-center justify-center "
                    onClick={() => setOpenEditDropdown(true)}
                  >
                    <Image
                      src={more_icon_grey.src}
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
                                src={edit_green.src}
                                alt="edit"
                                layout="fixed"
                                width="12"
                                height="12"
                              />
                            </div>
                            <p className="text-black-analText ">Edit Post</p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            <Link
              passHref
              href={`/discussions/view-discussion/${discId}/post/${_id}/`}
            >
              <a className="text-black-postInsp cursor-pointer">
                {parse(post?.post)}
              </a>
            </Link>
            <div className=" mt-16 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src={upvote_emoji.src}
                  alt="back"
                  layout="fixed"
                  width="24"
                  height="24"
                  className=" cursor-pointer"
                />
                <p className=" text-black-postInsp">0</p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center"
                  onClick={() =>
                    setReplyingId({
                      user: user.username,
                      id: _id,
                    })
                  }
                >
                  <Image
                    src={comment_emoji.src}
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
                <div className="flex items-center">
                  <Image
                    src={more_icons.src}
                    alt="back"
                    layout="fixed"
                    width="24"
                    height="24"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` py-10 bg-white-white  mb-6 pl-16 vp-600:pl-0  w-full`}
        >
          <div className="w-full flex flex-col items-start">
            <div className="flex items-start">
              <div className="flex  justify-center mr-12 vp-980:mr-6">
                <Image
                  src={avatar.src}
                  alt="user"
                  layout="fixed"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex  items-center">
                <div className="">
                  <p className=" font-medium capitalize text-black-postInsp">
                    {user.f_name} {user.l_name}
                    <span className=" text-primary-darkGreen text-xs font-normal ml-3 uppercase">
                      @{user.username}
                    </span>
                  </p>
                  <span className="text-xs text-gray-faintGray">
                    {moment(updatedDate).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col w-full pr-20 vp-980:pr-0">
              {/* <Link
                passHref
                href={`/discussions/view-discussion/${discId}/post/${_id}/`}
              > */}
              <div className="grid grid-cols-5 vp-600:grid-cols-3  my-16 w-full vp-600:gap-3   ">
                <button
                  className={`${
                    activeOutline === "first"
                      ? "btn-currentSection"
                      : "btn-notCurrentSection"
                  }`}
                  onClick={() => setActiveOutline("first")}
                >
                  {outlineArray[0]}
                  {/* {parse(post?.outline?.)} */}
                </button>
                <button className="border-b-2 border-other-disabled vp-600:hidden"></button>
                <button
                  className={`${
                    activeOutline === "second"
                      ? "btn-currentSection"
                      : "btn-notCurrentSection"
                  }`}
                  onClick={() => setActiveOutline("second")}
                >
                  {outlineArray[1]}
                </button>
                <button className="border-b-2 border-other-disabled vp-600:hidden"></button>
                <button
                  className={`${
                    activeOutline === "third"
                      ? "btn-currentSection"
                      : "btn-notCurrentSection"
                  }`}
                  onClick={() => setActiveOutline("third")}
                >
                  {outlineArray[2]}
                </button>
              </div>
              {activeOutline === "first" && (
                <div className="post_content">
                  {outlineArray.length &&
                    parse(post?.outline?.[outlineArray[0]])}
                </div>
              )}
              {activeOutline === "second" && (
                <div className="post_content">
                  {outlineArray.length &&
                    parse(post?.outline?.[outlineArray[1]])}
                </div>
              )}
              {activeOutline === "third" && (
                <div className="post_content">
                  {outlineArray.length &&
                    parse(post?.outline?.[outlineArray[2]])}
                </div>
              )}
              <div className=" mt-16 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Image
                    src={upvote_emoji.src}
                    alt="back"
                    layout="fixed"
                    width="24"
                    height="24"
                    className=" cursor-pointer"
                  />
                  <p className=" text-black-postInsp">0</p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center"
                    onClick={() =>
                      setReplyingId({
                        user: user.username,
                        id: _id,
                      })
                    }
                  >
                    <Image
                      src={comment_emoji.src}
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
                  <div className="flex items-center">
                    <Image
                      src={more_icons.src}
                      alt="back"
                      layout="fixed"
                      width="24"
                      height="24"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Posts;
