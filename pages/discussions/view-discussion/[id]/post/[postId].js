import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { GlobalContext } from "@/context/Provider";
import { API_URL } from "@/utils/url";
import { getSingleDiscussion } from "@/context/actions/discussion/getSingleDiscussion";

import avatar from "../../../../../public/static/images/avatar.svg";
import arrow_back_blue from "../../../../../public/static/icons/arrow_back_blue.svg";
import CommentThread from "@/components/CommentThread";
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
      if (foundPost) {
        setDiscTitle(singleDiscData?.name);
        setFirstName(foundPost[0]?.user?.f_name);
        setLastName(foundPost[0]?.user?.l_name);
        setUserName(foundPost[0]?.user?.username);
        setPostTitle(foundPost[0]?.post);
        setComments(foundPost[0]?.comments);
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
                  src={"/" + arrow_back_blue.src}
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
        <div className={` px-16 vp-min-601:px-42 py-10 bg-gray-background `}>
          <div className=" flex justify-between items-center">
            <div className="flex  items-center">
              <div className="flex items-center justify-center">
                <Image
                  src={"/" + avatar.src}
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
                  posted 6 mins ago
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 text-black-postInsp  break-words post-title">
            {parse(postTitle)}
          </div>
        </div>
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
