import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "@/context/Provider";
import { API_URL } from "@/utils/url";
import { getSingleDiscussion } from "@/context/actions/discussion/getSingleDiscussion";
import moment from "moment";
import avatar from "../../../../../public/static/images/avatar.svg";
import arrow_back_blue from "../../../../../public/static/icons/arrow_back_blue.svg";
import CommentThread from "@/components/CommentThread";
import CommentBox from "@/components/CommentBox";

const parse = require("html-react-parser");
const Post = () => {
  const router = useRouter();
  const { id, postId } = router.query;
  console.log(id, postId);
  const [token, setToken] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [discTitle, setDiscTitle] = useState("");
  const [comments, setComments] = useState([]);
  const [datePosted, setDatePosted] = useState("");
  const [foundPost, setFoundPost] = useState([]);
  const [activeOutline, setActiveOutline] = useState("first");
  const [outlineArray, setOutlineArray] = useState([]);
  const {
    discussionDispatch,
    discussionState: {
      discussion: { loading, singleDiscData, postInspData, postSuccess },
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    setToken(accessToken);
  }, []);
  useEffect(() => {
    if (token !== "" && id) {
      getSingleDiscussion(API_URL, token, id)(discussionDispatch);
    }
  }, [id, token, postSuccess]);
  console.log(singleDiscData);
  useEffect(() => {
    if (singleDiscData !== null) {
      const foundPost = singleDiscData?.posts.filter(
        (post) => post._id == postId
      );
      console.log(foundPost);
      setFoundPost(foundPost);
      setDiscTitle(singleDiscData?.name);
      setFirstName(foundPost[0]?.user?.f_name);
      setLastName(foundPost[0]?.user?.l_name);
      setUserName(foundPost[0]?.user?.username);
      setPostTitle(foundPost[0]?.post?.post);
      setComments(foundPost[0]?.comments);
      setDatePosted(foundPost?.date);
      if (foundPost[0].post_inspiration) {
        setFoundPost(foundPost);
        setOutlineArray(Object.keys(foundPost[0]?.post?.outline));
      }
    }
  }, [singleDiscData]);

  return (
    <Layout
      showHeader={false}
      title={`Inso | Discussion`}
      searchBar={false}
      bgColor="bg-white-white"
    >
      <div className="h-full flex flex-col">
        <div
          className={` h-65 vp-980:h-auto bg-gray-background mb-5  vp-980:mt-16 px-16 vp-min-601:px-42 flex  items-center justify-between `}
        >
          <div className=" flex items-center">
            <Link passHref href={`/discussions/view-discussion/${id}`}>
              <div className="flex items-center justify-center">
                <Image
                  src={arrow_back_blue.src}
                  alt="back"
                  layout="fixed"
                  width="30"
                  height="30"
                />
              </div>
            </Link>
            <h5 className="ml-13 capitalize">{discTitle}</h5>
          </div>
        </div>
        {!foundPost[0]?.post_inspiration ? (
          <div className={` px-16 vp-min-601:px-42 py-10 bg-gray-background `}>
            <div className=" flex justify-between items-center">
              <div className="flex  items-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={avatar.src}
                    alt="user"
                    layout="fixed"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="ml-13">
                  <h6 className=" font-medium capitalize">
                    {firstName} {lastName}
                    <span className=" text-primary-darkGreen text-xs font-normal ml-3 uppercase">
                      @{userName}
                    </span>
                  </h6>
                  <span className="text-xs text-gray-faintGray">
                    {moment(datePosted).fromNow()}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 text-black-postInsp  break-words post-title">
              {parse(postTitle)}
            </div>
          </div>
        ) : (
          <div
            className={` py-10 bg-gray-background  mb-6  px-16 vp-min-601:px-42  w-full`}
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
                      {firstName} {lastName}
                      <span className=" text-primary-darkGreen text-xs font-normal ml-3 uppercase">
                        @{userName}
                      </span>
                    </p>
                    <span className="text-xs text-gray-faintGray">
                      {moment(datePosted).fromNow()}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col w-full pr-20 vp-980:pr-0">
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
                  <a>
                    <div className="post_content ">
                      {outlineArray.length &&
                        parse(foundPost[0]?.post?.outline?.[outlineArray[0]])}
                    </div>
                  </a>
                )}
                {activeOutline === "second" && (
                  <a>
                    <div className="post_content">
                      {outlineArray.length &&
                        parse(foundPost[0]?.post?.outline?.[outlineArray[1]])}
                    </div>
                  </a>
                )}
                {activeOutline === "third" && (
                  <a>
                    <div className="post_content">
                      {outlineArray.length &&
                        parse(foundPost[0]?.post?.outline?.[outlineArray[2]])}
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="h-full ">
          {comments.length ? (
            <div>
              {comments.map((comm, index) => (
                <CommentThread
                  posts={comm}
                  key={index}
                  discId={id}
                  // setReplyingId={setReplyingId}
                />
              ))}
            </div>
          ) : (
            <div className=" h-full flex justify-center items-center text-gray-text text-md">
              No available comments
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
